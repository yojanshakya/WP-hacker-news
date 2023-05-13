import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";
import { TEST_ID_ERR_BOUNDARY } from "./testId";

describe("Error Boundary", () => {
  it("catches errors and displays fallback", () => {

    const MockComponent = () => {
      throw new Error("error");
      return <div>hello world</div>;
    };

    render(
      <ErrorBoundary>
        <MockComponent />
      </ErrorBoundary>
    );

		expect(screen.getByTestId(TEST_ID_ERR_BOUNDARY)).toHaveTextContent("Oops something went wrong!")
  });
});
