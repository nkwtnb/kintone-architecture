export class Order {
  // @ts-ignore
  #注文日: {
    value: Date
  }
  // @ts-ignore
  #商品名: {
    value: string
  }
  // @ts-ignore
  #数量: {
    value: number
  }
  // @ts-ignore
  #単価: {
    value: number
  }
  // @ts-ignore
  public readonly 合計: {
    value: number
  }
  constructor(record: Partial<Order>) {
    Object.assign(this, record);
  }
}
