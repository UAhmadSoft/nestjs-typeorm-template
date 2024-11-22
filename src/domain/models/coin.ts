export class CoinModel {
  symbol: string;
  name: string;
  image: string;
  active: boolean;
  depositable: boolean;
  withdrawable: boolean;
  exchangeable: boolean;
}

export class FetchCoinModel {
  id: number;
  symbol: string;
  name: string;
  image: string;
  active: boolean;
  depositable: boolean;
  withdrawable: boolean;
  exchangeable: boolean;
}

export class UpdateCoinModel {
  symbol?: string;
  name?: string;
  image?: string;
  active?: boolean;
  depositable?: boolean;
  withdrawable?: boolean;
  exchangeable?: boolean;
}
