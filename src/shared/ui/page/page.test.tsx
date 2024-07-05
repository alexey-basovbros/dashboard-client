import { describe, it, expect } from "vitest";
import { render, screen } from "@test";

import { Page } from "./page";

describe("page component", () => {
  it("render", () => {
    render(<Page></Page>);

    expect(screen.getByTestId("page-wrapper")).toBeInTheDocument();
  });

  it("render with child", () => {
    render(<Page><h3>Some child</h3></Page>);

    expect(screen.getByText('Some child')).toBeInTheDocument();
  });

  it("render with className property", () =>  {
    render(<Page className="some-class-name"></Page>);

    const pageWrapper = screen.getByTestId("page-wrapper");

    expect(pageWrapper.classList.contains("some-class-name")).toBeTruthy();
  });
});