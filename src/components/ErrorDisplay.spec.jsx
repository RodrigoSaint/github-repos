import React from "react";
import { render } from "@testing-library/react";
import ErrorDisplay from "./ErrorDisplay";

describe("Component: ErrorDisplay", () => {
  test("renders with error message", () => {
    const { getByText } = render(<ErrorDisplay />);
    expect(getByText(/Failed to get user repository/i)).toBeInTheDocument();
  });
});
