import { HttpException } from '@nestjs/common';
import Web3 from 'web3';
// sign, message를 받아 address를 리턴한다
export const deCoverSign = async (message: string, sign: string): Promise<string> => {
  try {
    // web3 모듈 초기화
    const web3 = new Web3('http://localhost:8545');

    console.log(`${message} / ${sign}`);
    // 디코드
    const address = await web3.eth.accounts.recover(message, sign);

    // 데이터 리턴
    return address;
  } catch (error) {
    console.log(error);
    throw new HttpException({ msg_code: 'Auth_1', msg: '서명이 올바르지 않습니다.' }, 400);
  }
};
