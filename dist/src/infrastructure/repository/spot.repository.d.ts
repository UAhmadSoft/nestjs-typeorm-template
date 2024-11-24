import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { Coins } from '../entities/coin.entity';
import { ISpot } from 'src/domain/repositories/spot.repository.interface';
import { createLimitOrderDto, createMarketAmountOrderDto, createMarketQuantityOrderDto, createStopLimitOrder } from '../controllers/spot/spot.dto';
export declare class SpotRepository implements ISpot {
    private userRepository;
    private coinrepository;
    constructor(userRepository: Repository<Users>, coinrepository: Repository<Coins>);
    coinInfo(symbol: string): Promise<number>;
    amountToQty(amount: number, price: number, minValueAmount: number): Promise<string>;
    placeNewOrderLimit(body: createLimitOrderDto): Promise<any>;
    placeNewOrderMarketWithQuantity(body: createMarketQuantityOrderDto): Promise<any>;
    placeNewOrderMarketWithAmount(body: createMarketAmountOrderDto): Promise<any>;
    placeStopLimitOrder(body: createStopLimitOrder): Promise<any>;
    getOrder(symbol: string): Promise<any>;
    getAccount(): Promise<any>;
    cancelOrder(symbol: string): Promise<any>;
}
