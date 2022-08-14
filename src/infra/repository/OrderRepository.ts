import { Order } from "../../domain/model/Order";
import { IOrderRepository } from "../../domain/repository/IOrderRepository";

export class OrderRepository implements IOrderRepository{
  async getAll(): Promise<Order> {
    const body = {
      'app': kintone.app.getId(),
    };

    const resp = await kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', body);
    const order = new Order(resp.records);
    return order;
  }
}