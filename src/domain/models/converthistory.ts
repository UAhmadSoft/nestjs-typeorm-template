export class ConvertHistoryModel{
symbol:string;
status:boolean;
orderId:boolean;
clientOrderId:boolean;
price:boolean;
origQty:boolean;
executedQty:boolean;
type:boolean;
side:boolean;
}



export class FetchConvertHistoryModel{
id:number;
symbol:string;
status:boolean;
orderId:boolean;
clientOrderId:boolean;
price:boolean;
origQty:boolean;
executedQty:boolean;
type:boolean;
side:boolean;
}



export class UpdateConvertHistoryModel{
symbol?:string;
status?:boolean;
orderId?:boolean;
clientOrderId?:boolean;
price?:boolean;
origQty?:boolean;
executedQty?:boolean;
type?:boolean;
side?:boolean;
}
