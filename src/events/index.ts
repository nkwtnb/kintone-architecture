import { Order } from "../domain/models/Order";

(() => {
  kintone.events.on("app.record.index.show", async (e: any) => {
    const order = await Order.build();
    const element = kintone.app.getHeaderSpaceElement();
    const div = document.createElement("div");
    div.innerHTML = order.sum().toString();
    element.append(div);
    return e;
  });
})();
