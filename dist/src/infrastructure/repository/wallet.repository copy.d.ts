import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { IWallet } from 'src/domain/repositories/wallet.repository.interface';
import { ConvertDto, DepositDto, TransferDto, WithdrawDto } from '../controllers/wallet/wallet.dto';
import { Coins } from '../entities/coin.entity';
export declare class WalletRepository implements IWallet {
    private userRepository;
    private coinrepository;
    constructor(userRepository: Repository<Users>, coinrepository: Repository<Coins>);
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
    getAssetBalance(token: string): Promise<any>;
    getFundingWallet(): Promise<any>;
    getOrderBook(symbol: string): Promise<any>;
    getTradeHistory(symbol: string): Promise<any>;
    getOrderHistory(symbol: string): Promise<any>;
    depositHistory(coin: string): Promise<any>;
    deposit(body: DepositDto): Promise<any>;
    withdraw(body: WithdrawDto): Promise<any>;
    convert(body: ConvertDto): Promise<any>;
    createSignature(params: any): any;
    transfer(body: TransferDto): Promise<void>;
}
