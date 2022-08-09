export interface IOrderRepository {
  get(): Promise<Object[]>
}