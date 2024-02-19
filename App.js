import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  useEffect(() => {
    alert('hello!');
  });

  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
