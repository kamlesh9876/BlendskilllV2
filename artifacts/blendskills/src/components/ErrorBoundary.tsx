import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Copy, Check } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  copied: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    copied: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, copied: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled React Error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = () => {
    if (this.state.error) {
      navigator.clipboard.writeText(this.state.error.message);
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2000);
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0e14] via-[#0e141d] to-[#05070b] text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white/6 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl text-center">
            <div className="w-16 h-16 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#FF6B35]">
              <AlertTriangle size={32} />
            </div>

            <h1 className="text-2xl font-bold font-display text-white mb-2">
              Something went wrong
            </h1>
            
            <p className="text-[#A8B0BF] text-sm mb-6 leading-relaxed">
              We encountered an unexpected error while rendering this page. You can try refreshing or returning to the home page.
            </p>

            {this.state.error && (
              <div className="mb-6 p-3 bg-[#0a0e14]/80 border border-white/10 rounded-lg text-left overflow-x-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#7E8798]">Error Details</span>
                  <button
                    onClick={this.handleCopyError}
                    className="flex items-center gap-1 text-xs text-[#00F5D4] hover:text-[#00F5D4]/80 transition-colors cursor-pointer"
                  >
                    {this.state.copied ? (
                      <>
                        <Check size={12} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-[#FF6B35] font-mono break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleReload}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] hover:from-[#FF8557] hover:to-[#FF6B35] text-white font-semibold transition-all duration-300 text-sm cursor-pointer shadow-[0_20px_40px_-12px_rgba(255,107,53,0.4)] hover:-translate-y-0.5"
              >
                <RefreshCw size={16} />
                Refresh Page
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/8 hover:bg-white/12 text-white font-medium transition-all duration-300 text-sm cursor-pointer"
              >
                <Home size={16} />
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
