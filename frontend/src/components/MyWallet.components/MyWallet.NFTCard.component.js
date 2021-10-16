import React, { Component } from "react";
import Axios from "axios";
import RequestTradeCard from "./RequestTrade.component";

export default class NFTCard extends Component {
  state = {
    cardID: 0,
    createAt: "",
    title: "",
    marketUploadModal: false,
    marketUploadTitle: "",
    marketUploadPay: 0,
    marketUploadcontent: "",
    marketUploadButtonText: "등록",
    requestTrade: [],
  };
  constructor(props) {
    super(props);

    // 상태 설정
    this.state.cardID = this.props.cardID || 0;
    this.state.createAt = this.props.createAt || "2021-10-11";
    this.state.title = this.props.title || "무명";
  }
  async componentDidMount() {
    // 거래 신청 목록을 요청한다
    try {
      const result = await Axios.get(`http://localhost:8080/requestTrade`, {
        withCredentials: true,
      });
      console.log(result.data.data);
      this.setState({ ...this.state, requestTrade: result.data.data });
    } catch (error) {
      console.log(error);
    }
  }
  // 타이머
  timer = (timeSet) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeSet);
    });
  };
  clickedCard = () => {
    window.location.href = `itemdetail?itemid=${this.state.cardID}`;
  };
  clickedOpenMarketUploadButton = () => {
    this.setState({ ...this.state, marketUploadModal: true });
  };
  clickedCloseMarketUploadButton = () => {
    this.setState({ ...this.state, marketUploadModal: false });
  };
  changeMarketUploadButtonText = (text) => {
    this.setState({ ...this.state, marketUploadButtonText: text });
  };

  clickedMarketUploadButton = async () => {
    try {
      this.changeMarketUploadButtonText("요청중");
      const result = await Axios.post(
        `http://localhost:8080/market`,
        {
          itemId: `${this.state.cardID}`,
          title: `${this.state.marketUploadTitle}`,
          pay: `${this.state.marketUploadPay}`,
          content: `${this.state.marketUploadcontent}`,
        },
        { withCredentials: true }
      );
      console.log(result);
      this.changeMarketUploadButtonText("성공");
      await this.timer(2000);
      this.clickedCloseMarketUploadButton();
      this.changeMarketUploadButtonText("등록");
    } catch (error) {
      console.log(error);
    }
  };

  titleFromChange = (event) => {
    this.setState({ ...this.state, marketUploadTitle: event.target.value });
  };
  payFromChange = (event) => {
    this.setState({ ...this.state, marketUploadPay: event.target.value });
  };
  contentFromChange = (event) => {
    this.setState({ ...this.state, marketUploadcontent: event.target.value });
  };
  render() {
    let requestTradeList;
    if (Object.keys(this.state.requestTrade).length > 0) {
      requestTradeList = this.state.requestTrade.map((listData) => {
        // 아이템 아이디가 현제 카드 아이템 아이디와 일치하여야만 한다
        if (this.state.cardID === listData.itemId) {
          return (
            <RequestTradeCard
              id={listData.id}
              status={listData.status}
              itemID={listData.itemId}
              requestMemberID={listData.requestMemberId}
              requestMemberName={listData.requestMember.name}
              requestMemberWalletAddress={listData.requestMember.wallet}
              refreshWalletList={this.props.refreshWalletList}
              myAddress={this.props.myAddress}
              CONTRACT_ABI={this.props.CONTRACT_ABI}
              CONTRACT_ADDRESS={this.props.CONTRACT_ADDRESS}
            />
          );
        }
        console.log(listData);
      });
    }
    return (
      <div className="bg-white h-auto shadow-md rounded-3xl p-3 mt-3 lg:m-2 lg:w-3/12">
        <img
          onClick={this.clickedCard}
          className="h-24 rounded-2xl w-full object-cover"
          src="https://images.unsplash.com/photo-1605478185737-99ae313e940c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        ></img>
        <div className="mt-3 mr-3 ml-3 flex flex-row">
          <p class="text-base font-semibold text-gray-900 mb-0">
            {this.state.title}
          </p>
          <p class="text-md text-gray-400 mt-0 ml-auto">
            {this.state.createAt}
          </p>
        </div>
        {/* 거래신청 리스트 */}
        {requestTradeList}
        {this.state.marketUploadModal ? (
          <div className="flex flex-col mt-5 p-3 w-full">
            <div className="flex flex-col">
              <label
                class="mr-4 text-gray-700 font-bold inline-block mb-2"
                for="name"
              >
                물건 이름
              </label>
              <input
                type="text"
                class="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-blue-300 rounded"
                placeholder="휴대폰"
                onChange={this.titleFromChange}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label
                class="mr-4 text-gray-700 font-bold inline-block mb-2"
                for="name"
              >
                가격
              </label>
              <input
                type="text"
                class="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-blue-300 rounded"
                placeholder="5000"
                onChange={this.payFromChange}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label
                class="mr-4 text-gray-700 font-bold inline-block mb-2"
                for="name"
              >
                물건 설명
              </label>
              <textarea
                type="text"
                class="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-blue-300 rounded"
                placeholder="2019년도에 산 소중한 내 물건 판매합니다!"
                onChange={this.contentFromChange}
              />
            </div>
            <button
              class="w-full mt-6 text-white font-eng-main-font bg-blue-500 py-3 rounded-lg hover:bg-blue-300 transition duration-300"
              onClick={this.clickedMarketUploadButton}
            >
              {this.state.marketUploadButtonText}
            </button>
            <button
              class="w-full mt-6 text-white font-eng-main-font bg-red-500 py-3 rounded-lg hover:bg-red-300 transition duration-300"
              onClick={this.clickedCloseMarketUploadButton}
            >
              등록 취소
            </button>
          </div>
        ) : (
          <button
            class="w-full mt-3 text-white font-eng-main-font bg-blue-600 py-3 rounded-lg hover:bg-blue-300 transition duration-300"
            onClick={this.clickedOpenMarketUploadButton}
          >
            마켓에 판매 등록
          </button>
        )}
      </div>
    );
  }
}
