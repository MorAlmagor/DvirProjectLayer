export const getSummery = (tempData) => {
  const tempDataArreyKeys = Object.keys(tempData);
  const tempFaults = [];
  let tempScore = 0;
  // const odds = [];
  for (let i = 1; i < tempDataArreyKeys.length; i += 1) {
    if (tempData[tempDataArreyKeys[i]].status === false) {
      tempFaults.push(tempData[tempDataArreyKeys[i]].keyId);
      tempScore += tempData[tempDataArreyKeys[i]].Score;
    }
  }
  const ans = {
    faultsArr: tempFaults,
    score: tempScore,
    odds: ''
  };
  return ans;
};