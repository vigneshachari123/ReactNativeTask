import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {User} from '../model';
import {Colors} from '../styles/Color';
import {UserManager} from '../manager/UserManager';
import {PostsManager} from './../manager/PostsManager';
import {useSnapshot} from 'valtio';
import {UserState} from './../store/Index';

interface UserdataType {
  userData: {
    item: User;
  };
}

function UserItem({userData}: UserdataType) {
  const {user} = useSnapshot(UserState);
  const IsUserSelected = userData.item.id === user?.id;
  const selectUserHandler = async () => {
    await UserManager.getUserById(userData.item.id);
    await PostsManager.getPostsById(userData.item.id);
  };
  return (
    <View style={styles.container}>
      <Text
        style={[
          IsUserSelected ? styles.textChangeContainer : styles.textConatiner,
        ]}
        onPress={selectUserHandler}>
        {userData.item.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  textConatiner: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    elevation: 14,
    color: Colors.select.primary500,
    fontSize: 15,
    backgroundColor: Colors.select.primary100,
  },
  textChangeContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    elevation: 14,
    color: '#ffffff',
    fontSize: 15,
    backgroundColor: Colors.select.primary500,
  },
});

export default UserItem;
