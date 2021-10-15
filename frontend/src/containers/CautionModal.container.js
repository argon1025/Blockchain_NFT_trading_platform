import { CautionModal } from "../components";
import { connect } from "react-redux";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
    ERROR: state.ERROR,
    ERROR_MESSAGE: state.ERROR_MESSAGE,
    ERROR_CODE: state.ERROR_CODE,
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    closeErrorModal: () => {
      dispatch({
        type: "SET_ERROR_MODAL_CLOSE",
      });
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(CautionModal);
