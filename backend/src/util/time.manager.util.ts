// 오늘 날자를 반환
export const getToDay = (): string => {
  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일

  return `${year}/${month}/${date}`;
};
