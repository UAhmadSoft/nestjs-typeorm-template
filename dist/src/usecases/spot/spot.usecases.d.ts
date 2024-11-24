import { SpotRepository } from 'src/infrastructure/repository/spot.repository';
import { createLimitOrderDto, createMarketAmountOrderDto, createMarketQuantityOrderDto, createStopLimitOrder } from 'src/infrastructure/controllers/spot/spot.dto';
export declare class SpotUseCases {
    private readonly spotRepository;
    constructor(spotRepository: SpotRepository);
    placeNewOrderLimit(body: createLimitOrderDto): Promise<any>;
    placeNewOrderMarketWithQuantity(body: createMarketQuantityOrderDto): Promise<any>;
    placeNewOrderMarketWithAmount(body: createMarketAmountOrderDto): Promise<any>;
    placeStopLimitOrder(body: createStopLimitOrder): Promise<any>;
    getOrder(symbol: string): Promise<any>;
    getAccount(): Promise<any>;
    cancelOrder(symbol: string): Promise<any>;
}
