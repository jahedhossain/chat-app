/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import WrapperPage from './src/wrapperPage';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
       <WrapperPage/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
