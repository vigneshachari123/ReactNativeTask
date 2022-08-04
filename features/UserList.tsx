import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSnapshot} from 'valtio';
import {UserManager} from '../manager/UserManager';
import {Colors} from '../styles/Color';
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.FlatListContainer}>
        <FlatList
          data={users}
          keyExtractor={(item, index) => String(index)}
          renderItem={userData => <UserItem userData={userData} />}
          //renderItem={itemData => <Text>{itemData.item.name}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.select.primary200,
  },

  FlatListContainer: {
    marginTop: 45,
    marginHorizontal: 15,
  },
});

export default UserList;
