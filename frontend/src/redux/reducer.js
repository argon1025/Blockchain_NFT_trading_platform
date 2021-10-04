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
    default:
      return state;
  }
};
export default reducer;
