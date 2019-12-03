import React from 'react';
import {
  View,
  Switch,
} from 'react-native';
import { connect } from 'react-redux';
import { changeCheckTruckStatus, changeCheckTrailer1Status, changeCheckTrailer2Status } from '../../store/actions/formActions';

const CheckSwitch = ({
  SectionTitle,
  checkStatus,
  onChangeTruckStatus,
  truckStatus,
  onChangeTrailer1Status,
  trailer1,
  onChangeTrailer2Status,
  trailer2
}) => {
  const dispatchOwner = SectionTitle;
  if (dispatchOwner === 'Trailer NO.1') {
    return (
      <View>

        <Switch
          onValueChange={(value) => onChangeTrailer1Status(checkStatus.keyId, value)}
          value={trailer1[checkStatus.keyId].status}
          trackColor={{ false: 'red', true: 'green' }}
        />
      </View>
    );
  }
  if (dispatchOwner === 'Trailer NO.2') {
    return (
      <View>
        <Switch
          onValueChange={(value) => onChangeTrailer2Status(checkStatus.keyId, value)}
          value={trailer2[checkStatus.keyId].status}
          trackColor={{ false: 'red', true: 'green' }}
        />
      </View>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <View>
        <Switch
          onValueChange={(value) => onChangeTruckStatus(checkStatus.keyId, value)}
          value={truckStatus[checkStatus.keyId].status}
          trackColor={{ false: 'red', true: 'green' }}
        />
      </View>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    truckStatus: state.form.truckStatus,
    trailer1: state.form.trailer1,
    trailer2: state.form.trailer2
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTruckStatus: (keyId, value) => dispatch(changeCheckTruckStatus(keyId, value)),
    onChangeTrailer1Status: (keyId, value) => dispatch(changeCheckTrailer1Status(keyId, value)),
    onChangeTrailer2Status: (keyId, value) => dispatch(changeCheckTrailer2Status(keyId, value)),

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CheckSwitch);