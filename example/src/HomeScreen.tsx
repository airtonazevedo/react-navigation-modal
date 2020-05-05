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
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';


const App: React.FC = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ccc' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Default')} style={styles.btn}>
        <Text>Default modal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Form')}>
        <Text>Form modal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Custom')}>
        <Text>Custom modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '80%',
    padding: 20,
    backgroundColor: '#AADDFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
});

export default App;
