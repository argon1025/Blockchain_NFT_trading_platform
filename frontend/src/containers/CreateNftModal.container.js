import { CreateNftModal } from "../components";
import { connect } from "react-redux";
import * as ApiService from "../actions/ApiCall.action";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
    LOGIN: state.LOGIN,
    ID: state.ID,
    ADDRESS: state.ADDRESS,
    NAME: state.NAME,
    MY_WALLET_LIST: state.MY_WALLET_LIST,
    NFT_CREATE_MODAL: state.NFT_CREATE_MODAL,
    ERROR: state.ERROR,
    ERROR_MESSAGE: state.ERROR_MESSAGE,
    NFT_DETAIL_MODAL: state.NFT_DETAIL_MODAL,
    NFT_DETAIL_DATA: state.NFT_DETAIL_DATA,
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    closeCreateNftModal: () => {
      dispatch({ type: "SET_NFT_CREATE_MODAL_CLOSE" });
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(CreateNftModal);
