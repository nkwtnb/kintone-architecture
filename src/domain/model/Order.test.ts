import { OrderRepository } from "../../infra/repository/OrderRepository";
import { Order } from "./Order";

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

describe("model[Order]のテスト", () => {
  test("sum()で合計されること", async () => {
    const order = await Order.build();
    expect(order.sum()).toEqual(600);
  });
});
