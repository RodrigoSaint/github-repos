import React from "react";
import { render } from "@testing-library/react";
import UserDisplay from "./UserDisplay";

const defaultProps = {
  user: {
    name: "Rodrigo",
    bio: "User bio",
    avatarUrl: "https://avatars1.githubusercontent.com/u/12770501?v=4",
  },
};

describe("Component: UserDisplay", () => {
  test("renders user correctly", () => {
    const { container } = render(<UserDisplay {...defaultProps} />);
    expect(container.querySelector(".UserDisplay-avatar").src).toBe(
      defaultProps.user.avatarUrl
    );
    expect(container.querySelector(".UserDisplay-name").textContent).toBe(
      defaultProps.user.name
    );
    expect(container.querySelector(".UserDisplay-bio").textContent).toBe(
      defaultProps.user.bio
    );
  });
});
