export class Order {
  private records: Object[];
  constructor(records?: Object[]) {
    this.records = records ? records : [];
  }
  /**
   * 合計算出
   * @returns sum
   */
  public sum(): number {
    let sum = 0;
    this.records.forEach((record: any) => {
      sum += Number(record["合計"].value);
    });
    return sum;
  }
}