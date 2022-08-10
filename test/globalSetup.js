const { OrderRepository } = require("../src/infra/repository/OrderRepository");

beforeAll(() => {
  jest.spyOn(OrderRepository.prototype, "get").mockReturnValue(Promise.resolve(
    [
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
    ]
  ));  
})