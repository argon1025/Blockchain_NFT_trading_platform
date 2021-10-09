import React, { Component } from "react";

export default class TodayComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <h1 class="font-bold text-3xl text-white">Today</h1>
        <h1 class="font-bold text-3xl text-white ">Owl's Market</h1>
        <h1 class="font-bold text-1xl text-white">
          {this.props.NAME}님 반가워요!
        </h1>
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          <div className="bg-white h-auto shadow-2xl rounded-3xl p-3 mt-3 lg:m-2 lg:w-3/12">
            <img
              class="h-40 rounded-2xl w-full object-cover"
              src="https://images.unsplash.com/photo-1633509527009-9207b8cbb624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            ></img>
            <div className="mt-3 mr-3 ml-3 flex flex-row">
              <p class="text-base font-semibold text-gray-900 mb-0">
                아끼는 신발
              </p>
              <p class="text-md text-gray-800 mt-0 ml-auto">15000원</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
