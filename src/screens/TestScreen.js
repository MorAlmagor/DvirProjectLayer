/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Text,
  AsyncStorage
} from 'react-native';
// import axios from 'axios';
import { connect } from 'react-redux';

const TestScreen = ({
  lastPreTripObj,
}) => {
  //

  // AsyncStorage.getItem('userData')
  //   .then((userData) => {
  //     const test = JSON.parse(userData);
  //     const blaa = test.token;
  //     post(blaa);
  //   });

  // const reports = {
  //   ups: {
  //     M34F45: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     },
  //     M34DE5: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     },
  //     N34F45: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     },
  //     N3R445: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     },
  //     NDFF45: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     }
  //   },
  //   cita: {
  //     MZZ545: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     },
  //     N34FAX: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     },
  //     N3V445: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     },
  //     NDF145: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     },
  //     ZZN345: {
  //       OpenForm: false,
  //       closeForms: {
  //         doNotDelete: 'doNotDelete'
  //       }
  //     }
  //   }
  // };

  // const users = {
  //   n9y8lXzORyMQaUdhlPSGtFCgHF63: 'cita',
  //   z9T4blDxNpSzpDQpHDMYkHkx2ld2: 'cita',
  //   XmZla6C110ejpBAxlS3b30mYDYR2: 'ups',
  //   RlPSssz2OGeOWm5A2x3drGRGAqi2: 'ups'
  // };

  // const post = (token) => {
  //   console.log(token);
  //   axios.post(`https://dvir-project-server.firebaseio.com/reports.json?auth=${token}`, reports)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };


  // const get = async (token) => {
  //   await axios.get(`https://dvir-project-server.firebaseio.com/reports/-LzYKay-KcRRQSMa1D1p/ups.json?auth=${token}`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  // const del = () => {
  //   axios.delete('https://react-burger-app-9b9c5.firebaseio.com/-LyVgH73c_k6vdM0Qgvh.json')
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  // const put = async () => {
  //   const newDATA = {
  //     name: 'avi',
  //     lastName: 'shami',
  //     age: '32',
  //     car: 'volvo'
  //   };
  //   await axios.put('https://react-burger-app-9b9c5.firebaseio.com/users.json', newDATA)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };
  const BullShitFunctionName = () => {
    console.log(lastPreTripObj);
    const truckReportData = lastPreTripObj;
    const openForm = truckReportData.OpenForm;
    const date = new Date();
    if (typeof truckReportData === 'object') {
      const closeFormDateKeys = Object.keys(truckReportData.closeForms);
      if (closeFormDateKeys[0] === 'doNotDelete') {
        truckReportData.OpenForm = false;
        truckReportData.closeForms[date] = {
          preTripForm: openForm,
          postTripForm: 'DATAtoSERVER'
        };
        console.log(truckReportData);

      }
    }
  };
  
  
  
  
  
  
  
  
  // const test = new Object;
  const test = {
    a: 1,
    b: 2,
    c: 3
  };
  
  
  // const test1 = new Object;
  // test1[date] = {
  //   preTripForm: openForm,
  //   postTripForm: 'DATAtoSERVER'
  // };
  
  const testKeys = Object.keys(test);
  testKeys.push(date);
  
  const testval = Object.values(test);
  testval.push({
    preTripForm: openForm,
    postTripForm: 'DATAtoSERVER'
  });
  const ans = new Object;
  for (let i = 0; i < testKeys.length; i += 1) {
    ans[testKeys[i]] = testval[i];
  }
  // console.log(ans);
  
  
  
  
  
  
  // ///////////////// code ////////////////////
  // truckReportData.OpenForm = false;
  
  // const test = new Object;
  // test[date] = {
  //   preTripForm: openForm,
  //   postTripForm: 'DATAtoSERVER'
  // };
  
  // truckReportData.closeForms[`${date}`] = {
  //   a: 1,
  //   b: 2
  // };
  // חצי שנה אחורה
  // const day180 = 86400000 * 180;
  //   const current = new Date();
  //   const sixMounthAgoDate = new Date(current.getTime() - day180);
  //   sixMounthAgoDate.toLocaleDateString();
  //   console.log(sixMounthAgoDate);
  
  


  
  BullShitFunctionName();
  return (
    <View>
      <Text>smvsmv</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    lastPreTripObj: state.report.lastReport

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveData: (DATA) => dispatch(setData(DATA))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);


// const blaa = () => {
//   AsyncStorage.getItem('firstTimeUser')
//     .then((firstTimeUser) => {
//       console.log(firstTimeUser);
//     });
// };

// const blaa = async () => {
//   const firstTimeUser = await AsyncStorage.getItem('firstTimeUser');
//   console.log(firstTimeUser);
// };