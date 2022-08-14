import React, { useEffect, useState } from "react"
import { OrderRepository } from "../../infra/repository/OrderRepository";

export default () => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    (async () => {
      const repository = new OrderRepository();
      const order = await repository.getAll();
      setSum(order.sum());
    })();
  }, []);
  return (
    <div>
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