import React from "react";
import { CustomError } from "../../utils/error";
import { TEST_ID_ERR_BOUNDARY } from "./testId";

interface IState {
  error: Error | null;
}
interface IProps {
  children?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  state: IState = { error: null };

  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render(): React.ReactNode {
    if (this.state.error) {
      return (
        <div className="error-boundary" data-testId={TEST_ID_ERR_BOUNDARY}>
          <h1 className="error-boundary__heading">Oops something went wrong!</h1>
          {this.state.error instanceof CustomError
            ? this.state.error.message
            : "There was some unknown error."}
        </div>
      );
    }

    return this.props.children;
  }
}
