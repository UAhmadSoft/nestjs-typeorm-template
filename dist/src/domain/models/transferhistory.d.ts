export declare class TransferHistoryModel {
    asset: string;
    network: string;
    network_fee: string;
    amount: boolean;
    destination: boolean;
    status: boolean;
    txid: boolean;
}
export declare class FetchTransferHistoryModel {
    id: number;
    asset: string;
    network: string;
    network_fee: string;
    amount: boolean;
    destination: boolean;
    status: boolean;
    txid: boolean;
}
export declare class UpdateTransferHistoryModel {
    asset?: string;
    network?: string;
    network_fee?: string;
    amount?: boolean;
    destination?: boolean;
    status?: boolean;
    txid?: boolean;
}
