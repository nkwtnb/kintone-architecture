import React from "react";
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Sum from "./Sum";
import { act } from "react-dom/test-utils";

describe("ui component[Sum]のテスト", () => {
  test("合計が表示されること", async () => {
    await act(() => {
      render(<Sum />);
    });
    expect(screen.getByTestId("sum")).toHaveTextContent("600");
  });
});
