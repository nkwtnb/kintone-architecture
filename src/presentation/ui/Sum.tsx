import React, { useEffect, useState } from "react"
import { Order } from "../../domain/model/Order";

export default () => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    (async () => {
      const order = await Order.build();
      
      setSum(order.sum());
    })();
  }, []);
  return (
    <div style={{
      backgroundColor: "rgb(254 247 184)"
    }}>
      <div style={{
        textAlign: "right",
        marginRight: "100px",
      }}>
        <span>¥ </span>
        <span data-testid="sum">{sum}</span>
      </div>
    </div>
  );
}