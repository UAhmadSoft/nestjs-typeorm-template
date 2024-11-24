import { DepositDto } from 'src/infrastructure/controllers/wallet/wallet.dto';
import { UserModel, FetchUserModel, UpdateUserModel } from '../models/User';
export interface IWallet {
  deposit(body: DepositDto): Promise<any>;
  // withdraw(body: ): Promise<UserModel>;
  // transfer(
  //   user: UserModel,
  //   amount: number,
  //   target: UserModel,
  // ): Promise<UserModel>;
  // convert(
  //   user: UserModel,
  //   amount: number,
  //   targetCurrency: string,
  // ): Promise<UserModel>;
}
