import { Order } from "../models/Order";

export default class {
  sum(orders: Order[]) {
    let sum = 0;
    for (let i=0; i<orders.length; i++) {
      sum += Number(orders[i]["合計"]["value"]);
    }
    return sum;
  }
}