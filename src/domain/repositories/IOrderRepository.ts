import { Order } from "../models/Order";

export interface IOrderRepository {
  getAll(): Promise<Order[]>
}