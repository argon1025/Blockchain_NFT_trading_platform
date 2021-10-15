import Axios from "axios";

export const getNonce = (address) => async (dispatch, getState) => {
  const HOST_URL = `http://localhost:8080/auth/nonce/${address}`;

  try {
    const result = await Axios.get(HOST_URL);
    return result.data;
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      size: {
        ERROR_MESSAGE: "유저 정보를 불러오는데 실패했습니다",
        ERROR_CODE: "GET_NONCE_FAIL",
      },
    });
    return false;
  }
};

// 내 보유 NFT 조회
export const getWalletList = (memberID) => async (dispatch, getState) => {
  const HOST_URL = `http://localhost:8080/item/member/${memberID}`;

  try {
    const result = await Axios.get(HOST_URL, { withCredentials: true });
    dispatch({
      type: "SET_MY_WALLET_LIST",
      size: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      size: {
        ERROR_MESSAGE: "지갑 정보를 불러오는데 실패했습니다",
        ERROR_CODE: "GET_WALLET_LIST_FAIL",
      },
    });
  }
};

// NFT 상세정보 조회
export const getNftDetail = (itemID) => async (dispatch, getState) => {
  const HOST_URL = `http://localhost:8080/item/${itemID}`;

  try {
    const result = await Axios.get(HOST_URL, { withCredentials: true });
    dispatch({
      type: "SET_NFT_DETAIL_DATA",
      size: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      size: {
        ERROR_MESSAGE: "NFT 정보를 불러오는데 실패했습니다",
        ERROR_CODE: "GET_NFT_DETAIL_DATA_FAIL",
      },
    });
  }
};

// NFT 생성
export const createNft = (title, content) => async (dispatch, getState) => {
  const HOST_URL = `http://localhost:8080/item`;
  try {
    await Axios.post(
      `${HOST_URL}`,
      {
        title: `${title}`,
        content: `${content}`,
      },
      { withCredentials: true }
    );
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      size: {
        ERROR_MESSAGE: "NFT 정보를 등록하는데 실패했습니다",
        ERROR_CODE: "CREATE_NFT_FAIL",
      },
    });
  }
};
