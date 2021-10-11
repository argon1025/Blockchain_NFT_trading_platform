import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { MarketService } from './market.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { responseCreatorUtil } from 'src/util/response.creator.util';
import { CreateRequestTrade } from './dto/create-requestTrade.dto';
import { AuthGuard } from 'src/guards/Auth.guard';

@Controller()
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Post('market')
  @ApiTags('Market')
  @ApiOperation({ summary: '판매 게시글을 등록합니다.' })
  @UseGuards(AuthGuard)
  async createMarket(@Body() createMarketDto: CreateMarketDto, @Req() req) {
    // 세션 멤버 아이디
    const memberID = req.session.memberID;

    await this.marketService.createMarket(memberID, createMarketDto.itemId, createMarketDto.pay, createMarketDto.title, createMarketDto.content);

    return responseCreatorUtil('생성 성공', '200');
  }

  @Get('market')
  @ApiTags('Market')
  @ApiOperation({ summary: '판매 게시글 리스트를 조회합니다.' })
  async getMarketList() {
    return responseCreatorUtil('성공', '200', { data: await this.marketService.getMarketList() });
  }

  @Get('market/:marketID')
  @ApiTags('Market')
  @ApiOperation({ summary: '판매 게시글 리스트를 조회합니다.' })
  @ApiParam({
    name: 'marketID',
    type: 'number',
    required: true,
    description: '게시글 아이디',
  })
  async getMarketListFindByID(@Param() paramsData) {
    return responseCreatorUtil('성공', '200', { data: await this.marketService.getMarketDetailFindByMarketID(paramsData.marketID) });
  }

  @Post('market/requestTrade')
  @ApiTags('Market')
  @ApiOperation({ summary: '거래 신청을 요청합니다.' })
  @UseGuards(AuthGuard)
  async createRequestTrade(@Body() createRequestTradeDto: CreateRequestTrade, @Req() req) {
    // 세션 멤버 아이디
    const memberID = req.session.memberID;
    await this.marketService.requestTrade(memberID, createRequestTradeDto.approverMemberId, createRequestTradeDto.itemId);

    return responseCreatorUtil('신청 성공', '200');
  }

  @Get('requestTrade')
  @ApiTags('Market')
  @ApiOperation({ summary: '나에게온 거래신청 리스트를 요청합니다.' })
  @UseGuards(AuthGuard)
  async requestTradeList(@Req() req) {
    // 세션 멤버 아이디
    const memberID = req.session.memberID;
    const result = await this.marketService.getRequestTradeList(memberID);

    return responseCreatorUtil('성공!', '200', { data: result });
  }

  @Post('/requestTrade/:tradeID')
  @ApiTags('Market')
  @ApiOperation({ summary: '거래를 완료합니다.' })
  @ApiParam({
    name: 'tradeID',
    type: 'number',
    required: true,
    description: '거래 아이디',
  })
  @UseGuards(AuthGuard)
  async RequestTradeIdDone(@Param() paramsData) {
    await this.marketService.tradeIsDone(paramsData.tradeID);

    return responseCreatorUtil('성공', '200');
  }
}
