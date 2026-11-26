// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import { menuLine, orderTotal, averageOrder, bigOrders } from "./src/cafe.js";

console.log("=== Kad Café menu ===");
menu.forEach((item) => console.log(menuLine(item)));

console.log("\n=== Today's orders ===");

orders.forEach((order) => {
  const total = orderTotal(order, menu);
  console.log(`${order.id} — ${total} THB`);
});

console.log("\n=== Summary ===");


console.log(`Number of orders: ${orders.length}`);


const totalSales = orders.reduce(
  (sum, order) => sum + orderTotal(order, menu),
  0
);
console.log(`Total sales: ${totalSales} THB`);


console.log(`Average order: ${averageOrder(orders, menu)} THB`);

// TODO (Part D): print the result of your own function (see the lab sheet).
const result = bigOrders(orders, menu, 150);

console.log("\n=== Big Orders (at least 150 THB) ===");

result.forEach((order) => {
  console.log(`${order.id} — ${orderTotal(order, menu)} THB`);
});
