import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './Item';
import { ItemHistory } from './ItemHistory';
import { Market } from './Market';
import { MemberHistory } from './MemberHistory';
import { TradeHistory } from './TradeHistory';

@Entity('member', { schema: 'owl' })
export class Member {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '멤버 아이디',
    unsigned: true,
  })
  id: number;

  @Column('varchar', { name: 'provider', comment: '로그인 타입', length: 30 })
  provider: string;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '유저 이름',
    length: 30,
  })
  @ApiProperty({
    example: 'MemberName',
    description: '유저 이름',
    required: true,
  })
  name: string | null;

  @Column('varchar', {
    name: 'iconURL',
    nullable: true,
    comment: '유저 프로필 URL',
    length: 300,
  })
  iconUrl: string | null;

  @Column('varchar', {
    name: 'wallet',
    nullable: true,
    comment: '지갑 주소',
    length: 300,
  })
  wallet: string | null;

  @Column('varchar', {
    name: 'nonce',
    nullable: true,
    comment: '유저 넌스 코드',
    length: 300,
  })
  nonce: string | null;

  @OneToMany(() => Item, (item) => item.member)
  items: Item[];

  @OneToMany(() => ItemHistory, (itemHistory) => itemHistory.member)
  itemHistories: ItemHistory[];

  @OneToMany(() => Market, (market) => market.member)
  markets: Market[];

  @OneToMany(() => MemberHistory, (memberHistory) => memberHistory.member)
  memberHistories: MemberHistory[];

  @OneToMany(() => MemberHistory, (memberHistory) => memberHistory.targetMember)
  memberHistories2: MemberHistory[];

  @OneToMany(() => TradeHistory, (tradeHistory) => tradeHistory.member)
  tradeHistories: TradeHistory[];

  @OneToMany(() => TradeHistory, (tradeHistory) => tradeHistory.targetMember)
  tradeHistories2: TradeHistory[];
}
