import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Member } from "./Member";

@Index("FK_memberHistory_memberID_to_member_id", ["memberId"], {})
@Index("FK_memberHistory_targetMemberID_to_member_id", ["targetMemberId"], {})
@Entity("memberHistory", { schema: "owl" })
export class MemberHistory {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "멤버 히스토리 아이디",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "memberID", comment: "작성자 아이디", unsigned: true })
  memberId: number;

  @Column("int", {
    name: "targetMemberID",
    comment: "대상자 아이디",
    unsigned: true,
  })
  targetMemberId: number;

  @Column("varchar", {
    name: "contentType",
    comment: "히스토리 타입",
    length: 30,
  })
  contentType: string;

  @Column("varchar", { name: "content", comment: "작성 내용", length: 50 })
  content: string;

  @Column("datetime", { name: "createdAt", comment: "작성일" })
  createdAt: Date;

  @ManyToOne(() => Member, (member) => member.memberHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "memberID", referencedColumnName: "id" }])
  member: Member;

  @ManyToOne(() => Member, (member) => member.memberHistories2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "targetMemberID", referencedColumnName: "id" }])
  targetMember: Member;
}
