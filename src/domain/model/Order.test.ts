import { Order } from "./Order";

describe("model[Order]のテスト", () => {
  test("sum()で合計されること", async () => {
    const order = await Order.build();
    expect(order.sum()).toEqual(600);
  });
});
