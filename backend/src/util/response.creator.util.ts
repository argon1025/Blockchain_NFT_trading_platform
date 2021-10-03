export const responseCreatorUtil = (message: string, messageCode: string, data?: any) => {
  let response: { error: string; msg: string; msg_code: string; data?: any } = {
    error: 'false',
    msg: message,
    msg_code: messageCode,
  };
  if (!!data) {
    response = { ...response, ...data };
  }
  return response;
};
