import { fetcher } from "itty-fetcher";
import { C7Customers, C7CustomerType } from "./customer.js";
import { C7Orders, C7OrderType } from "./order.js";

export { C7OrderType, C7CustomerType };

interface C7ApiOptions {
  tenant: string;
  username: string;
  password: string;
}

export class C7Api {
  private api: ReturnType<typeof fetcher>;
  customers: C7Customers;
  orders: C7Orders;

  constructor(options: C7ApiOptions) {
    const auth = `Basic ${btoa(`${options.username}:${options.password}`)}`;
    this.api = fetcher({
      base: "https://api.commerce7.com/v1",
      headers: {
        Authorization: auth,
        tenant: options.tenant,
      },
    });
    this.customers = new C7Customers(this.api);
    this.orders = new C7Orders(this.api);
  }
}
