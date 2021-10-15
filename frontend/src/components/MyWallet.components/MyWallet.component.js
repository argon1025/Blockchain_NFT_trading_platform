import React, { Component } from "react";
import NFTCard from "./MyWallet.NFTCard.component";
import Axios from "axios";
import * as Web3 from "web3";

export default class MyWalletComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      // NFT 생성 입력 상태
      title: "",
      content: "",
      // NFT 생성 버튼 텍스트
      nftCreateButtonText: "등록",
    };
  }
  // 타이머
  timer = (timeSet) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeSet);
    });
  };

  // NFT 생성중 title 입력 이벤트
  titleFromChange = (event) => {
    this.setState({ ...this.state, title: event.target.value });
    console.log(event);
  };

  // NFT 생성중 물건 설명 Content 이벤트
  contentFromChange = (event) => {
    this.setState({ ...this.state, content: event.target.value });
    console.log(event);
  };

  changeNftCreateButtonText = (text) => {
    this.setState({ ...this.state, nftCreateButtonText: text });
  };

  // NFT 생성 요청 버튼
  nftCreateButtonClose = async () => {
    this.changeNftCreateButtonText("트랜잭션 중..");
    try {
      // 백엔드 서버에 아이디 생성요청
      const result = await Axios.post(
        `http://localhost:8080/item`,
        {
          title: `${this.state.title}`,
          content: `${this.state.content}`,
        },
        { withCredentials: true }
      );
      console.log(`예약 ID : ${result.data.data}`);

      // 생성된 아이템 아이디를 기반으로 트랜잭션
      const web3 = new Web3("http://localhost:8545");
      const owlToken = new web3.eth.Contract(
        this.props.CONTRACT_ABI,
        this.props.CONTRACT_ADDRESS
      );

      const sendData = await owlToken.methods
        .awardItem(this.props.ADDRESS, "1")
        .send({ from: this.props.ADDRESS });
      console.log(
        `확정 토큰 ID : ${sendData.events.Transfer.returnValues.tokenId}`
      );
    } catch (error) {
      console.log(error);
      return false;
    }
    // 리스트 갱신
    this.changeNftCreateButtonText("리스트 갱신중..");
    await this.timer(1000);
    await this.props.getWalletList(this.props.ID);
    console.log("close Modal");
    // 버튼 텍스트 초기화
    this.changeNftCreateButtonText("등록");
    // 모달 종료
    this.props.closeCreateNftModal();
  };

  async componentDidMount() {
    await this.props.getWalletList(this.props.ID);
    console.log("getWalletList Done");
  }

  render() {
    // NFT 리스트 생성
    let listView;
    if (Object.keys(this.props.MY_WALLET_LIST).length > 0) {
      listView = this.props.MY_WALLET_LIST.map((listData) => {
        // 타이틀 검색
        let title;
        listData.itemHistories.forEach((historyData) => {
          if (historyData.contentType === "title") {
            title = historyData.content;
          }
        });
        return (
          <NFTCard
            cardID={listData.id}
            createAt={listData.createdAt}
            title={title}
          />
        );
      });
    } else {
      listView = (
        <div className="grid grid-cols-1 justify-items-center">
          <div className="mt-32">
            <svg
              className="h-20 w-20 fill-current text-gray-300"
              id="Layer_1"
              enable-background="new 0 0 512.326 512.326"
              viewBox="0 0 512.326 512.326"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m512.163 29.237.164-28.698-115.285 41.798c-41.838-27.65-90.318-42.213-140.879-42.213s-99.041 14.563-140.878 42.214l-115.285-41.799.164 28.698c.23 40.495 14.574 71.216 35.26 97.164-23.095 39.227-35.26 83.872-35.26 129.722v141.695l15.245 3.731c97.329 23.825 170.632 56.084 230.688 101.523l12.067 9.13 12.067-9.13c61.362-46.426 133.394-78.686 226.688-101.523l15.245-3.731v-141.694c0-45.85-12.165-90.495-35.26-129.722 20.685-25.949 35.028-56.669 35.259-97.165zm-390.871 57.826 8.578-6.193c36.92-26.657 80.592-40.747 126.293-40.747s89.373 14.09 126.293 40.747l8.578 6.193 76.986-27.913c-11.221 39.679-43.822 66.704-80.474 97.088-34.556 28.646-70.277 58.268-92.872 102.172l-38.512 66.02-38.512-66.02c-22.595-43.905-58.316-73.526-92.872-102.172-36.651-30.383-69.252-57.408-80.472-97.087zm191.084 181.185-.213-.124.226.115zm38.644-22.767c4.602 4.128 10.683 6.642 17.352 6.642 14.236 0 25.792-11.442 25.991-25.63 1.812 4.423 2.8 9.16 2.8 13.979 0 21.493-18.222 39.651-39.791 39.651-8.737 0-17.27-3.253-24.167-8.889 5.176-9.139 11.193-17.677 17.815-25.753zm-233.057-18.987c.199 14.188 11.755 25.63 25.99 25.63 6.669 0 12.75-2.514 17.353-6.642 6.622 8.076 12.639 16.613 17.815 25.753-6.897 5.636-15.431 8.889-24.167 8.889-21.569 0-39.791-18.158-39.791-39.651 0-4.82.988-9.556 2.8-13.979zm81.974 41.745.226-.115-.212.124zm272.226 98.318c-85.653 22.423-154.362 53.159-214.014 95.756-58.853-41.833-128.84-72.573-217.986-95.769v-110.42c0-34.76 8.28-68.687 24.082-99.208 10.769 9.973 22.125 19.437 33.424 28.806-14.176 14.483-22.506 33.959-22.506 54.75 0 21.105 8.366 41.068 23.557 56.21 15.165 15.116 35.136 23.441 56.234 23.441 15.822 0 31.242-5.056 44.223-13.998l56.986 97.691 56.986-97.691c12.981 8.942 28.401 13.998 44.223 13.998 21.098 0 41.069-8.325 56.234-23.441 15.191-15.142 23.557-35.104 23.557-56.21 0-20.791-8.33-40.267-22.506-54.75 11.299-9.369 22.655-18.833 33.424-28.806 15.802 30.52 24.082 64.448 24.082 99.208zm-313.841-256.756c12.644-8.483 26.187-15.219 40.364-20.111 19.616 15.132 38.716 32.82 57.477 53.225 18.761-20.405 37.861-38.094 57.477-53.225 14.177 4.892 27.72 11.628 40.364 20.111-28.397 19.373-55.713 44.618-82.597 76.269l-15.244 17.947-15.244-17.947c-26.884-31.651-54.2-56.896-82.597-76.269z" />
            </svg>
          </div>
          <span className="text-sm text-gray-400 mt-5 font-kor-main-font">
            보유중인 NFT가 없습니다
          </span>
        </div>
      );
    }
    return (
      <div className="">
        <h1 class="font-bold text-3xl text-white">My</h1>
        <h1 class="font-bold text-3xl text-white ">Wallet</h1>
        <h1 class="font-bold text-1xl text-white">
          {this.props.NAME}님이 보유중인 NFT 리스트
        </h1>
        {/* NFT 생성 */}
        <div class="flex mt-3 p-8 bg-white shadow-2xl rounded-3xl lg:w-2/5">
          <div class="flex flex-col w-full items-center">
            <div class="flex flex-col items-center lg:flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <div class="flex flex-col ml-3 mt-3 items-center lg:mt-0 lg:items-start">
                <div class="font-medium leading-none">NFT 등록하기</div>
                <p class="text-sm text-gray-600 leading-none mt-1">
                  보유한 물건을 NFT로 생성해 보세요!
                </p>
              </div>
            </div>
            {this.props.NFT_CREATE_MODAL ? (
              <div className="flex flex-col mt-5 w-11/12 xl:w-1/4 ">
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
                  class="w-full mt-6 text-white font-eng-main-font font-bold bg-blue-400 py-3 rounded-lg hover:bg-blue-400 transition duration-300"
                  onClick={this.nftCreateButtonClose}
                >
                  {this.state.nftCreateButtonText}
                </button>
                <button
                  class="w-full mt-6 text-white font-eng-main-font font-bold bg-red-400 py-3 rounded-lg hover:bg-red-400 transition duration-300"
                  onClick={this.props.closeCreateNftModal}
                >
                  등록 취소
                </button>
              </div>
            ) : (
              <button
                class="w-full mt-5 text-white font-eng-main-font font-bold bg-blue-300 py-3 rounded-lg hover:bg-blue-400 transition duration-300"
                onClick={this.props.openCreateNftModal}
              >
                등록
              </button>
            )}
          </div>
        </div>
        {/* NFT 보유 리스트 */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap">{listView}</div>
      </div>
    );
  }
}
