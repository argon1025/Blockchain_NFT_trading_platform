import { PickType } from '@nestjs/swagger';
import { Market } from 'src/entities/Market';

export class CreateMarketDto extends PickType(Market, ['itemId', 'pay', 'title', 'content']) {}
