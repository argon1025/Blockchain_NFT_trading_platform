import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Market } from 'src/entities/Market';
import { TradeRequest } from 'src/entities/TradeRequest';
import { ItemService } from 'src/item/item.service';
import { getToDay } from 'src/util/time.manager.util';
import { Repository } from 'typeorm';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';

@Injectable()
export class MarketService {
  constructor(
    private readonly itemService: ItemService,
    @InjectRepository(Market) private marketRepository: Repository<Market>,
    @InjectRepository(TradeRequest) private tradeRequestRepository: Repository<TradeRequest>,
  ) {}

  // 글 생성
  async createMarket(memberID: number, itemID: number, pay: string, title: string, content: string) {
    // 본인 소유 아이템 유무 확인
    const itemInfo = await this.itemService.itemDetailFindByItemID(itemID);
    console.log(itemInfo);
    console.log(memberID);
    if (!(itemInfo.memberId === memberID)) {
      throw new HttpException({ msg_code: 'Market_1', msg: '본인이 소유한 NFT만 등록할 수 있습니다.' }, 500);
    }
    // 게시글 등록
    try {
      const result = await this.marketRepository.save({
        memberId: memberID,
        itemId: itemID,
        pay: pay,
        status: 'NOW_SELL',
        title: title,
        content: content,
      });
      console.log(result);
      return true;
    } catch (error) {
      throw new HttpException({ msg_code: 'Market_2', msg: '게시글 등록에 실패했습니다.' }, 500);
    }
  }

  // 글 리스트
  async getMarketList() {
    try {
      const result = await this.marketRepository.find();
      console.log(result);
      return result;
    } catch (error) {
      throw new HttpException({ msg_code: 'Market_3', msg: '마켓 정보를 불러오는데 실패했습니다.' }, 500);
    }
  }
  // 글 상세정보
  async getMarketDetailFindByMarketID(marketID: number) {
    try {
      const result = await this.marketRepository.find({ id: marketID });
      console.log(result);
      return result;
    } catch (error) {
      throw new HttpException({ msg_code: 'Market_4', msg: '마켓 정보를 불러오는데 실패했습니다.' }, 500);
    }
  }

  // 거래 신청 등록
  async requestTrade(requestMemberID: number, approverMemberID: number, itemID: number) {
    try {
      const result = await this.tradeRequestRepository.save({
        requestMemberId: requestMemberID,
        approverMemberId: approverMemberID,
        itemId: itemID,
        review: 0,
        createdAt: getToDay(),
        status: 'Trade Request Send',
      });
      console.log(result);
      return true;
    } catch (error) {
      throw new HttpException({ msg_code: 'Market_5', msg: '거래신청에 실패했습니다.' }, 500);
    }
  }

  // 거래 신청 리스트
  // 지갑 주소 필요
  async getRequestTradeList(memberId: number) {
    try {
      // 해당 멤버의 승인이 필요한 거래목록을 찾는다, 리퀘스트를 보낸 멤버의 지갑정보를 함께 조인한다
      const result = await this.tradeRequestRepository.find({ where: { approverMemberId: memberId }, relations: ['requestMember'] });
      /**
       console.log(result);
{
  "error": "false",
  "msg": "성공!",
  "msg_code": "200",
  "data": [
    {
      "id": 1,
      "requestMemberId": 1,
      "approverMemberId": 1,
      "itemId": 1,
      "review": 0,
      "createdAt": "2021-10-10T15:00:00.000Z",
      "status": "Trade Request Send",
      "requestMember": {
        "id": 1,
        "provider": "test",
        "name": "leeseongrok",
        "iconUrl": null,
        "wallet": null,
        "nonce": null
      }
    }
  ]
}
       */
      return result;
    } catch (error) {
      throw new HttpException({ msg_code: 'Market_6', msg: '거래신청 리스트를 들고오는데 실패했습니다.' }, 500);
    }
  }

  // 거래 완료
  async tradeIsDone(tradeID: number) {
    try {
      // 상태 메시지와 리뷰 가능횟수를 등록한다
      const result = await this.tradeRequestRepository.update({ id: tradeID }, { review: 1, status: 'Done' });
      // console.log(result); UpdateResult { generatedMaps: [], raw: [], affected: 1 }

      // 거래 정보를 불러온다
      const tradeInfo = await this.tradeRequestRepository.findOne({ id: tradeID });
      console.log(tradeInfo);

      // 아이템의 소유주를 거래정보랑 대조하여 변경한다
      this.itemService.itemOwnerChange(tradeInfo.itemId, tradeInfo.requestMemberId);
      // 아이템 히스토리에 거래기록을 추가한다
      return true;
    } catch (error) {
      throw new HttpException({ msg_code: 'Market_7', msg: '거래를 마무리 하는데 실패했습니다.' }, 500);
    }
  }
}
