import React, { useEffect, useState } from "react"
import OrderService from "../../domain/services/OrderService";
import { OrderRepository } from "../../infrastructure/repositories/OrderRepository";

export default () => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    (async () => {
      const repository = new OrderRepository();
      const orders = await repository.getAll();
      const service = new OrderService();
      setSum(service.sum(orders));
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