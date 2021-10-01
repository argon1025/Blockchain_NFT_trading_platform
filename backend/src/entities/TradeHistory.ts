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

@Index("FK_tradeHistory_memberID_to_member_id", ["memberId"], {})
@Index("FK_tradeHistory_targetMemberID_to_member_id", ["targetMemberId"], {})
@Index("FK_tradeHistory_itemID_to_item_id", ["itemId"], {})
@Entity("tradeHistory", { schema: "owl" })
export class TradeHistory {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "거래 기록 인덱스",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "memberID",
    comment: "보낸사람 아이디",
    unsigned: true,
  })
  memberId: number;

  @Column("int", {
    name: "targetMemberID",
    comment: "받은사람 아이디",
    unsigned: true,
  })
  targetMemberId: number;

  @Column("int", { name: "itemID", comment: "아이템 아이디", unsigned: true })
  itemId: number;

  @Column("datetime", { name: "createdAt", comment: "생성일" })
  createdAt: Date;

  @ManyToOne(() => Item, (item) => item.tradeHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "itemID", referencedColumnName: "id" }])
  item: Item;

  @ManyToOne(() => Member, (member) => member.tradeHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "memberID", referencedColumnName: "id" }])
  member: Member;

  @ManyToOne(() => Member, (member) => member.tradeHistories2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "targetMemberID", referencedColumnName: "id" }])
  targetMember: Member;
}
