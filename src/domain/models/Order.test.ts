import { OrderRepository } from "../../infrastructure/repositories/OrderRepository";
import OrderService from "../services/OrderService";

describe("model[Order]のテスト", () => {
  test("sum()で合計されること", async () => {
    const repository = new OrderRepository();
    const orders = await repository.getAll();
    const service = new OrderService();
    expect(service.sum(orders)).toEqual(600);
  });
});
