import { Controller, Get, Post, Body, Param, UseGuards, HttpException, Req, Session } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/Auth.guard';
import { AuthService } from './auth.service';
import { responseCreatorUtil } from 'src/util/response.creator.util';

// DTO
import { AuthLoginDTO } from './dto/auth.login.dto';
import { AuthJoinDTO } from './dto/auth.join.dto';
import { deCoverSign } from 'src/util/web3.util';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // MetaMask Login
  @ApiTags('Auth')
  @ApiOperation({ summary: '메타 마스크 서명으로 로그인 세션을 요청합니다' })
  @ApiBody({
    type: AuthLoginDTO,
  })
  @Post('metamasklogin')
  async memberLogin(@Body() authLoginDTO: AuthLoginDTO, @Req() req) {
    // 존재하는 유저인지 확인하고 유저정보를 로드한다
    const userInfo = await this.authService.memberAlreadyExistFindByAddress(authLoginDTO.address);

    //존재하지 않는 유저일 경우 에러로 응답한다
    if (!userInfo) {
      throw new HttpException({ msg_code: 'Auth_C_1', msg: '멤버 정보가 없습니다 회원가입이 필요합니다' }, 404);
    }

    // 유저가 존재할 경우 데이터베이스에 저장된 넌스와 유저의 사인을 비교 검증한다
    // 비교 검증 후엔 넌스를 변경한다
    if (await this.authService.memberSignProofAndChangeNonce(authLoginDTO.address, userInfo.nonce, authLoginDTO.signed)) {
      // 세션 저장
      // DB ID
      // DB walletAddress
      // DB name
      req.session.memberID = userInfo.id;
      req.session.wallet = userInfo.wallet;
      req.session.name = userInfo.name;
      await req.session.save;
      return responseCreatorUtil('로그인 성공', '200');
    } else {
      throw new HttpException({ msg_code: 'Auth_C_2', msg: '서명 검증에 실패했습니다 다시 서명해 주세요' }, 401);
    }
  }

  //MetaMask Join
  @ApiTags('Auth')
  @ApiOperation({ summary: '미등록된 지갑을 데이터베이스에 등록합니다' })
  @ApiBody({
    type: AuthJoinDTO,
  })
  @Post('metamaskjoin')
  async memberJoin(@Body() AuthJoinDTO: AuthJoinDTO) {
    // 자기 자신의 주소로 생성된 sign으로 가입을 진행한다
    // 가입이 완료되면 nonce를 부여한다
    // 존재하는 멤버인지 확인하고 유저정보를 로드한다
    const userInfo = await this.authService.memberAlreadyExistFindByAddress(AuthJoinDTO.address);

    // 가입된 멤버일 경우 오류코드를 반환한다
    if (!!userInfo) {
      throw new HttpException({ msg_code: 'Auth_C_3', msg: '가입된 주소입니다.' }, 401);
    }

    // 본인의 주소로 생성관 sign인지 확인한다
    const deCoverResult = await deCoverSign(AuthJoinDTO.address, AuthJoinDTO.signed);
    // console.log(`deCoverResult:${deCoverResult} AuthJoinDTO:${AuthJoinDTO.address}`);
    if (!(deCoverResult.toUpperCase() === AuthJoinDTO.address.toUpperCase())) {
      throw new HttpException({ msg_code: 'Auth_C_4', msg: '서명 검증에 실패했습니다' }, 401);
    }
    await this.authService.memberRegistration(AuthJoinDTO.address, AuthJoinDTO.name);

    // 다음 로그인에 사용하기 위한 넌스를 발급한다
    await this.authService.changeUserNonce(AuthJoinDTO.address);

    return responseCreatorUtil('회원가입 성공', '200');
  }

  //MetaMask nonce
  @ApiTags('Auth')
  @ApiOperation({ summary: '멤버의 현재 nonce를 조회해 리턴합니다' })
  @ApiParam({
    name: 'address',
    type: 'string',
    required: true,
    description: '지갑 주소',
  })
  @Get('nonce/:address')
  async getMemberNonceFindByAddress(@Param() paramsData) {
    // 가입된 주소인지 확인하고 넌스 데이터를 응답합니다
    const userInfo = await this.authService.memberAlreadyExistFindByAddress(paramsData.address);
    if (!userInfo) {
      throw new HttpException({ msg_code: 'Auth_C_5', msg: '멤버 정보가 없습니다 회원가입이 필요합니다' }, 404);
    }
    console.log(userInfo);
    return responseCreatorUtil('ok', '200', { data: userInfo.nonce });
  }

  @ApiTags('Auth')
  @ApiOperation({ summary: '세션정보를 조회합니다' })
  @Get('userinfo')
  @UseGuards(AuthGuard)
  async getUserInfo(@Session() session: Record<string, any>, @Req() req) {
    console.log(req.sessionID);
    console.log(req.session.memberID);
    return responseCreatorUtil('ok', '200', { userInfo: { memberID: session.memberID, address: session.wallet, name: session.name } });
  }
}
