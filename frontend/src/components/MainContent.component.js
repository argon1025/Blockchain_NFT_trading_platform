import React, { Component } from "react";

export default class MainContentComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex flex-col justify-center">
        메인 페이지 로그인 유무 : {this.props.LOGIN} <br />
        사용자 지갑 주소 : {this.props.ADDRESS}
        <br />
        이름 : {this.props.NAME}
        <br />
        사용자 코드 : {this.props.ID}
        <br />
      </div>
    );
  }
}
