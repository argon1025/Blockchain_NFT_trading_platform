import { PickType } from '@nestjs/swagger';
import { TradeRequest } from 'src/entities/TradeRequest';

export class CreateRequestTrade extends PickType(TradeRequest, ['approverMemberId', 'itemId']) {}
