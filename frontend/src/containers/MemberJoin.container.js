import { MemberJoinComponent } from "../components";
import { connect } from "react-redux";
import { currentWalletChange } from "../actions/currentWalletChange.Action";
import { getNonce } from "../actions/ApiCall.action";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
    LOGIN: state.LOGIN,
    ADDRESS: state.ADDRESS,
    NAME: state.NAME,
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    currentWalletChange: (address) => {
      dispatch(currentWalletChange(address));
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(MemberJoinComponent);
