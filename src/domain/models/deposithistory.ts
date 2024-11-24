export class DepositHistoryModel{
asset:string;
network:string;
network_fee:string;
amount:boolean;
destination:boolean;
status:boolean;
txid:boolean;
}



export class FetchDepositHistoryModel{
id:number;
asset:string;
network:string;
network_fee:string;
amount:boolean;
destination:boolean;
status:boolean;
txid:boolean;
}



export class UpdateDepositHistoryModel{
asset?:string;
network?:string;
network_fee?:string;
amount?:boolean;
destination?:boolean;
status?:boolean;
txid?:boolean;
}
