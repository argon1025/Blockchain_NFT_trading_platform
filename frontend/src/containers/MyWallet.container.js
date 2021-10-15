import { MyWalletComponent } from "../components";
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
    CONTRACT_ADDRESS: state.CONTRACT_ADDRESS,
    CONTRACT_ABI: state.CONTRACT_ABI,
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    getWalletList: (memberID) => {
      dispatch(ApiService.getWalletList(memberID));
    },
    getNftDetail: (itemID) => {
      dispatch(ApiService.getNftDetail(itemID));
    },
    createNft: (title, content) => {
      dispatch(ApiService.createNft(title, content));
    },
    openCreateNftModal: () => {
      dispatch({ type: "SET_NFT_CREATE_MODAL_OPEN" });
    },
    closeCreateNftModal: () => {
      dispatch({ type: "SET_NFT_CREATE_MODAL_CLOSE" });
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(MyWalletComponent);
