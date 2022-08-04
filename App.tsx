import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from './styles/Color';
import PostScreen from './features/PostScreen';
import UserDetails from './features/UserDetails';
import UserList from './features/UserList';
import UserInfo from './screens/UserInfoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="UserInfo"
            component={UserInfo}
            options={{
              title: 'User Informations',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
              headerStyle: {
                backgroundColor: Colors.select.primary100,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.select.primary200,
  },
});

export default App;
