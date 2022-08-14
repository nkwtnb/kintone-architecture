import { Order } from "../model/Order";

export interface IOrderRepository {
  getAll(): Promise<Order>
}