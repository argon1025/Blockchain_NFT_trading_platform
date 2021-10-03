import React, { Component } from "react";
import * as Web3 from "web3";
import * as ethUtil from "ethereumjs-util";
import WalletConnectProvider from "@walletconnect/web3-provider";
import * as sigUtil from "eth-sig-util";

export default class Web3LoginComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (typeof window.ethereum !== "undefined") {
      // 메타마스크 인증을 요청합니다
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0]);
      window.web3 = new Web3(window.ethereum);

      let result = await window.web3.eth.personal.sign("9267", accounts[0]);
      console.log(`서명`);
      console.log(result);
      let result2 = await window.web3.eth.personal.ecRecover("9267", result);
      console.log("서명 복호화 결과");
      console.log(result2);

      // 계정 변경 이벤트
      window.ethereum.on("accountsChanged", function (accounts) {
        // Time to reload your interface with accounts[0]!
        console.log(`변경 ${accounts[0]}`);
      });

      //체인 변경 이벤트
      window.ethereum.on("chainChanged", (chainId) => {
        if (chainId != "0x539") {
          console.log("사용할 수 있는 네트워크 아님");
          window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x539" }],
          });
        }
        console.log(`체인 변경 ${chainId}`);
      });
    } else {
      console.log("메타 마스크 미설치");
    }
  }

  async signMsg(msgParams, from) {
    await window.web3.currentProvider.sendAsync(
      {
        method: "eth_signTypedData",
        params: [msgParams, from],
        from: from,
      },
      function (err, result) {
        console.log(err);
        console.log(result);
      }
    );
  }

  render() {
    return (
      <div className="flex flex-col justify-center lg:flex-row h-28 bg-gray-100 mb-1 pt-5">
        <div className="flex justify-center">
          <p className="text-gray-700 text-4xl font-bold mr-5">Harmony</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-gray-300 lg:text-left text-center">
            ⓒ 2021. SeongrokLEE All Rights Reserved
          </p>
          <p className="text-xs text-gray-300 lg:text-left text-center">
            Icons made by Freepik from www.flaticon.com
          </p>
          <p className="text-xs text-gray-300 lg:text-left text-center">
            School vector created by pch.vector - www.freepik.com
          </p>
        </div>
      </div>
    );
  }
}
