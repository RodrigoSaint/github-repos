import React from "react";
import { render } from "@testing-library/react";
import RepositoryList from "./RepositoryList";

const defaultProps = {
  user: {
    avatarUrl: "https://avatars1.githubusercontent.com/u/12770501?v=4",
  },
  repositoryCollection: [
    {
      url: "http://localhost:3000/repo",
      name: "Repository",
      description: "Repository description",
      primaryLanguage: {
        name: "Javascript",
      },
    },
  ],
};

describe("Component: RepositoryList", () => {
  test("renders right quantity of repositories", () => {
    const { container } = render(<RepositoryList {...defaultProps} />);
    const elementCollection = container.querySelectorAll(
      ".RepositoryList-item"
    );
    expect(elementCollection.length).toBe(1);
  });
  test("renders repository correctly", () => {
    const { container } = render(<RepositoryList {...defaultProps} />);
    const element = container.querySelector(".RepositoryList-item");
    const repository = defaultProps.repositoryCollection[0];
    expect(
      element.querySelector(".RepositoryList-itemHeader > span").textContent
    ).toBe(repository.name);
    expect(element.querySelector(".RepositoryList-itemHeaderAvatar").src).toBe(
      defaultProps.user.avatarUrl
    );
    expect(
      element.querySelector(".RepositoryList-itemLanguage").textContent
    ).toBe(repository.primaryLanguage.name);
    expect(
      element.querySelector(".RepositoryList-itemDescription").textContent
    ).toBe(repository.description);
    expect(element.querySelector(".RepositoryList-itemLink").href).toBe(
      repository.url
    );
  });
});
