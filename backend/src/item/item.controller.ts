import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { responseCreatorUtil } from 'src/util/response.creator.util';

@Controller()
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post('item')
  @ApiTags('NFT')
  @ApiOperation({ summary: 'NFT 아이템을 생성합니다.' })
  @ApiBody({
    type: CreateItemDto,
  })
  async create(@Body() createItemDto: CreateItemDto, @Req() req) {
    // 아이템을 생성합니다.
    const itemID = await this.itemService.createItem(req.session.memberID);
    // 생성된 아이템 아이디를 기반으로 타이틀을 등록합니다
    await this.itemService.addItemHistory(req.session.memberID, itemID, 'title', `${createItemDto.title}`);
    // 생성된 아이템 아이디를 기반으로 제품 설명을 등록합니다
    await this.itemService.addItemHistory(req.session.memberID, itemID, 'description', `${createItemDto.content}`);
    return responseCreatorUtil('아이템 생성 성공', '200');
  }

  @Get('item/member/:memberID')
  @ApiTags('NFT')
  @ApiParam({
    name: 'memberID',
    type: 'number',
    required: true,
    description: '사용자 계정 아이디',
  })
  @ApiOperation({ summary: '유저가 보유중인 NFT 리스트를 요청합니다.' })
  async itemListFindByMemberID(@Param() paramsData) {
    return responseCreatorUtil('성공', '200', { data: await this.itemService.allItemFindByMemberID(paramsData.memberID) });
  }

  @Get('item/:itemID')
  @ApiTags('NFT')
  @ApiParam({
    name: 'itemID',
    type: 'number',
    required: true,
    description: '아이템 아이디',
  })
  @ApiOperation({ summary: '해당 NFT의 자세한 정보를 요청합니다.' })
  async itemDetailFindByItemID(@Param() paramsData) {
    return responseCreatorUtil('성공', '200', { data: await this.itemService.itemDetailFindByItemID(paramsData.itemID) });
  }
}
