import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/entities/Member';
import { deCoverSign } from 'src/util/web3.util';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Member) private membersRepository: Repository<Member>) {}

  // 해당 멤버가 가입되어 확인하고 유저정보를 반환한다
  async memberAlreadyExistFindByAddress(address: string): Promise<any> {
    try {
      // 해당 지갑 주소로 등록된 회원 정보를 조회
      const result = await this.membersRepository.findOneOrFail({ wallet: address });

      // 정보를 찾았을 경우 해당 유저정보 반환
      return result;
    } catch (error) {
      // 정보를 찾지 못했을 경우 반환
      return false;
    }
  }

  // 멤버 정보 저장
  async memberRegistration(address: string, name: string) {
    // 가입된 주소인지 확인한다
    if (!!(await this.memberAlreadyExistFindByAddress(address))) {
      throw new HttpException({ msg_code: 'Auth_1', msg: '이미 가입된 멤버입니다' }, 400);
    }
    try {
      // 가입 시작
      const result = await this.membersRepository.save({
        provider: 'metamask',
        name: name,
        wallet: address,
      });
      console.log(result);
      return true;
    } catch (error) {
      throw new HttpException({ msg_code: 'Auth_2', msg: '가입에 실패했습니다 ' }, 500);
    }
  }

  // 멤버 넌스 변경
  async changeUserNonce(address: string) {
    // 랜덤한 난수를 생성한다
    const NONCE = String(Math.floor(Math.random() * 10000));
    const ROW_NOT_CHANGED = 0;

    const result = await this.membersRepository.update({ wallet: address }, { nonce: NONCE });

    if (result.affected === ROW_NOT_CHANGED) {
      throw new HttpException({ msg_code: 'Auth_3', msg: '존재하지 않는 멤버입니다.' }, 400);
    } else {
      return true;
    }
  }

  // 멤버 서명을 검증하고 넌스를 변경합니다
  async memberSignProofAndChangeNonce(address: string, nonce: string, sign: string) {
    const result = await deCoverSign(nonce, sign);
    // 유저 넌스 변경
    await this.changeUserNonce(address);
    if (address.toUpperCase() === result.toUpperCase()) {
      return true;
    } else {
      throw new HttpException({ msg_code: 'Auth_4', msg: '서명이 올바르지 않습니다.' }, 400);
    }
  }

  create() {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
