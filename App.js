/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Main from './src/index';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
       <Main/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
