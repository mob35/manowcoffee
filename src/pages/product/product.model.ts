export class ProductModel {
    hot: Array<ProductDetailModel>;
    iced: Array<ProductDetailModel>;
    frappe: Array<ProductDetailModel>;
}

export class ProductDetailModel {
    _id: string;
    name: string;
    detail: string;
    image: string;
    category: string;
    size: Array<ProductSizeModel>;
}

export class ProductSizeModel {
    name: string;
    price: number;
}
