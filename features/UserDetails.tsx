import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSnapshot} from 'valtio';
import {UserState} from './../store/Index';
import {Colors} from './../styles/Color';

function UserDetails() {
  const {user} = useSnapshot(UserState);

  return (
    <View style={styeles.container}>
      <Text style={styeles.textContainer}>NAME :{user?.name}</Text>
      <Text style={styeles.textContainer}>EMAIL :{user?.email}</Text>
    </View>
  );
}

const styeles = StyleSheet.create({
  container: {
    marginTop: 23,
    padding: 8,
    backgroundColor: Colors.select.primary400,
    borderRadius: 10,
    elevation: 15,
  },
  textContainer: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
});

export default UserDetails;
