import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './Item';
import { Member } from './Member';

@Index('FK_itemHistory_memberID_to_member_id', ['memberId'], {})
@Index('FK_itemHistory_itemID_to_item_id', ['itemId'], {})
@Entity('itemHistory', { schema: 'owl' })
export class ItemHistory {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '아이템 정보 인덱스',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'memberID', comment: '소유주 아이디', unsigned: true })
  memberId: number;

  @Column('int', { name: 'itemID', comment: '아이템 아이디', unsigned: true })
  itemId: number;

  @Column('varchar', {
    name: 'contentType',
    comment: '히스토리 타입',
    length: 30,
  })
  @ApiProperty({
    example: 'title',
    description: '히스토리 타입',
    required: true,
  })
  contentType: string;

  @Column('varchar', { name: 'content', comment: '작성 내용', length: 50 })
  @ApiProperty({
    example: 'content',
    description: '등록 내용',
    required: true,
  })
  content: string;

  @Column('datetime', { name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @ManyToOne(() => Item, (item) => item.itemHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemID', referencedColumnName: 'id' }])
  item: Item;

  @ManyToOne(() => Member, (member) => member.itemHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberID', referencedColumnName: 'id' }])
  member: Member;
}
