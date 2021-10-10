import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from './Member';
import { Item } from './Item';
import { ApiProperty } from '@nestjs/swagger';

@Index('FK_tradeRequest_requestMemberID_to_member_id', ['requestMemberId'], {})
@Index('FK_tradeRequest_approverMemberID_to_member_id', ['approverMemberId'], {})
@Index('FK_tradeRequest_itemID_to_item_id', ['itemId'], {})
@Entity('tradeRequest', { schema: 'owl' })
export class TradeRequest {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '거래 인덱스',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'requestMemberID', comment: '요청자', unsigned: true })
  requestMemberId: number;

  @Column('int', {
    name: 'approverMemberID',
    comment: '승인자',
    unsigned: true,
  })
  @ApiProperty({
    example: '1',
    description: '요청할 멤버의 아이디',
    required: true,
  })
  approverMemberId: number;

  @Column('int', { name: 'itemID', comment: '아이템 아이디', unsigned: true })
  @ApiProperty({
    example: '2',
    description: '아이템 아이디',
    required: true,
  })
  itemId: number;

  @Column('int', {
    name: 'review',
    comment: '리뷰 작성 가능 횟수',
    unsigned: true,
  })
  review: number;

  @Column('datetime', { name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @Column('varchar', { name: 'status', comment: '진행 상태', length: 30 })
  status: string;

  @ManyToOne(() => Member, (member) => member.tradeRequests, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'approverMemberID', referencedColumnName: 'id' }])
  approverMember: Member;

  @ManyToOne(() => Item, (item) => item.tradeRequests, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemID', referencedColumnName: 'id' }])
  item: Item;

  @ManyToOne(() => Member, (member) => member.tradeRequests2, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'requestMemberID', referencedColumnName: 'id' }])
  requestMember: Member;
}
