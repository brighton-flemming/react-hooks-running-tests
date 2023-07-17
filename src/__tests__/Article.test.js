import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'Hi,how are ya? From the Header!'", () => {
  render(<Article />);

  expect(screen.queryByText("Hi,how are ya? From the Header!")).toBeInTheDocument();
});
