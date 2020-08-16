import React from "react";
import { render } from "@testing-library/react";

import Loading from "./Loading";

describe("Component Loading", () => {
  describe("When loading", () => {
    test("renders loading message", () => {
      const { getByText } = render(
        <Loading isLoading>
          <span>Content</span>
        </Loading>
      );
      expect(getByText(/Loading/i)).toBeInTheDocument();
    });

    test("renders content", () => {
      const { getByText } = render(
        <Loading isLoading>
          <span>Content</span>
        </Loading>
      );
      expect(getByText(/Content/i)).toBeInTheDocument();
    });
  });
  describe("when not loading", () => {
    test("renders content", () => {
      const { getByText } = render(
        <Loading>
          <span>Content</span>
        </Loading>
      );
      expect(getByText(/Content/i)).toBeInTheDocument();
    });
    test("does not renders loading", () => {
      const { queryByText } = render(
        <Loading>
          <span>Content</span>
        </Loading>
      );

      expect(queryByText(/Loading/i)).not.toBeInTheDocument();
    });
  });
});
