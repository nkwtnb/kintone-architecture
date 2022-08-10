import { OrderRepository } from "../../infra/repository/OrderRepository";

export class Order {
  private records: any;
  constructor(records: any) {
    this.records = records;
  }
  public static async build (): Promise<Order>{
    const repository = new OrderRepository();
    const records = await repository.get();
    const order = new Order(records);
    return order;
  }
  public sum(): number {
    let sum = 0;
    this.records.forEach((record: any) => {
      sum += Number(record["合計"].value);
    });
    return sum;
  }
}