import { Component, type ReactNode } from "react"

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app-error">
          <div className="app-error-card">
            <span className="app-error-emoji">💥</span>
            <h2 className="app-error-title">Oops! Kuch galat ho gaya.</h2>
            <p className="app-error-text">
              Ek unexpected error aa gaya. Aapki progress IndexedDB mein safe hai —
              reload karke dobara shuru karo.
            </p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              🔄 Reload App
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}