import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { useQuery } from "graphql-hooks";
jest.mock("graphql-hooks");

describe("Component: App", () => {
  describe("when loading", () => {
    test("renders with error message", () => {
      useQuery.mockReturnValue({
        loading: true,
      });
      const { getByText } = render(<App />);
      expect(getByText(/Loading/i)).toBeInTheDocument();
    });
  });
  describe("when has error", () => {
    test("renders with error message", () => {
      useQuery.mockReturnValue({
        loading: false,
        error: true,
      });
      const { container } = render(<App />);
      expect(container.querySelector(".ErrorDisplay")).not.toBe(null);
    });
  });
  describe("when has data", () => {
    const mockedValue = {
      loading: false,
      error: false,
      data: {
        user: {
          name: "username",
          bio: "user bio",
          avatarUrl: "https://avatars1.githubusercontent.com/u/12770501?v=4",
          repositories: {
            nodes: [
              {
                name: "repository",
                description: "description",
                url: "http://localhost:3000/repo",
                primaryLanguage: {
                  name: "javascript",
                },
              },
            ],
            pageInfo: {
              hasPreviousPage: true,
              hasNextPage: true,
            },
          },
        },
      },
    };

    test("renders sub components", () => {
      useQuery.mockReturnValue(mockedValue);
      const { container } = render(<App />);
      expect(container.querySelector(".UserDisplay")).not.toBe(null);
      expect(container.querySelector(".RepositoryList")).not.toBe(null);
      expect(container.querySelector(".App-pagination")).not.toBe(null);
    });
  });
});
