import { describe, it, expect } from "vitest";
import { render, screen } from '@test';

import { App } from "./app";

describe("app component", () => {
  it("render child", () => {
    render(<App>Child</App>);

    expect(screen.getByText("Child")).toBeInTheDocument();
  });
});