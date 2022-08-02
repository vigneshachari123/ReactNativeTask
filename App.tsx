import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {useSnapshot} from 'valtio';
import HomeScreen from './screens/HomeScreen';
import {UserState} from './store/Index';
import {Colors} from './styles/Color';

function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.select.primary200,
  },
});

export default App;
