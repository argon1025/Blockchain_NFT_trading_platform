// 지갑 주소를 변경하는 액션
export const currentWalletChange =
  (address = "0x000000000000") =>
  async (dispatch, getState) => {
    dispatch({ type: "SET_ADDRESS", size: address });
  };
