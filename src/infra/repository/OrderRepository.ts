import { IOrderRepository } from "../../domain/repository/IOrderRepository";

export class OrderRepository implements IOrderRepository{
  async get(): Promise<Object[]> {
    const body = {
      'app': kintone.app.getId(),
    };

    const resp = await kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', body);
    return resp.records;
  }
}