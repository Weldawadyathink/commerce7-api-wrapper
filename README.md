# Commerce7 API Wrapper

## Goals

- Fetching all items from an endpoint (customers, orders, etc) should be simple to do
- Allow .map or .foreach for items in an endpoint
- Mapped functions should run as pages are returned from the C7 API without having to fetch all pages first

This is a work in progress. I will be adding support for API endpoints as I need them. Pull requests are appreciated. 

## Usage

```
import {C7Api} from "commerce7-api-wrapper"

const c7 = new C7Api({
  tenant: c7_tenant,
  username: c7_username,
  password: c7_password,
});

Promise.all(c7.customers.map)
```
