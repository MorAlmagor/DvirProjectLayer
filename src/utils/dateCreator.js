export const getStringDate = () => {
  const curDate = new Date();
  const day = curDate.getDate();
  const month = curDate.getMonth() + 1;
  const year = curDate.getFullYear();
  const dateString = `${day}/${month}/${year}`;

  return dateString;
};


export const getStringTime = () => {
  
};