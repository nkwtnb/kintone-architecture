import React from "react";
import {render} from "@testing-library/react"
import App from "./App";
import { OrderRepository } from "../infra/repository/OrderRepository";
import { act } from "react-dom/test-utils";

jest.spyOn(OrderRepository.prototype, "get").mockReturnValue(Promise.resolve(
  [
    {
      "合計": {
        "value": 100
      }
    },
    {
      "合計": {
        "value": 200
      }
    },
    {
      "合計": {
        "value": 300
      }
    },
  ]
));

describe("ui component[App]のテスト", () => {
  test("レンダリングされること", async () => {
    await act(() => {
      render(<App />);
    })
  });
});
