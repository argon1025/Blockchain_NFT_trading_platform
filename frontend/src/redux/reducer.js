import { store } from "./store";

const reducer = (state = store, action) => {
  console.log(state);
  console.log(action);

  // 액션 처리
  switch (action.type) {
    // 지갑 주소 변경 이벤트 처리
    case "SET_ADDRESS":
      return { ...state, ADDRESS: action.size };
    case "SET_ERROR":
      return {
        ...state,
        ERROR: true,
        ERROR_MESSAGE: action.size.ERROR_MESSAGE,
        ERROR_CODE: action.size.ERROR_CODE,
      };
    case "SET_NONCE":
      return {
        ...state,
        NONCE: action.size,
      };
    case "SET_USER_INFO":
      return {
        ...state,
        ID: action.size.ID,
        NAME: action.size.NAME,
      };
    // NFT 디테일 정보 요청시
    case "SET_NFT_DETAIL_DATA":
      return {
        ...state,
        NFT_DETAIL_DATA: action.size,
        NFT_DETAIL_MODAL: true,
      };
    //NFT 리스트 요청시
    case "SET_MY_WALLET_LIST":
      return { ...state, MY_WALLET_LIST: action.size };
    // ERROR 모달 닫을시
    case "SET_ERROR_MODAL_CLOSE":
      return { ...state, ERROR: false };
    // NFT 생성 모달 열시
    case "SET_NFT_CREATE_MODAL_OPEN":
      return { ...state, NFT_CREATE_MODAL: true };
    // NFT 생성 모달 닫을시
    case "SET_NFT_CREATE_MODAL_CLOSE":
      return { ...state, NFT_CREATE_MODAL: false };
    default:
      return state;
  }
};
export default reducer;
