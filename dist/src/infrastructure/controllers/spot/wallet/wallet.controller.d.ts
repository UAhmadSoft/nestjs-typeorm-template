import { WalletUseCases } from 'src/usecases/wallet/wallet.usecases';
import { ConvertDto, DepositDto, TransferDto, WithdrawDto } from './wallet.dto';
export declare class WalletController {
    private readonly walletUseCases;
    constructor(walletUseCases: WalletUseCases);
    deposit(body: DepositDto): Promise<any>;
    depositHistory(coin: string): Promise<any>;
    withdraw(body: WithdrawDto): Promise<any>;
    transfer(body: TransferDto): Promise<void>;
    convert(body: ConvertDto): Promise<any>;
    getTokenPrice(symbol: string): Promise<{
        symbol: string;
        price: number;
        change24h: number;
        volume24h: number;
        highPrice24h: number;
        lowPrice24h: number;
        turnover24h: number;
    }>;
    getAccountTokenBalance(): Promise<() => Promise<any>>;
    getAssetBalance(symbol: string): Promise<any>;
    getFundingWallet(): Promise<any>;
    getOrderBook(symbol: string): Promise<any>;
    getTradeHistory(symbol: string): Promise<any>;
    getOrderHistory(symbol: string): Promise<any>;
}
