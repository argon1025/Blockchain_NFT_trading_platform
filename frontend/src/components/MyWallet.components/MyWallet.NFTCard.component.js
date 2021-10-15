import React, { Component } from "react";

export default class NFTCard extends Component {
  state = {
    cardID: 0,
    createAt: "",
    title: "",
  };
  constructor(props) {
    super(props);

    // 상태 설정
    this.state.cardID = this.props.cardID || 0;
    this.state.createAt = this.props.createAt || "2021-10-11";
    this.state.title = this.props.title || "무명";
  }
  clickedCard = () => {
    window.location.href = `itemdetail?itemid=${this.state.cardID}`;
  };

  render() {
    return (
      <div className="bg-white h-auto shadow-md rounded-3xl p-3 mt-3 lg:m-2 lg:w-3/12">
        <img
          onClick={this.clickedCard}
          class="h-24 rounded-2xl w-full object-cover"
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
        <button
          class="w-full mt-3 text-white font-eng-main-font font-bold bg-blue-300 py-3 rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={this.signUpButtonClick}
        >
          마켓에 판매 등록
        </button>
      </div>
    );
  }
}
