import React, { Component } from "react";
import backgrundImage from "../content/BG_1.jpg";

export default class IntroductionComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    // Bind
    this.loginButtonForMetaMask = this.loginButtonForMetaMask.bind(this);
  }

  loginButtonForMetaMask() {
    window.location.href = "/metamasklogin";
  }

  render() {
    return (
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center mt-9 z-40">
          <svg
            className="w-12 fill-current text-white"
            id="Layer_1"
            enable-background="new 0 0 512.326 512.326"
            viewBox="0 0 512.326 512.326"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m512.163 29.237.164-28.698-115.285 41.798c-41.838-27.65-90.318-42.213-140.879-42.213s-99.041 14.563-140.878 42.214l-115.285-41.799.164 28.698c.23 40.495 14.574 71.216 35.26 97.164-23.095 39.227-35.26 83.872-35.26 129.722v141.695l15.245 3.731c97.329 23.825 170.632 56.084 230.688 101.523l12.067 9.13 12.067-9.13c61.362-46.426 133.394-78.686 226.688-101.523l15.245-3.731v-141.694c0-45.85-12.165-90.495-35.26-129.722 20.685-25.949 35.028-56.669 35.259-97.165zm-390.871 57.826 8.578-6.193c36.92-26.657 80.592-40.747 126.293-40.747s89.373 14.09 126.293 40.747l8.578 6.193 76.986-27.913c-11.221 39.679-43.822 66.704-80.474 97.088-34.556 28.646-70.277 58.268-92.872 102.172l-38.512 66.02-38.512-66.02c-22.595-43.905-58.316-73.526-92.872-102.172-36.651-30.383-69.252-57.408-80.472-97.087zm191.084 181.185-.213-.124.226.115zm38.644-22.767c4.602 4.128 10.683 6.642 17.352 6.642 14.236 0 25.792-11.442 25.991-25.63 1.812 4.423 2.8 9.16 2.8 13.979 0 21.493-18.222 39.651-39.791 39.651-8.737 0-17.27-3.253-24.167-8.889 5.176-9.139 11.193-17.677 17.815-25.753zm-233.057-18.987c.199 14.188 11.755 25.63 25.99 25.63 6.669 0 12.75-2.514 17.353-6.642 6.622 8.076 12.639 16.613 17.815 25.753-6.897 5.636-15.431 8.889-24.167 8.889-21.569 0-39.791-18.158-39.791-39.651 0-4.82.988-9.556 2.8-13.979zm81.974 41.745.226-.115-.212.124zm272.226 98.318c-85.653 22.423-154.362 53.159-214.014 95.756-58.853-41.833-128.84-72.573-217.986-95.769v-110.42c0-34.76 8.28-68.687 24.082-99.208 10.769 9.973 22.125 19.437 33.424 28.806-14.176 14.483-22.506 33.959-22.506 54.75 0 21.105 8.366 41.068 23.557 56.21 15.165 15.116 35.136 23.441 56.234 23.441 15.822 0 31.242-5.056 44.223-13.998l56.986 97.691 56.986-97.691c12.981 8.942 28.401 13.998 44.223 13.998 21.098 0 41.069-8.325 56.234-23.441 15.191-15.142 23.557-35.104 23.557-56.21 0-20.791-8.33-40.267-22.506-54.75 11.299-9.369 22.655-18.833 33.424-28.806 15.802 30.52 24.082 64.448 24.082 99.208zm-313.841-256.756c12.644-8.483 26.187-15.219 40.364-20.111 19.616 15.132 38.716 32.82 57.477 53.225 18.761-20.405 37.861-38.094 57.477-53.225 14.177 4.892 27.72 11.628 40.364 20.111-28.397 19.373-55.713 44.618-82.597 76.269l-15.244 17.947-15.244-17.947c-26.884-31.651-54.2-56.896-82.597-76.269z" />
          </svg>
        </div>
        {/* 소개 문구 */}
        <div className="flex flex-col items-center mt-24 z-40 animate-fadeIn1">
          <p className=" text-3xl font-eng-main-font font-semibold">
            소중했던 내 물건을
          </p>
          <p className="  text-3xl pt-3 font-eng-main-font font-semibold">
            깨끗하게 다음사람에게
          </p>
          <p className=" text-white pt-3 font-kor-main-font font-thin">
            NFT 체인에서 투명하게 거래하세요
          </p>
        </div>
        <div className="flex flex-col items-center mt-24  z-40 animate-fadeIn2">
          <svg
            width="172"
            height="33"
            viewBox="0 0 172 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M151.256 16.64C150.372 16.0569 149.398 15.6423 148.476 15.124C147.878 14.7871 147.241 14.489 146.722 14.0614C145.838 13.3358 146.02 11.9105 146.943 11.2885C148.268 10.4074 150.463 10.8997 150.697 12.7009C150.697 12.7397 150.736 12.7657 150.775 12.7657H152.776C152.828 12.7657 152.867 12.7268 152.854 12.675C152.75 11.431 152.269 10.3944 151.386 9.73355C150.541 9.09862 149.58 8.76172 148.553 8.76172C143.266 8.76172 142.785 14.3465 145.63 16.1088C145.955 16.3161 148.748 17.7155 149.736 18.3245C150.723 18.9335 151.035 20.0479 150.606 20.929C150.216 21.7324 149.203 22.2896 148.19 22.2248C147.085 22.16 146.228 21.564 145.929 20.631C145.877 20.4626 145.851 20.1386 145.851 19.9961C145.851 19.9572 145.812 19.9183 145.773 19.9183H143.604C143.565 19.9183 143.526 19.9572 143.526 19.9961C143.526 21.564 143.916 22.4321 144.981 23.2226C145.981 23.9741 147.072 24.2851 148.203 24.2851C151.165 24.2851 152.698 22.6135 153.009 20.8772C153.282 19.1797 152.776 17.6507 151.256 16.64Z"
              fill="#161616"
            />
            <path
              d="M57.0569 9.04688H56.0956H55.0433C55.0043 9.04688 54.9783 9.07279 54.9653 9.09871L53.1856 14.9556C53.1596 15.0334 53.0557 15.0334 53.0297 14.9556L51.2499 9.09871C51.2369 9.05983 51.2109 9.04688 51.1719 9.04688H50.1197H49.1583H47.8592C47.8202 9.04688 47.7812 9.08575 47.7812 9.12462V24.0779C47.7812 24.1167 47.8202 24.1556 47.8592 24.1556H50.0287C50.0677 24.1556 50.1067 24.1167 50.1067 24.0779V12.7139C50.1067 12.6232 50.2366 12.6103 50.2626 12.688L52.0553 18.5838L52.1852 18.9984C52.1982 19.0373 52.2242 19.0503 52.2632 19.0503H53.9261C53.965 19.0503 53.991 19.0243 54.004 18.9984L54.1339 18.5838L55.9267 12.688C55.9527 12.5973 56.0826 12.6232 56.0826 12.7139V24.0779C56.0826 24.1167 56.1216 24.1556 56.1605 24.1556H58.3301C58.369 24.1556 58.408 24.1167 58.408 24.0779V9.12462C58.408 9.08575 58.369 9.04688 58.3301 9.04688H57.0569Z"
              fill="#161616"
            />
            <path
              d="M118.037 9.04688C117.998 9.04688 117.972 9.07279 117.959 9.09871L116.18 14.9556C116.154 15.0334 116.05 15.0334 116.024 14.9556L114.244 9.09871C114.231 9.05983 114.205 9.04688 114.166 9.04688H110.866C110.827 9.04688 110.788 9.08575 110.788 9.12462V24.0779C110.788 24.1167 110.827 24.1556 110.866 24.1556H113.036C113.075 24.1556 113.114 24.1167 113.114 24.0779V12.7139C113.114 12.6232 113.244 12.6103 113.27 12.688L115.062 18.5838L115.192 18.9984C115.205 19.0373 115.231 19.0503 115.27 19.0503H116.933C116.972 19.0503 116.998 19.0243 117.011 18.9984L117.141 18.5838L118.934 12.688C118.96 12.5973 119.09 12.6232 119.09 12.7139V24.0779C119.09 24.1167 119.129 24.1556 119.168 24.1556H121.337C121.376 24.1556 121.415 24.1167 121.415 24.0779V9.12462C121.415 9.08575 121.376 9.04688 121.337 9.04688H118.037Z"
              fill="#161616"
            />
            <path
              d="M90.0543 9.04688H86.014H83.8445H79.8043C79.7653 9.04688 79.7263 9.08575 79.7263 9.12462V10.9905C79.7263 11.0294 79.7653 11.0683 79.8043 11.0683H83.7666V24.0779C83.7666 24.1167 83.8055 24.1556 83.8445 24.1556H86.014C86.053 24.1556 86.092 24.1167 86.092 24.0779V11.0683H90.0543C90.0933 11.0683 90.1322 11.0294 90.1322 10.9905V9.12462C90.1322 9.08575 90.1063 9.04688 90.0543 9.04688Z"
              fill="#161616"
            />
            <path
              d="M102.851 24.1554H104.825C104.877 24.1554 104.916 24.1036 104.903 24.0518L100.824 9.0467C100.811 9.00783 100.785 8.99487 100.746 8.99487H99.9927H98.6676H97.9141C97.8751 8.99487 97.8491 9.02079 97.8361 9.0467L93.7569 24.0518C93.7439 24.1036 93.7829 24.1554 93.8349 24.1554H95.8095C95.8485 24.1554 95.8745 24.1295 95.8875 24.1036L97.0697 19.7368C97.0826 19.698 97.1086 19.685 97.1476 19.685H101.513C101.552 19.685 101.578 19.7109 101.591 19.7368L102.773 24.1036C102.786 24.1295 102.825 24.1554 102.851 24.1554ZM97.6672 17.547L99.2522 11.703C99.2781 11.6253 99.3821 11.6253 99.4081 11.703L100.993 17.547C101.006 17.5988 100.967 17.6506 100.915 17.6506H97.7452C97.6932 17.6506 97.6543 17.5988 97.6672 17.547Z"
              fill="#161616"
            />
            <path
              d="M136.524 24.1554H138.498C138.55 24.1554 138.589 24.1036 138.576 24.0518L134.497 9.0467C134.484 9.00783 134.458 8.99487 134.419 8.99487H133.666H132.341H131.587C131.548 8.99487 131.522 9.02079 131.509 9.0467L127.43 24.0518C127.417 24.1036 127.456 24.1554 127.508 24.1554H129.483C129.522 24.1554 129.548 24.1295 129.561 24.1036L130.743 19.7368C130.756 19.698 130.782 19.685 130.821 19.685H135.186C135.225 19.685 135.251 19.7109 135.264 19.7368L136.446 24.1036C136.459 24.1295 136.485 24.1554 136.524 24.1554ZM131.34 17.547L132.925 11.703C132.951 11.6253 133.055 11.6253 133.081 11.703L134.666 17.547C134.679 17.5988 134.64 17.6506 134.588 17.6506H131.418C131.366 17.6506 131.327 17.5988 131.34 17.547Z"
              fill="#161616"
            />
            <path
              d="M67.216 21.9398V17.3009C67.216 17.2621 67.255 17.2232 67.294 17.2232H73.075C73.114 17.2232 73.153 17.1843 73.153 17.1454V15.2795C73.153 15.2407 73.114 15.2018 73.075 15.2018H67.294C67.255 15.2018 67.216 15.1629 67.216 15.124V11.159C67.216 11.1201 67.255 11.0812 67.294 11.0812H73.8675C73.9065 11.0812 73.9455 11.0423 73.9455 11.0035V9.13756C73.9455 9.09869 73.9065 9.05981 73.8675 9.05981H67.216H64.9686C64.9296 9.05981 64.8906 9.09869 64.8906 9.13756V11.0812V15.2147V17.2362V22.0305V24.0778C64.8906 24.1167 64.9296 24.1556 64.9686 24.1556H67.216H74.1403C74.1793 24.1556 74.2183 24.1167 74.2183 24.0778V22.1083C74.2183 22.0694 74.1793 22.0305 74.1403 22.0305H67.281C67.242 22.0176 67.216 21.9916 67.216 21.9398Z"
              fill="#161616"
            />
            <path
              d="M171.08 24.026L163.571 16.2902C163.545 16.2643 163.545 16.2125 163.571 16.1866L170.327 9.18939C170.379 9.13756 170.34 9.05981 170.275 9.05981H167.508C167.482 9.05981 167.469 9.07277 167.456 9.08573L161.727 15.0204C161.675 15.0722 161.597 15.0333 161.597 14.9685V9.13756C161.597 9.09869 161.558 9.05981 161.519 9.05981H159.349C159.31 9.05981 159.271 9.09869 159.271 9.13756V24.0908C159.271 24.1297 159.31 24.1686 159.349 24.1686H161.519C161.558 24.1686 161.597 24.1297 161.597 24.0908V17.5083C161.597 17.4435 161.688 17.4046 161.727 17.4564L168.222 24.1426C168.235 24.1556 168.261 24.1686 168.274 24.1686H171.041C171.093 24.1556 171.132 24.0649 171.08 24.026Z"
              fill="#161616"
            />
            <path
              d="M32.9583 1L19.8242 10.7183L22.2666 4.99099L32.9583 1Z"
              fill="#E17726"
              stroke="#E17726"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.66284 1L15.68 10.809L13.3546 4.99098L2.66284 1Z"
              fill="#E27625"
              stroke="#E27625"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.2292 23.5334L24.7346 28.872L32.2175 30.9323L34.3611 23.6501L28.2292 23.5334Z"
              fill="#E27625"
              stroke="#E27625"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.27271 23.6501L3.40325 30.9323L10.8732 28.872L7.39154 23.5334L1.27271 23.6501Z"
              fill="#E27625"
              stroke="#E27625"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4704 14.5149L8.39185 17.6507L15.7968 17.9876L15.55 10.0186L10.4704 14.5149Z"
              fill="#E27625"
              stroke="#E27625"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.1503 14.515L19.9929 9.92798L19.824 17.9877L27.2289 17.6508L25.1503 14.515Z"
              fill="#E27625"
              stroke="#E27625"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8733 28.872L15.3552 26.7081L11.4969 23.7019L10.8733 28.872Z"
              fill="#E27625"
              stroke="#E27625"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.2659 26.7081L24.7348 28.872L24.1242 23.7019L20.2659 26.7081Z"
              fill="#E27625"
              stroke="#E27625"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.7348 28.8722L20.2659 26.7083L20.6296 29.6108L20.5906 30.8418L24.7348 28.8722Z"
              fill="#D5BFB2"
              stroke="#D5BFB2"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8733 28.8722L15.0305 30.8418L15.0045 29.6108L15.3552 26.7083L10.8733 28.8722Z"
              fill="#D5BFB2"
              stroke="#D5BFB2"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.1083 21.7842L11.3928 20.6958L14.017 19.4907L15.1083 21.7842Z"
              fill="#233447"
              stroke="#233447"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5127 21.7842L21.604 19.4907L24.2412 20.6958L20.5127 21.7842Z"
              fill="#233447"
              stroke="#233447"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8732 28.872L11.5228 23.5334L7.3916 23.6501L10.8732 28.872Z"
              fill="#CC6228"
              stroke="#CC6228"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.0981 23.5334L24.7347 28.872L28.2293 23.6501L24.0981 23.5334Z"
              fill="#CC6228"
              stroke="#CC6228"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.2289 17.6506L19.824 17.9875L20.5125 21.7842L21.6038 19.4906L24.241 20.6957L27.2289 17.6506Z"
              fill="#CC6228"
              stroke="#CC6228"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3928 20.6957L14.017 19.4906L15.1083 21.7842L15.7968 17.9875L8.39185 17.6506L11.3928 20.6957Z"
              fill="#CC6228"
              stroke="#CC6228"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.39209 17.6506L11.497 23.7019L11.393 20.6957L8.39209 17.6506Z"
              fill="#E27525"
              stroke="#E27525"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.2412 20.6957L24.1243 23.7019L27.2292 17.6506L24.2412 20.6957Z"
              fill="#E27525"
              stroke="#E27525"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.7972 17.9875L15.1086 21.7842L15.979 26.2675L16.1739 20.3588L15.7972 17.9875Z"
              fill="#E27525"
              stroke="#E27525"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.8242 17.9875L19.4604 20.3459L19.6423 26.2675L20.5127 21.7842L19.8242 17.9875Z"
              fill="#E27525"
              stroke="#E27525"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5127 21.7843L19.6423 26.2676L20.2659 26.7082L24.1243 23.702L24.2412 20.6958L20.5127 21.7843Z"
              fill="#F5841F"
              stroke="#F5841F"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3928 20.6958L11.4968 23.702L15.3551 26.7082L15.9787 26.2676L15.1083 21.7843L11.3928 20.6958Z"
              fill="#F5841F"
              stroke="#F5841F"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5907 30.8417L20.6296 29.6107L20.2919 29.3256H15.3293L15.0045 29.6107L15.0305 30.8417L10.8733 28.8721L12.3283 30.0642L15.2773 32.0986H20.3308L23.2928 30.0642L24.7348 28.8721L20.5907 30.8417Z"
              fill="#C0AC9D"
              stroke="#C0AC9D"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.2658 26.7081L19.6422 26.2676H15.9787L15.3552 26.7081L15.0044 29.6107L15.3292 29.3256H20.2918L20.6296 29.6107L20.2658 26.7081Z"
              fill="#161616"
              stroke="#161616"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.5168 11.3532L34.6211 5.98873L32.9582 1L20.2659 10.3944L25.1505 14.5149L32.0488 16.5234L33.5688 14.7482L32.9063 14.2687L33.9585 13.3099L33.1531 12.6879L34.2054 11.8845L33.5168 11.3532Z"
              fill="#763E1A"
              stroke="#763E1A"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 5.98873L2.11724 11.3532L1.40273 11.8845L2.468 12.6879L1.66255 13.3099L2.71483 14.2687L2.05228 14.7482L3.57225 16.5234L10.4706 14.5149L15.3552 10.3944L2.66287 1L1 5.98873Z"
              fill="#763E1A"
              stroke="#763E1A"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32.0489 16.5233L25.1506 14.5149L27.2292 17.6507L24.1243 23.7019L28.2295 23.6501H34.3613L32.0489 16.5233Z"
              fill="#F5841F"
              stroke="#F5841F"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4704 14.5149L3.57214 16.5233L1.27271 23.6501H7.39154L11.4967 23.7019L8.39186 17.6507L10.4704 14.5149Z"
              fill="#F5841F"
              stroke="#F5841F"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.8241 17.9876L20.2658 10.3943L22.2664 4.99097H13.3545L15.3551 10.3943L15.7968 17.9876L15.9657 20.3718L15.9787 26.2676H19.6422L19.6552 20.3718L19.8241 17.9876Z"
              fill="#F5841F"
              stroke="#F5841F"
              stroke-width="0.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {/* 로그인 버튼 */}
          <button
            type="button"
            className="animate-bounce border border-text-white-300 text-text-white-300 rounded-md px-4 py-2 mt-4 transition duration-500 ease select-none hover:text-white hover:bg-blue-300 hover:border-blue-300 focus:outline-none focus:shadow-outline"
            onClick={this.loginButtonForMetaMask}
          >
            <div className="flex flex-row flex-nowrap align-middle justify-center">
              <span className="font-eng-main-font font-semibold">
                MetaMask 로그인
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
          </button>
        </div>
        {/* 배경 이미지 */}
        <div className="absolute top-0 left-0 h-full">
          <img
            className="transform scale-150 object-cover w-screen h-full filter"
            src={backgrundImage}
            alt="MainIntroIMG"
          ></img>
        </div>
      </div>
    );
  }
}