import { WalletRepository } from 'src/infrastructure/repository/wallet.repository';
import { ConvertDto, DepositDto, TransferDto, WithdrawDto } from 'src/infrastructure/controllers/wallet/wallet.dto';
export declare class WalletUseCases {
    private readonly walletRepository;
    constructor(walletRepository: WalletRepository);
    deposit(body: DepositDto): Promise<any>;
    withdraw(body: WithdrawDto): Promise<any>;
    depositHistory(coin: string): Promise<any>;
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
    getAccountTokenBalance(): Promise<any>;
    getAssetBalance(symbol: string): Promise<any>;
    getFundingWallet(): Promise<any>;
    getOrderBook(symbol: string): Promise<any>;
    getTradeHistory(symbol: string): Promise<any>;
    getOrderHistory(symbol: string): Promise<any>;
}
