import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles/Color';
import UserList from '../features/UserList';
import UserDetails from '../features/UserDetails';
import PostScreen from '../features/PostScreen';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userListConatiner}>
        <UserList />
      </View>
      <View style={styles.leftContainer}>
        <UserDetails />
        <PostScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.select.primary200,
  },
  leftContainer: {
    flex: 1,
  },
  userListConatiner: {
    flex: 1,
  },
});

export default HomeScreen;
