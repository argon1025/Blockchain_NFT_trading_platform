import Axios from "axios";

export const getNonce = (address) => async (dispatch, getState) => {
  const HOST_URL = `http://localhost/auth/nonce/${address}`;

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
