import { StringifyPayload, fetcher } from "itty-fetcher";

export interface C7OrderType {
  id: string;
  orderSubmittedDate: string;
  orderPaidDate: string;
  orderFulfilledDate: string;
  orderNumber: number;
  orderSource: string;
  customerType: string;
  purchaseType: string;
  previousOrderId: string | null;
  previousOrderNumber: number | null;
  refundOrderId: string | null;
  refundOrderNumber: number | null;
  linkedOrders: any;
  paymentStatus: string;
  complianceStatus: string;
  fraudCheckStatus: string;
  fulfillmentStatus: string;
  shippingStatus: string;
  cartId: string;
  channel: string;
  posProfileId: string | null;
  customerId: string;
  orderDeliveryMethod: string | null;
  shippingInstructions: string | null;
  taxSaleType: string;
  subTotal: number;
  shipTotal: number;
  taxTotal: number;
  dutyTotal: number;
  bottleDepositTotal: number;
  tipTotal: number;
  total: number;
  totalAfterTip: number;
  giftMessage: string | null;
  metaData: any;
  appData: any;
  appSync: any;
  flags: any;
  isNonTaxable: boolean;
  isNoDuty: boolean;
  createdAt: string;
  updatedAt: string;
  additionalData: any;
  club: string | null;
  shipping: Array<{
    id: string;
    vendor: string;
    title: string;
    code: string;
    carrier: string;
    service: string;
    shippingServiceId: string;
    price: number;
    originalPrice: number;
    isPriceOverride: boolean;
    processorResponse: any;
    tax: number;
  }>;
  coupons: any;
  shipTo: {
    id: string;
    customerAddressId: string;
    birthDate: string;
    honorific: string | null;
    firstName: string;
    lastName: string;
    company: string | null;
    phone: string;
    address: string;
    address2: string | null;
    city: string;
    stateCode: string;
    zipCode: string;
    countryCode: string;
  };
  billTo: {
    id: string;
    customerAddressId: string;
    birthDate: string;
    honorific: string | null;
    firstName: string;
    lastName: string;
    company: string | null;
    phone: string;
    address: string;
    address2: string | null;
    city: string;
    stateCode: string;
    zipCode: string;
    countryCode: string;
  };
  pickupBy: any;
  carrierPickupLocation: any;
  carryOut: string | null;
  promotions: Array<{
    id: string;
    promotionId: string;
    title: string;
    inUse: boolean;
    productValue: number;
    shippingValue: number;
    totalValue: number;
  }>;
  tenders: Array<{
    id: string;
    previousTenderId: string | null;
    tenderType: string;
    chargeType: string;
    chargeStatus: string;
    amountTendered: number;
    tip: number;
    errorCode: string;
    paymentDate: string;
    otherPaymentMethod: null;
    createdAt: string;
    updatedAt: string;
    creditCard: {
      gateway: string;
      cardBrand: string;
      maskedCardNumber: string;
      bin: any;
      expiryMo: number;
      expiryYr: number;
      cardHolderName: string;
      oneTimeToken: any;
      tokenOnFile: string;
      processorResponse: string;
      authorizationId: string;
      customerCreditCardId: string;
    };
    giftCard: {
      id: string | null;
      maskedCode: string | null;
      transactionId: string | null;
    };
    loyalty: {
      points: number;
      transactionId: string | null;
    };
  }>;
  fulfillments: Array<{
    id: string;
    inventoryLocationId: string | null;
    type: string;
    fulfillmentDate: string;
    packageCount: number;
    items: Array<{
      id: string;
      quantityFulfilled: number;
    }>;
  }>;
  taxes: Array<{
    id: string;
    vendor: string;
    title: string;
    countryCode: string;
    stateCode: string;
    freight: number;
    food: number;
    generalMerchandise: number;
    cannabis: number;
    wine: number;
    price: number;
    isIncludedInPrice: boolean;
    isFlatRate: boolean;
    isNonTaxable: boolean;
    sortOrder: number;
  }>;
  duties: any;
  posProfile: any;
  customer: {
    id: string;
    avatar: string | null;
    honorific: string | null;
    firstName: string;
    lastName: string;
    birthDate: string;
    city: string;
    stateCode: string;
    zipCode: string;
    countryCode: string;
    emailMarketingStatus: string;
    lastActivityDate: string;
    metaData: any;
    appData: any;
    appSync: any;
    flags: any;
    notifications: any;
    createdAt: string;
    updatedAt: string;
    orderInformation: {
      currentWebCartId: string | null;
      lastOrderId: string;
      lastOrderDate: string;
      orderCount: number;
      lifetimeValue: number;
      lifetimeValueSeedAmount: number;
      yearlyValue: { [key: string]: number };
      rank: number;
      rankTrend: any;
      grossProfit: number;
      acquisitionChannel: string;
      currentClubTitle: string | null;
      daysInCurrentClub: string | null;
      daysInClub: number;
      isActiveClubMember: boolean;
    };
    emails: Array<{
      id: string;
      email: string;
      status: string;
    }>;
    phones: Array<{
      id: string;
      phone: string;
    }>;
    clubs: Array<{
      clubId: string;
      clubTitle: string;
      cancelDate: string;
      signupDate: string;
      clubMembershipId: string;
    }>;
    products: Array<{
      product: {
        sku: string;
        image: string;
        price: number;
        title: string;
        quantity: number;
        productId: string;
      };
      purchaseDate: string;
    }>;
    hasAccount: boolean;
    loginActivity: {
      lastLoginAt: string;
      loginIp: string;
      lastLogoutAt: string | null;
    };
  };
  items: Array<{
    id: string;
    purchaseType: string;
    purchaseTitle: string;
    purchaseSlug: string;
    type: string;
    inventoryLocationId: string | null;
    productId: string;
    productVariantTitle: string;
    productVariantId: string;
    image: string;
    sku: string;
    costOfGood: number;
    price: number;
    originalPrice: number;
    comparePrice: number;
    bottleDeposit: number;
    quantity: number;
    quantityFulfilled: number;
    quantitySentToPrep: number;
    isPriceOverride: boolean;
    tax: number;
    taxType: string;
    weight: number;
    hasShipping: boolean;
    vendor: string | null;
    volumeInMl: number | null;
    departmentCode: string | null;
    allocationId: string | null;
    departmentId: string | null;
    collectionIds: string;
    bundleItems: any;
    itemData: any;
    modifiers: any;
    notes: any;
  }>;
  selectedShippingOptions: {
    shippingServiceId: string;
    requestedShipDate: string;
  };
  connectionInformation: {
    customerIpAddress: string;
    userAgent: string;
  };
  fraud: {
    isFraudulent: boolean;
    comment: string;
  };
  salesAssociate: {
    accountId: string;
    name: string;
  };
  tags: any;
  orderTags: any;
}

interface C7OrdersPage {
  orders: Array<C7OrderType>;
  cursor?: string;
}

export class C7Orders {
  private api: ReturnType<typeof fetcher>;

  constructor(api: ReturnType<typeof fetcher>) {
    this.api = api;
  }

  async map(callback: (customer: any) => any) {
    let cursor: string | undefined = "start";
    let returnval: Array<any> = [];
    while (cursor) {
      const results: C7OrdersPage = await this.api.get(
        `/customer?cursor=${cursor}`
      );
      cursor = results.cursor;
      returnval = returnval.concat(
        results.orders.map((customer) => callback(customer))
      );
    }
    return returnval;
  }
}
