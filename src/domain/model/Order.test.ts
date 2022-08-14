import { OrderRepository } from "../../infra/repository/OrderRepository";

describe("model[Order]のテスト", () => {
  test("sum()で合計されること", async () => {
    const repository = new OrderRepository();
    const order = await repository.getAll();
    expect(order.sum()).toEqual(600);
  });
});
