import { Module } from '@nestjs/common';
import { MarketService } from './market.service';
import { MarketController } from './market.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from 'src/entities/Market';
import { ItemService } from 'src/item/item.service';
import { Item } from 'src/entities/Item';
import { ItemHistory } from 'src/entities/ItemHistory';
import { MemberHistory } from 'src/entities/MemberHistory';
import { TradeRequest } from 'src/entities/TradeRequest';

@Module({
  imports: [TypeOrmModule.forFeature([Market, Item, ItemHistory, MemberHistory, TradeRequest])],
  controllers: [MarketController],
  providers: [MarketService, ItemService],
})
export class MarketModule {}
