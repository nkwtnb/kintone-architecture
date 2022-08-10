import React, { useEffect, useState } from "react"
import { Order } from "../domain/model/Order";

export default () => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    (async () => {
      const order = await Order.build();
      setSum(order.sum());
    })();
  }, []);
  return (
    <div data-testid="sum">{sum}</div>
  );
}