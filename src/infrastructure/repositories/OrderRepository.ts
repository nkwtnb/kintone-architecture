import { Order } from "../../domain/models/Order";
import { IOrderRepository } from "../../domain/repositories/IOrderRepository";

export class OrderRepository implements IOrderRepository{
  async getAll(): Promise<Order[]> {
    const body = {
      'app': kintone.app.getId(),
    };

    const resp = await kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', body);
    let orders = [];
    for (let i=0; i<resp.records.length; i++) {
      orders.push(new Order(resp.records[i]));
    }
    return orders;
  }
}