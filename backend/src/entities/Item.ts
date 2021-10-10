import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from './Member';
import { ItemHistory } from './ItemHistory';
import { Market } from './Market';
import { TradeHistory } from './TradeHistory';
import { TradeRequest } from './TradeRequest';

@Index('FK_item_memberID_to_member_id', ['memberId'], {})
@Entity('item', { schema: 'owl' })
export class Item {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '아이템 아이디',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'memberID', comment: '소유주 아이디', unsigned: true })
  memberId: number;

  @Column('datetime', { name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @ManyToOne(() => Member, (member) => member.items, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberID', referencedColumnName: 'id' }])
  member: Member;

  @OneToMany(() => ItemHistory, (itemHistory) => itemHistory.item)
  itemHistories: ItemHistory[];

  @OneToMany(() => Market, (market) => market.item)
  markets: Market[];

  @OneToMany(() => TradeHistory, (tradeHistory) => tradeHistory.item)
  tradeHistories: TradeHistory[];

  @OneToMany(() => TradeRequest, (tradeRequest) => tradeRequest.item)
  tradeRequests: TradeRequest[];
}
