// import * as repositories from './*{.ts}';

import { Coins } from './coin.entity';
import { ConvertHistory } from './converthistory.entity';
import { DepositHistory } from './deposithistory.entity';
import { Profiles } from './profile.entity';
import { TransferHistory } from './transferhistory.entity';
import { Users } from './user.entity';
import { WithdrawHistory } from './withdrawhistory.entity';

export default [
  Users,
  Profiles,
  Coins,
  ConvertHistory,
  DepositHistory,
  WithdrawHistory,
  TransferHistory,
];
