

class Order {
    currentState: State;
    orderBeingPrepared: OrderBeingPreparedState;
    paymentPendingState: PaymentPendingState;
    canceledOrderState: CanceledOrderState;
    orderShippedState: OrderShippedState;


    constructor() {
        this.orderBeingPrepared = new OrderBeingPreparedState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.canceledOrderState = new CanceledOrderState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.currentState = this.paymentPendingState;
    }

    setState(state:State) {
        this.currentState=state;
    }

    getState(): State{
        return this.currentState;
    }
}

interface State {
    order: Order;

    cancelOrder(): void;
    shipOrder(): void;
    verifyPayment(): void;
}

class CanceledOrderState implements State {
    order: Order;

    constructor(order:Order) {
        this.order=order;
    }
    cancelOrder(): void {
        console.log("Already cancelled");
    }
    shipOrder(): void {
       console.log("Cannot ship. Order was cancelled");
    }
    verifyPayment(): void {
        console.log("Cannot verify. Order was canceled");
    }
}

class OrderShippedState implements State {
    order: Order;

    constructor(order:Order) {
        this.order=order;
    }
    cancelOrder(): void {
        console.log("Cannot cancel. Already shipped");
    }
    shipOrder(): void {
       console.log("Cannot ship again.");
    }
    verifyPayment(): void {
        console.log("Cannot verify. Already shipped");
    }
}

class PaymentPendingState implements State {
    order: Order;

    constructor(order:Order) {
        this.order=order;
    }
    cancelOrder(): void {
        console.log("Cancel Order");
        this.order.setState(this.order.canceledOrderState);
    }
    shipOrder(): void {
       console.log("Cannot ship! Payment has not been verified!");
    }
    verifyPayment(): void {
        console.log("Verify payment");
        this.order.setState(this.order.orderBeingPrepared);
    }
}

class OrderBeingPreparedState implements State {
    order: Order;

    constructor(order:Order) {
        this.order=order;
    }
    cancelOrder(): void {
        console.log("Cancel Order");
        this.order.setState(this.order.canceledOrderState);
    }
    shipOrder(): void {
       console.log("Ship order");
       this.order.setState(this.order.orderShippedState);
    }
    verifyPayment(): void {
        console.log("Payment already verified");
    }
}

class OrderCanceledState implements State {
    order: Order;

    constructor(order:Order) {
        this.order=order;
    }
    cancelOrder(): void {
        console.log("Cancel Order");
    }
    shipOrder(): void {
       console.log("Cannot ship. Order was cancelled");
    }
    verifyPayment(): void {
        console.log("Cannot verify. Order was canceled");
    }
}

let order: Order = new Order();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();

console.log("State: " + (<any>order.getState()).constructor.name);
