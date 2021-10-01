import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Item } from "./Item";
import { Member } from "./Member";

@Index("FK_market_memberID_to_member_id", ["memberId"], {})
@Index("FK_market_itemID_to_item_id", ["itemId"], {})
@Entity("market", { schema: "owl" })
export class Market {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "거래 인덱스",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "memberID", comment: "등록자", unsigned: true })
  memberId: number;

  @Column("int", { name: "itemID", comment: "아이템 아이디", unsigned: true })
  itemId: number;

  @Column("varchar", { name: "pay", comment: "가격", length: 30 })
  pay: string;

  @Column("varchar", { name: "status", comment: "히스토리 타입", length: 30 })
  status: string;

  @Column("varchar", { name: "title", comment: "제목", length: 50 })
  title: string;

  @Column("varchar", { name: "content", comment: "작성 내용", length: 100 })
  content: string;

  @ManyToOne(() => Item, (item) => item.markets, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "itemID", referencedColumnName: "id" }])
  item: Item;

  @ManyToOne(() => Member, (member) => member.markets, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "memberID", referencedColumnName: "id" }])
  member: Member;
}
