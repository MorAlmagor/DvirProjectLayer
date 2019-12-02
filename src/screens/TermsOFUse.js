import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native';
import MainButton from '../components/UI/Buttons/MainButton';
import Colors from '../Colors/Colors';

const TermsOFUse = (props) => {
  return (

    <ScrollView>
      <View>
        <Text style={styles.title}>Terms OF Use</Text>
        <View style={styles.termsView}>
          <Text>Lorem ipsum dolor sit amet, consectetur adip,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            , sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>re magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul
            lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol
            or in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari
            atur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Text>
          <Text> consectetur adipiscing elit, sed do eiusm
            od tempor incididunt ut labore et dolore magna aliqua. Ut en
            im ad minim veniam, quis nostrud exercitation ulla
            mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d
            olor in reprehenderit in voluptate velit esse cillum dolo
            re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>ipsum dolor sit amet, consectetur adipiscing elit, sed
             do eiusmod tempor incididunt ut labore et dolore mag
             na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur
              e dolor in reprehenderit in voluptate velit esse cillum dolore e
              u fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, s
              unt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>dolor sit amet, consectetur adipiscing elit, sed do eiu
            smod tempor incididunt ut labore et dolore magna aliqua. Ut en
            im ad minim veniam, quis nostrud exercitation ullamco laboris nisi
             ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
             derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex
             cepteur sint occaecat cupidatat non proident, sunt in culpa qui offici
             a deserunt mollit anim id est laborum.
          </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
            iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
            m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm
            odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill
            um dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide
            nt, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>Lt amet, consectetur adipiscing elit, se
              d do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq
              uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu
              r sint occaecat cupidatat non proident, sunt in culpa qui officia de
              erunt mollit anim id est laborum.
          </Text>
          <MainButton onpress={() => props.navigation.goBack()}>Go Back</MainButton>
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginHorizontal: '4%',
    paddingBottom: 4,
    paddingTop: 7,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  termsView: {
    fontSize: 14,
    justifyContent: 'space-around',
    marginHorizontal: '4%',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  text: {
    marginVertical: 30,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  }

});


export default TermsOFUse;
