export declare class DepositDto {
    symbol: string;
}
export declare class WithdrawDto {
    symbol: string;
    address: string;
    amount: number;
    network: string;
}
export declare class ConvertDto {
    symbol: string;
    quantity: number;
    side: string;
}
export declare class TransferDto {
    coin: string;
    amount: number;
    type: string;
}
