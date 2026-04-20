
// An enum (short for enumeration) is a special data type that defines a fixed set of named constants. Unlike strings or integers, enums are type-safe, meaning the compiler ensures you can only use values that actually exist in your defined set.

enum OrderStatus {
    PLACED = "PLACED",
    CONFIRMED = "CONFIRMED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}

class PaymentMethod {

    static readonly CREDIT_CARD = new PaymentMethod("CREDIT_CARD", 2.5);
    static readonly DEBIT_CARD = new PaymentMethod("DEBIT_METHOD",1.0);
    static readonly UPI = new PaymentMethod("UPI", 0.0);
    static readonly NET_BANKING = new PaymentMethod("NET_BANKING", 1.5);

    private constructor (
        public readonly displayName: string,
        public readonly feePercent: number,
    ) {}


}

class Order {
    private status: OrderStatus;

    constructor (
        private readonly orderId : string,
        private readonly paymentMethod: PaymentMethod,
        private readonly amount: number
    ) {
        this.status = OrderStatus.PLACED;
    }

    advanceStatus(): boolean {
        const transitions: Partial<Record<OrderStatus, OrderStatus>> = {
            [OrderStatus.PLACED]: OrderStatus.CONFIRMED,
            [OrderStatus.CONFIRMED]: OrderStatus.SHIPPED,
            [OrderStatus.SHIPPED]:OrderStatus.DELIVERED,
        };
        const next = transitions[this.status];
        if(next){
            this.status = next;
            return true;
        }
        return false;
    }

    cancel(): boolean{
        if(this.status === OrderStatus.PLACED || this.status === OrderStatus.CONFIRMED){
            this.status = OrderStatus.CANCELLED;
            return true;
        } 
        return false
    }

    getTotalWithFees(): number {
        return this.amount + (this.amount * this.paymentMethod.feePercent / 100);
    }

    displayInfo(): void {
        console.log(
            `Order ${this.orderId} | status: ${this.status} | ` + `Payment: ${this.paymentMethod.displayName} | ` + `Amount: $${this.amount.toFixed(2)} (with fees: $${this.getTotalWithFees().toFixed(2)})`
        );
    }
}

const order = new Order("ORD-001", PaymentMethod.CREDIT_CARD, 99.99);
order.displayInfo();

order.advanceStatus();
order.advanceStatus();
order.displayInfo();

console.log(`Cancel after shipping: ${order.cancel()}`)