import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import FormSubmission from '../components/FormSubmission/FormSubmission';
import Modal from '../components/UI/Modals/DvirSummeryModal';
import AddTrailerModal from '../components/UI/Modals/AddTrailerModal';
import FormIntroSection from '../components/Form/FormIntroSection';

const IndexScreen = ({ navigation, truckProperties, trailerModal }) => {
  const cleanUpHandler = () => {
    submitForm();
    setModalShow(false);
    setCheckBoxValue(false);
    setClicked(false);
    navigation.navigate('Index');
  };

  const submitForm = () => {
    alert('submit');
  };
  
  const [modalShow, setModalShow] = useState(true);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Pre-Trip</Text>
        {/* צריך להגדיר dvirstatus נעלאבוקקק  */}
        <FormIntroSection
          truckProperties={truckProperties}
          dvirStatus={false}
        />
        <Form />
        <FormSubmission
          clickedHandler={setClicked}
          clicked={clicked}
          modalshowHandler={setModalShow}
          checkboxVal={checkBoxValue}
          setCheckBoxHandler={setCheckBoxValue}
        />
        {modalShow && <Modal modalshowHandler={setModalShow} clean={cleanUpHandler} />}
        {trailerModal && <AddTrailerModal />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 8,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  }
});

const mapStateToProps = (state) => {
  return {
    imageBase64: state.form.truckImage,
    trailerModal: state.appUI.trailerModalShow,
    num: state.form.trailer1.trailerNumber
  };
};

export default connect(mapStateToProps)(IndexScreen);
