import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// 초기 데이터 설정
export const store = {
  APP_VERSION: "0.2",
  NAME: "User",
  ADDRESS: "0x00000000000",
  LOGIN: false,
};

// 새로고침 상태 저장을 위한 redux-persist 설정
const persistConfig = {
  key: "root", // reducer Key
  storage, // 브라우저 로컬 스토리지에 저장
};

// persisConfig가 설정된 리듀서로 변경한다
const enhancedReducer = persistReducer(persistConfig, reducer);

// 비동기 액션 작업을 위한 ReduxThunk 연동
export default createStore(enhancedReducer, applyMiddleware(ReduxThunk));
