import { fetcher } from "itty-fetcher";

export interface C7CustomerType {}

interface C7CustomerPage {
  cursor?: string;
  customers: Array<C7CustomerType>;
}

export class C7Customers {
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
