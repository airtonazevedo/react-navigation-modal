/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from 'react-native';
//import Modal2 from './test';
import Modal from 'react-navigation-modal'
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export const DefaultModal = () => {
  return (
    <Modal>
      <Text>Hello</Text>
    </Modal>
  );
};

export const FormModal = () => {

  const navigation = useNavigation()
  return (
    <Modal cancelable={false}  style={{ width: '80%' }}>
      <Text>Email</Text>
      <TextInput style={styles.input} />
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Home')}>
          <Text>Submit</Text>
        </TouchableOpacity>

      </View>
    </Modal>
  );
};

export const CustomModal = () => {
  return (
    <Modal opacity={0} style={{ backgroundColor: 'red', top: '50%', borderRadius: 50, height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '40%',
    padding: 16,
    backgroundColor: '#AADDFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 20
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    width: '100%',
    height: 40
  }
});

