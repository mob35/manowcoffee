export class CartModel {
    table: string;
    items: Array<item>;
    totalamount: number
}

export class item {
    name: string;
    image: string;
    size: string;
    qty: number;
    price: number;
    amount: number;
}