import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/entities/Item';
import { ItemHistory } from 'src/entities/ItemHistory';
import { MemberHistory } from 'src/entities/MemberHistory';

@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemHistory, MemberHistory])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
