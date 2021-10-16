import React, { Component } from "react";
import Axios from "axios";
import * as Web3 from "web3";

export default class RequestTradeCard extends Component {
  state = {
    id: 0,
    itemID: 0,
    status: "",
    requestMemberID: 0,
    requestMemberName: "무명",
    requestMemberWalletAddress: "",
    acceptButtonText: "수락",
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    // 거래 요청 ID
    this.state.id = this.props.id;
    // 아이템 ID
    this.state.itemID = this.props.itemID;
    // 거래 요청 상태
    this.state.status = this.props.status;
    // 거래 요청 멤버 아이디
    this.state.requestMemberID = this.props.requestMemberID;
    // 거래 요청 멤버이름
    this.state.requestMemberName = this.props.requestMemberName;
    // 거래 요청 멤버 지갑 주소
    this.state.requestMemberWalletAddress =
      this.props.requestMemberWalletAddress;
  }
  // 타이머
  timer = (timeSet) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeSet);
    });
  };
  changeAcceptButtonText = (text) => {
    this.setState({ ...this.state, acceptButtonText: text });
  };
  clickedAcceptButton = async () => {
    try {
      // 트랜잭션을 시도한다
      // 월렛 권한 승인
      window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // 월렛 프로바이더
      window.web3 = new Web3(window.ethereum);
      // 컨트렉트 연결
      const owlToken = new window.web3.eth.Contract(
        this.props.CONTRACT_ABI,
        this.props.CONTRACT_ADDRESS
      );
      // 메서드 호출
      const sendData = await owlToken.methods
        .transferFrom(
          this.props.myAddress,
          this.state.requestMemberWalletAddress,
          this.state.itemID
        )
        .send({ from: this.props.myAddress });
      console.log(sendData);

      // 백엔드에 변경사항 보고
      const result = await Axios.post(
        `http://localhost:8080/requestTrade/${this.state.id}`,
        {},
        { withCredentials: true }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    // 트랜잭션을 성공했을 경우 백엔드에 보고한다
  };
  clickedRejectButton = async () => {};

  render() {
    return (
      <div className="flex flex-col m-3">
        <div className="flex flex-row">
          <p class="mt-1 text-base text-gray-800">
            {this.state.requestMemberName}님의 양도 요청
          </p>
          <div className="flex flex-row ml-auto">
            <button
              class="mr-3 w-20 rounded-xl p-1 border border-green-100 text-green-400 bg-green-50 text-center hover:bg-green-300 hover:text-white transition duration-300"
              onClick={this.clickedAcceptButton}
            >
              {this.state.acceptButtonText}
            </button>
            <button
              class="w-20 rounded-xl p-1 border border-red-100 text-red-400 bg-red-50 text-center hover:bg-red-300 hover:text-white transition duration-300"
              onClick={this.clickedCloseMarketUploadButton}
            >
              거절
            </button>
          </div>
        </div>
        <div className="w-full p-2">
          <hr />
        </div>
      </div>
    );
  }
}
