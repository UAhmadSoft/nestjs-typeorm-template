export declare class CoinModel {
    symbol: string;
    name: string;
    image: string;
    active: boolean;
    depositable: boolean;
    withdrawable: boolean;
    exchangeable: boolean;
}
export declare class FetchCoinModel {
    id: number;
    symbol: string;
    name: string;
    image: string;
    active: boolean;
    depositable: boolean;
    withdrawable: boolean;
    exchangeable: boolean;
}
export declare class UpdateCoinModel {
    symbol?: string;
    name?: string;
    image?: string;
    active?: boolean;
    depositable?: boolean;
    withdrawable?: boolean;
    exchangeable?: boolean;
}
