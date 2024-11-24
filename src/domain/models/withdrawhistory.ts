export class WithdrawHistoryModel{
asset:string;
network:string;
network_fee:string;
amount:boolean;
destination:boolean;
status:boolean;
txid:boolean;
}



export class FetchWithdrawHistoryModel{
id:number;
asset:string;
network:string;
network_fee:string;
amount:boolean;
destination:boolean;
status:boolean;
txid:boolean;
}



export class UpdateWithdrawHistoryModel{
asset?:string;
network?:string;
network_fee?:string;
amount?:boolean;
destination?:boolean;
status?:boolean;
txid?:boolean;
}
