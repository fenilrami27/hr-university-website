import React, { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error(`[HRU ErrorBoundary] Error caught in <${this.props.name || 'Component'}>:`, error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReloadPage = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback({ error: this.state.error, reset: this.handleReset })
          : this.props.fallback;
      }

      const isDev = Boolean(import.meta.env?.DEV);
      const componentName = this.props.name || 'This Section';

      return (
        <div className="w-full my-6 p-6 sm:p-8 rounded-3xl bg-[#12142B] border border-red-500/30 text-white shadow-xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30 mb-2">
                COMPONENT RECOVERY MODE
              </div>
              <h3 className="font-heading font-black text-lg sm:text-xl text-white">
                Unable to display {componentName}
              </h3>
              <p className="text-xs sm:text-sm text-[#A4A8C4] mt-1 font-sans max-w-xl">
                An unexpected rendering issue occurred in this section. The rest of HR University remains fully active and accessible.
              </p>

              {isDev && this.state.error && (
                <div className="mt-4 p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-red-300 overflow-x-auto max-h-48">
                  <div className="font-bold text-red-400 mb-1">
                    {this.state.error.name}: {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <pre className="text-[11px] text-white/70 whitespace-pre-wrap">
                      {this.state.error.stack.split('\n').slice(0, 6).join('\n')}
                    </pre>
                  )}
                </div>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={this.handleReset}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-hru-coral to-hru-gold text-[#0A0B1E] font-heading font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>

                <button
                  type="button"
                  onClick={this.handleReloadPage}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs border border-white/20 transition-colors"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
