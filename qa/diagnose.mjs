import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

async function diagnose(url, label) {
  console.log(`\n=== DIAGNOSING: ${url} (${label}) ===`);
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const consoleMessages = [];
  const pageErrors = [];
  const failedRequests = [];

  page.on('console', (msg) => {
    consoleMessages.push({ type: msg.type(), text: msg.text(), location: msg.location() });
  });

  page.on('pageerror', (err) => {
    pageErrors.push({ message: err.message, stack: err.stack });
  });

  page.on('requestfailed', (req) => {
    failedRequests.push({ url: req.url(), failure: req.failure()?.errorText });
  });

  page.on('response', (res) => {
    if (res.status() >= 400) {
      failedRequests.push({ url: res.url(), status: res.status() });
    }
  });

  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
    console.log(`Navigation status: ${response?.status()}`);
  } catch (err) {
    console.log(`Navigation error/timeout: ${err.message}`);
  }

  // Wait a moment for any deferred animations/effects
  await page.waitForTimeout(2000);

  // Diagnostics inside DOM
  const domInfo = await page.evaluate(() => {
    const root = document.getElementById('root');
    const rootChildrenCount = root ? root.children.length : 0;
    const rootInnerHTML = root ? root.innerHTML.slice(0, 300) : '';

    const centerEl = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    const topElementDesc = centerEl.map((el) => ({
      tagName: el.tagName,
      id: el.id,
      className: el.className,
      zIndex: window.getComputedStyle(el).zIndex,
      opacity: window.getComputedStyle(el).opacity,
      pointerEvents: window.getComputedStyle(el).pointerEvents,
      visibility: window.getComputedStyle(el).visibility,
    }));

    const bodyStyle = window.getComputedStyle(document.body);
    const htmlStyle = window.getComputedStyle(document.documentElement);

    // Look for full-screen fixed overlays
    const allFixed = Array.from(document.querySelectorAll('*')).filter((el) => {
      const style = window.getComputedStyle(el);
      return (
        style.position === 'fixed' &&
        parseFloat(style.width) >= window.innerWidth * 0.9 &&
        parseFloat(style.height) >= window.innerHeight * 0.9
      );
    }).map((el) => {
      const style = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        id: el.id,
        className: el.className,
        zIndex: style.zIndex,
        opacity: style.opacity,
        pointerEvents: style.pointerEvents,
        display: style.display,
      };
    });

    return {
      title: document.title,
      rootExists: !!root,
      rootChildrenCount,
      rootInnerHTML,
      bodyOverflow: bodyStyle.overflow,
      bodyHeight: bodyStyle.height,
      htmlOverflow: htmlStyle.overflow,
      topElementsAtCenter: topElementDesc.slice(0, 5),
      fixedFullOverlays: allFixed,
    };
  });

  console.log('\n--- DOM & Document Info ---');
  console.log(JSON.stringify(domInfo, null, 2));

  console.log('\n--- Console Messages ---');
  consoleMessages.forEach((m) => console.log(`[${m.type}] ${m.text}`));

  console.log('\n--- Page Errors ---');
  if (pageErrors.length === 0) console.log('None');
  pageErrors.forEach((e) => console.log(e.stack || e.message));

  console.log('\n--- Failed / 4xx Requests ---');
  if (failedRequests.length === 0) console.log('None');
  failedRequests.forEach((r) => console.log(JSON.stringify(r)));

  // Save screenshot
  fs.mkdirSync('qa/screenshots', { recursive: true });
  const shotPath = `qa/screenshots/${label}.png`;
  await page.screenshot({ path: shotPath, fullPage: false });
  console.log(`Saved screenshot: ${shotPath}`);

  await browser.close();
}

async function run() {
  await diagnose('http://localhost:5173', 'diagnose-default');
  await diagnose('http://localhost:5173/?nointro', 'diagnose-nointro');
}

run();
