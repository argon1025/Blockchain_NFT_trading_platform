import React, { Component } from "react";

export default class MarketCard extends Component {
  state = {
    cardID: 0,
    pay: "",
    title: "",
    itemID: 0,
  };
  constructor(props) {
    super(props);

    // 상태 설정
    this.state.cardID = this.props.cardID || 0;
    this.state.pay = this.props.pay || "3000";
    this.state.title = this.props.title || "데이터가 없습니다.";
    this.state.itemID = this.props.itemID || 0;
  }
  clickedCard = () => {
    window.location.href = `marketdetail?marketid=${this.state.cardID}`;
  };

  render() {
    return (
      <div onClick={this.clickedCard}>
        <div className="p-3 flex flex-row">
          {/* 제품 이미지 */}
          <div className="w-14 h-14 rounded-xl object-cover overflow-hidden">
            <img src="https://images.unsplash.com/photo-1634233942057-b75723e58180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"></img>
          </div>
          {/* 판매 제목 */}
          <div className="flex flex-col ml-auto mt-3">
            <div>
              <h1 class="font-medium text-black ">{this.state.title}</h1>
            </div>
            <div className="ml-auto mt-1">
              <p class="text-xs text-gray-500 leading-none">
                {this.state.pay}원
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
