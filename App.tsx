/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {


  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'skyblue',


      }}>

        <Tab.Screen name='Home' component={Home} />

        <Tab.Screen name='Detail' component={Detail} options={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: 'red',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarBadge: 3 
        }} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}

const Home = ()=> {

  return (
    <View style = { style.screenContainer}>
      <Text style = { style.screenContainerText}>Home Screen</Text>
    </View>
  )

}

function Detail(){
  return (
    <View style = { style.screenContainer}>
      <Text style = { style.screenContainerText}>Detail Screen</Text>
    </View>
  )
}

const style = StyleSheet.create({

  screenContainer:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:'gray' 
  },

  screenContainerText:{
    fontSize:20,
  }
})

export default App;

/*
  Note :- 1) All the property of stack navigation and bottom tab nabigation are same.

  2) Only the difference between stack and bottom tab is :- 
    a) We use const Tab = createBottomTabNavigator(); in case of const Stack = createNativeStackNavigator(); for bottom tab.
    b) We use <Tab.Navigator > in case of <Stack.Navigator > for bottom tab.
    c) We use <Tab.Screen name='Home' component={Home} /> in case of <Stack.Screen name="Home" component={HomeScreen} /> for bottom tab.

*/
