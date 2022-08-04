import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {User} from '../model';
import {Colors} from '../styles/Color';
import {UserManager} from '../manager/UserManager';
import {PostsManager} from './../manager/PostsManager';
import {useSnapshot} from 'valtio';
import {UserState} from './../store/Index';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
interface UserdataType {
  userData: {
    item: User;
  };
}

export type RootStackParamList = {
  UserItem: undefined;
  UserInfo: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserItem'>;

function UserItem({userData}: UserdataType) {
  const navigation = useNavigation<NavigationProp>();

  const {user} = useSnapshot(UserState);
  const IsUserSelected = userData.item.id === user?.id;

  const selectUserHandler = async () => {
    await UserManager.getUserById(userData.item.id);
    await PostsManager.getPostsById(userData);
    navigation.navigate('UserInfo');
  };
  return (
    <View style={styles.container}>
      <Text
        style={[IsUserSelected ? styles.textChangeStyle : styles.textConatiner]}
        onPress={selectUserHandler}>
        <View style={styles.iconConatiner}>
          <Icon name="ios-person" size={30} color="#4F8EF7" />
        </View>

        <View style={styles.userNameContainer}>
          <Text style={styles.UserName}>{userData.item.name}</Text>
        </View>
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
    paddingRight: 50,
    elevation: 14,
    color: Colors.select.primary500,
    fontSize: 15,
    backgroundColor: Colors.select.primary100,
  },
  textChangeStyle: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    elevation: 14,
    color: '#ffffff',
    fontSize: 20,
    backgroundColor: Colors.select.primary100,
  },

  iconConatiner: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 5,
  },
  userNameContainer: {
    paddingLeft: 15,
    paddingBottom: 8,
  },
  UserName: {
    fontSize: 20,
    color: Colors.select.primary500,
  },
});

export default UserItem;
