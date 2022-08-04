import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostScreen from '../features/PostScreen';
import UserDetails from '../features/UserDetails';
import {Colors} from '../styles/Color';

function UserInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.UserDetailConatiner}>
        <UserDetails />
      </View>
      <View style={styles.PostScreenContainer}>
        <PostScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.select.primary200,
  },

  UserDetailConatiner: {
    marginTop: 15,
    marginHorizontal: 10,
  },

  PostScreenContainer: {
    marginTop: 15,
    marginHorizontal: 20,
  },
});

export default UserInfo;
