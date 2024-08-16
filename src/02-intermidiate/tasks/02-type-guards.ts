interface Order {
  address: string;
}
interface InternetOrder extends Order {
  email: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  return (order as InternetOrder).email !== undefined
  // return !!order && 'email' in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return (order as TelephoneOrder).callerNumber !== undefined
  // return !!order && 'callerNumber' in order;
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}
