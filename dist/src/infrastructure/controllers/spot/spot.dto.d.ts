export declare class DepositDto {
    symbol: string;
}
export declare class createLimitOrderDto {
    symbol: string;
    side: string;
    amount: number;
    price: number;
}
export declare class createMarketAmountOrderDto {
    symbol: string;
    side: string;
    amount: number;
}
export declare class createMarketQuantityOrderDto {
    symbol: string;
    side: string;
    quantity: number;
}
export declare class createStopLimitOrder {
    symbol: string;
    quantity: number;
    stopPrice: number;
    limitPrice: number;
    side: string;
    stopLimitTime: number;
}
