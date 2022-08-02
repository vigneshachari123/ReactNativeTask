import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSnapshot} from 'valtio';
import {UserManager} from '../manager/UserManager';
import {User} from '../model';
import {UserState} from './../store/Index';
import UserItem from './UserItems';

function UserList() {
  const {users} = useSnapshot(UserState);
  useEffect(() => {
    LoadAllUsers();
    console.log(`use effect`);
  }, []);

  const LoadAllUsers = async () => {
    await UserManager.getAllUsers();
    console.log(`load all `);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item, index) => String(index)}
        renderItem={userData => <UserItem userData={userData} />}
        //renderItem={itemData => <Text>{itemData.item.name}</Text>}
      />
    </View>
    // <View>
    //   <Text>{users.length}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#E2E71A',
  },
});

export default UserList;
