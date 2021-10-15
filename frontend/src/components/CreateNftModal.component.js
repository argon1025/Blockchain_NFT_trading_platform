import React, { Component } from "react";

export default class CreateNftModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };

    this.closeModal = this.closeModal.bind(this);
  }

  titleFromChange = (event) => {
    this.setState({ ...this.state, title: event.target.value });
    console.log(event);
  };
  contentFromChange = (event) => {
    this.setState({ ...this.state, content: event.target.value });
    console.log(event);
  };

  closeModal() {
    console.log("close Modal");
    this.props.closeCreateNftModal();
  }

  render() {
    const ERROR_STATE = this.props.NFT_CREATE_MODAL;
    return (
      <div>
        {ERROR_STATE ? (
          <div className="flex fixed h-full w-full items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white flex flex-col mt-5 shadow-lg p-4 rounded-lg w-11/12 xl:w-1/4 transition duration-300">
              <div class="">
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
              <div class="mt-3">
                <label
                  class="mr-4 text-gray-700 font-bold inline-block mb-2"
                  for="name"
                >
                  물건 설명
                </label>
                <input
                  type="text"
                  class="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-blue-300 rounded"
                  placeholder="2019년도에 산 소중한 내 물건"
                  onChange={this.contentFromChange}
                />
              </div>
              <button
                class="w-full mt-6 text-white font-eng-main-font font-bold bg-blue-300 py-3 rounded-lg hover:bg-blue-400 transition duration-300"
                onClick={this.closeModal}
              >
                생성
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
