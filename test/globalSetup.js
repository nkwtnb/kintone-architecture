const { Order } = require("../src/domain/models/Order");
const { OrderRepository } = require("../src/infrastructure/repositories/OrderRepository");

beforeAll(() => {
  jest.spyOn(OrderRepository.prototype, "getAll").mockReturnValue(
    [
      new Order({
        "合計": {
          "value": "100"
        }
      }),
      new Order({
        "合計": {
          "value": "200"
        }
      }),
      new Order({
        "合計": {
          "value": "300"
        }
      }),
    ]
  );
});
