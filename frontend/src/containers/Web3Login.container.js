import { Web3LoginComponent } from "../components";
import { connect } from "react-redux";
import { currentWalletChange } from "../actions/currentWalletChange.Action";
import { getNonce } from "../actions/ApiCall.action";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
    LOGIN: state.LOGIN,
    ADDRESS: state.ADDRESS,
    NAME: state.NAME,
    NONCE: state.NONCE,
    ID: state.ID,
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    currentWalletChange: (address) => {
      dispatch(currentWalletChange(address));
    },
    setNonce: (nonce) => {
      dispatch({ type: "SET_NONCE", size: nonce });
    },
    setUserInfo: (memberID, memberName) => {
      dispatch({
        type: "SET_USER_INFO",
        size: { ID: memberID, NAME: memberName },
      });
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(Web3LoginComponent);
