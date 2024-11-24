import { DepositDto } from 'src/infrastructure/controllers/wallet/wallet.dto';
export interface IWallet {
    deposit(body: DepositDto): Promise<any>;
}
