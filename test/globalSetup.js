const { Order } = require("../src/domain/model/Order");
const { OrderRepository } = require("../src/infra/repository/OrderRepository");

beforeAll(() => {
  jest.spyOn(OrderRepository.prototype, "getAll").mockReturnValue(
    new Order([
      {
        "合計": {
          "value": 100
        }
      },
      {
        "合計": {
          "value": 200
        }
      },
      {
        "合計": {
          "value": 300
        }
      },
    ])
  );
})