import { SpotUseCases } from 'src/usecases/spot/spot.usecases';
import { createLimitOrderDto, createMarketAmountOrderDto, createMarketQuantityOrderDto, createStopLimitOrder } from './spot.dto';
export declare class SpotController {
    private readonly spotUseCases;
    constructor(spotUseCases: SpotUseCases);
    placeNewOrderLimit(body: createLimitOrderDto): Promise<any>;
    placeNewOrderMarketWithQuantity(body: createMarketQuantityOrderDto): Promise<any>;
    placeNewOrderMarketWithAmount(body: createMarketAmountOrderDto): Promise<any>;
    placeStopLimitOrder(body: createStopLimitOrder): Promise<any>;
    getOrder(symbol: string): Promise<any>;
    getAccount(): Promise<any>;
    cancelOrder(symbol: string): Promise<any>;
}
