import React, { Component } from "react";

export default class TodayComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <h1 class="font-bold text-3xl text-white">My</h1>
        <h1 class="font-bold text-3xl text-white ">Wallet</h1>
        <h1 class="font-bold text-1xl text-white">
          {this.props.NAME}님 반가워요!
        </h1>
      </div>
    );
  }
}
