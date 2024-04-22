import { fetcher } from "itty-fetcher";
import "dotenv/config";

interface C7CustomerPage {
  cursor?: string;
  customers: Array<any>;
}

interface C7ApiOptions {
  tenant: string;
  username: string;
  password: string;
}

class C7Customers {
  private api: ReturnType<typeof fetcher>;

  constructor(api: ReturnType<typeof fetcher>) {
    this.api = api;
  }

  async map(callback: (customer: any) => any) {
    let cursor: string | undefined = "start";
    let returnval: Array<any> = [];
    while (cursor) {
      const results: C7CustomerPage = await this.api.get(
        `/customer?cursor=${cursor}`
      );
      cursor = results.cursor;
      returnval = returnval.concat(
        results.customers.map((customer) => callback(customer))
      );
    }
    return returnval;
  }
}

export class C7Api {
  private api: ReturnType<typeof fetcher>;
  customers: C7Customers;

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
  }

}
