import React, { Component } from "react";
import * as Container from "../containers";
import backgrundImage from "../content/BG_4.jpg";
export default class MainContentComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex flex-col justify-center bg-gray-50">
        <Container.CautionModalContainer />
        <div className="flex flex-row m-5 z-40">
          <div className="flex-1 mt-2">
            <svg
              className="w-7 fill-current text-white"
              id="Layer_1"
              enable-background="new 0 0 512.326 512.326"
              viewBox="0 0 512.326 512.326"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m512.163 29.237.164-28.698-115.285 41.798c-41.838-27.65-90.318-42.213-140.879-42.213s-99.041 14.563-140.878 42.214l-115.285-41.799.164 28.698c.23 40.495 14.574 71.216 35.26 97.164-23.095 39.227-35.26 83.872-35.26 129.722v141.695l15.245 3.731c97.329 23.825 170.632 56.084 230.688 101.523l12.067 9.13 12.067-9.13c61.362-46.426 133.394-78.686 226.688-101.523l15.245-3.731v-141.694c0-45.85-12.165-90.495-35.26-129.722 20.685-25.949 35.028-56.669 35.259-97.165zm-390.871 57.826 8.578-6.193c36.92-26.657 80.592-40.747 126.293-40.747s89.373 14.09 126.293 40.747l8.578 6.193 76.986-27.913c-11.221 39.679-43.822 66.704-80.474 97.088-34.556 28.646-70.277 58.268-92.872 102.172l-38.512 66.02-38.512-66.02c-22.595-43.905-58.316-73.526-92.872-102.172-36.651-30.383-69.252-57.408-80.472-97.087zm191.084 181.185-.213-.124.226.115zm38.644-22.767c4.602 4.128 10.683 6.642 17.352 6.642 14.236 0 25.792-11.442 25.991-25.63 1.812 4.423 2.8 9.16 2.8 13.979 0 21.493-18.222 39.651-39.791 39.651-8.737 0-17.27-3.253-24.167-8.889 5.176-9.139 11.193-17.677 17.815-25.753zm-233.057-18.987c.199 14.188 11.755 25.63 25.99 25.63 6.669 0 12.75-2.514 17.353-6.642 6.622 8.076 12.639 16.613 17.815 25.753-6.897 5.636-15.431 8.889-24.167 8.889-21.569 0-39.791-18.158-39.791-39.651 0-4.82.988-9.556 2.8-13.979zm81.974 41.745.226-.115-.212.124zm272.226 98.318c-85.653 22.423-154.362 53.159-214.014 95.756-58.853-41.833-128.84-72.573-217.986-95.769v-110.42c0-34.76 8.28-68.687 24.082-99.208 10.769 9.973 22.125 19.437 33.424 28.806-14.176 14.483-22.506 33.959-22.506 54.75 0 21.105 8.366 41.068 23.557 56.21 15.165 15.116 35.136 23.441 56.234 23.441 15.822 0 31.242-5.056 44.223-13.998l56.986 97.691 56.986-97.691c12.981 8.942 28.401 13.998 44.223 13.998 21.098 0 41.069-8.325 56.234-23.441 15.191-15.142 23.557-35.104 23.557-56.21 0-20.791-8.33-40.267-22.506-54.75 11.299-9.369 22.655-18.833 33.424-28.806 15.802 30.52 24.082 64.448 24.082 99.208zm-313.841-256.756c12.644-8.483 26.187-15.219 40.364-20.111 19.616 15.132 38.716 32.82 57.477 53.225 18.761-20.405 37.861-38.094 57.477-53.225 14.177 4.892 27.72 11.628 40.364 20.111-28.397 19.373-55.713 44.618-82.597 76.269l-15.244 17.947-15.244-17.947c-26.884-31.651-54.2-56.896-82.597-76.269z" />
            </svg>
          </div>
          <div className="ml-auto">
            <p class="w-20 h-11 p-1 truncate rounded-2xl bg-white shadow-lg pt-4 text-xs bg-gradient-to-r from-green-200 to-blue-400 text-white border-2 border-white">
              {this.props.ADDRESS}
            </p>
          </div>
        </div>
        <div className="flex flex-nowrap flex-row overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-snap z-40">
          <div className="w-screen flex-none scroll-snap-item p-5">
            <Container.MyWalletContainer />
          </div>
          <div className="w-screen h-screen flex-none scroll-snap-item p-5">
            <Container.MarketContainer />
          </div>
          <div className="w-screen h-screen flex-none scroll-snap-item p-5">
            item 3
          </div>
        </div>

        {/* ?????? ????????? */}
        <div className="absolute bg-color-green top-0 left-0 h-60 z-0 rounded-b-2xl overflow-hidden">
          <img
            className="transform scale-150 object-cover w-screen h-full filter "
            src={backgrundImage}
            alt="MainIntroIMG"
          ></img>
        </div>
      </div>
    );
  }
}
