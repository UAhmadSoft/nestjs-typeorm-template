export class TransferHistoryModel{
asset:string;
network:string;
network_fee:string;
amount:boolean;
destination:boolean;
status:boolean;
txid:boolean;
}



export class FetchTransferHistoryModel{
id:number;
asset:string;
network:string;
network_fee:string;
amount:boolean;
destination:boolean;
status:boolean;
txid:boolean;
}



export class UpdateTransferHistoryModel{
asset?:string;
network?:string;
network_fee?:string;
amount?:boolean;
destination?:boolean;
status?:boolean;
txid?:boolean;
}
