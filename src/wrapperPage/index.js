import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function WrapperPage() {
  return (
    <>
      <View style={Wrapper.container}>
        <Text>Chats</Text>
        <Icon name="search1" size={20} color="#000" />
      </View>
    </>
  );
}

const Wrapper = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
});
