var Order = /** @class */ (function () {
    function Order() {
        this.orderBeingPrepared = new OrderBeingPreparedState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.canceledOrderState = new CanceledOrderState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.currentState = this.paymentPendingState;
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var CanceledOrderState = /** @class */ (function () {
    function CanceledOrderState(order) {
        this.order = order;
    }
    CanceledOrderState.prototype.cancelOrder = function () {
        console.log("Already cancelled");
    };
    CanceledOrderState.prototype.shipOrder = function () {
        console.log("Cannot ship. Order was cancelled");
    };
    CanceledOrderState.prototype.verifyPayment = function () {
        console.log("Cannot verify. Order was canceled");
    };
    return CanceledOrderState;
}());
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log("Cannot cancel. Already shipped");
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log("Cannot ship again.");
    };
    OrderShippedState.prototype.verifyPayment = function () {
        console.log("Cannot verify. Already shipped");
    };
    return OrderShippedState;
}());
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log("Cancel Order");
        this.order.setState(this.order.canceledOrderState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log("Cannot ship! Payment has not been verified!");
    };
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log("Verify payment");
        this.order.setState(this.order.orderBeingPrepared);
    };
    return PaymentPendingState;
}());
var OrderBeingPreparedState = /** @class */ (function () {
    function OrderBeingPreparedState(order) {
        this.order = order;
    }
    OrderBeingPreparedState.prototype.cancelOrder = function () {
        console.log("Cancel Order");
        this.order.setState(this.order.canceledOrderState);
    };
    OrderBeingPreparedState.prototype.shipOrder = function () {
        console.log("Ship order");
        this.order.setState(this.order.orderShippedState);
    };
    OrderBeingPreparedState.prototype.verifyPayment = function () {
        console.log("Payment already verified");
    };
    return OrderBeingPreparedState;
}());
var OrderCanceledState = /** @class */ (function () {
    function OrderCanceledState(order) {
        this.order = order;
    }
    OrderCanceledState.prototype.cancelOrder = function () {
        console.log("Cancel Order");
    };
    OrderCanceledState.prototype.shipOrder = function () {
        console.log("Cannot ship. Order was cancelled");
    };
    OrderCanceledState.prototype.verifyPayment = function () {
        console.log("Cannot verify. Order was canceled");
    };
    return OrderCanceledState;
}());
var order = new Order();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();
console.log("State: " + order.getState().constructor.name);
