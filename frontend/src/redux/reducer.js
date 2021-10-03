import { store } from "./store";

const reducer = (state = store, action) => {
  console.log(state);
  console.log(action);

  // 액션 처리
  switch (action.type) {
    case "ServiceInformaion/SET_TEXT":
      return { ...state, TEST_VALUE: action.size };
    default:
      return state;
  }
};
export default reducer;
