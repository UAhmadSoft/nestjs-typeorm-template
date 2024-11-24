export declare class WithdrawHistoryModel {
    asset: string;
    network: string;
    network_fee: string;
    amount: boolean;
    destination: boolean;
    status: boolean;
    txid: boolean;
}
export declare class FetchWithdrawHistoryModel {
    id: number;
    asset: string;
    network: string;
    network_fee: string;
    amount: boolean;
    destination: boolean;
    status: boolean;
    txid: boolean;
}
export declare class UpdateWithdrawHistoryModel {
    asset?: string;
    network?: string;
    network_fee?: string;
    amount?: boolean;
    destination?: boolean;
    status?: boolean;
    txid?: boolean;
}
