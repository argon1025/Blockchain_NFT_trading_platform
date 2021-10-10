import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entities/Item';
import { ItemHistory } from 'src/entities/ItemHistory';
import { MemberHistory } from 'src/entities/MemberHistory';
import { Any, Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { getToDay } from '../util/time.manager.util';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(ItemHistory) private itemHistoryRepository: Repository<ItemHistory>,
    @InjectRepository(MemberHistory) private memberHistoryRepository: Repository<MemberHistory>,
  ) {}

  // 아이템 생성
  // 아이템 아이디를 리턴한다
  async createItem(memberID: number) {
    // 오늘 날자
    const NOW_DATE = getToDay();

    try {
      // 아이템 등록 시작
      const createResult = await this.itemRepository.save({ memberId: memberID, createdAt: NOW_DATE });

      // console.log(createResult); { memberId: 4, createdAt: '2021/10/10', id: 1 }

      return createResult.id;
    } catch (error) {
      throw new HttpException({ msg_code: 'Item_1', msg: '아이템 생성에 실패했습니다.' }, 500);
    }
  }

  // 아이템 히스토리 추가
  async addItemHistory(memberID: number, itemID: number, contentType: string, content: string) {
    // 오늘 날자
    const NOW_DATE = getToDay();

    try {
      // 아이템 히스토리 등록
      const createResult = await this.itemHistoryRepository.save({
        memberId: memberID,
        itemId: itemID,
        contentType: contentType,
        content: content,
        createdAt: NOW_DATE,
      });
      // console.log(createResult); // {memberId: 4,itemId: 1,contentType: 'title',content: '테스트',createdAt: '2021/10/10',id: 1}
      return true;
    } catch (error) {
      throw new HttpException({ msg_code: 'Item_2', msg: '히스토리 등록에 실패했습니다' }, 500);
    }
  }

  // 보유한 아이템 리스트
  async allItemFindByMemberID(memberID: number) {
    try {
      const allItemResult: any = await this.itemRepository.find({ where: { memberId: memberID }, relations: ['itemHistories'] });
      /*
[
  Item {
    id: 1,
    memberId: 4,
    createdAt: 2021-10-09T15:00:00.000Z,
    itemHistories: [ [ItemHistory] ]
  }
]
console.log(allItemResult);
*/
      /*
Item {
  id: 1,
  memberId: 4,
  createdAt: 2021-10-09T15:00:00.000Z,
  itemHistories: [
    ItemHistory {
      id: 1,
      memberId: 4,
      itemId: 1,
      contentType: 'title',
      content: '테스트',
      createdAt: 2021-10-09T15:00:00.000Z
    }
  ]
}
console.log(allItemResult[0]);
       */
      return allItemResult;
    } catch (error) {
      throw new HttpException({ msg_code: 'Item_3', msg: '리스트 조회에 실패했습니다' }, 500);
    }
  }

  // 특정 아이템 상세 리스트
  async itemDetailFindByItemID(itemID: number) {
    try {
      const itemResult: any = await this.itemRepository.findOne({ where: { id: itemID }, relations: ['itemHistories'] });
      /*
Item {
  id: 1,
  memberId: 4,
  createdAt: 2021-10-09T15:00:00.000Z,
  itemHistories: [
    ItemHistory {
      id: 1,
      memberId: 4,
      itemId: 1,
      contentType: 'title',
      content: '테스트',
      createdAt: 2021-10-09T15:00:00.000Z
    }
  ]
}
console.log(itemResult);
*/
      return itemResult;
    } catch (error) {
      throw new HttpException({ msg_code: 'Item_3', msg: '리스트 조회에 실패했습니다' }, 500);
    }
  }

  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
