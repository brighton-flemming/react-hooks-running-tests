import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'Hi,how are ya? From the Header!'", () => {
  render(<Header />);
   
  const element = screen.queryByText("Hi,how are ya? From the Header!"); 

  screen.debug(element);

  expect(element).toBeInTheDocument();
});
