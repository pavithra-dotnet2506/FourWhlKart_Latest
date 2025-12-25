import React from "react";
import { Button } from "./../components/ui/button";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error("UI Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold">Something went wrong</h2>
          <Button onClick={() => window.location.reload()}>Reload Page</Button>
        </div>
      );
    }
    return this.props.children;
  }
}
