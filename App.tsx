/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {


  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home' screenOptions={
        {
          headerStyle:{
            backgroundColor:'brown',
            
          },

          headerTitleStyle:{
            fontSize:20, 
            
          },
          headerTitleAlign:'center',
          headerTintColor:'skyblue',
          
        }
      }>
        <Stack.Screen name='Home' component={Home} options={

          {
            title:"Login",
            headerStyle:{
              backgroundColor:'skyblue',
                      
            },
          
            headerTitleStyle:{
              fontSize:25, 
                      
            },
            headerTitleAlign:'left',
            headerTintColor:'red',
                    
          }
        } />
        <Stack.Screen name='Detail' component={DetailsScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const Home = ()=>{
  return(
    <View style={style.homeContainer}>
      <Text style ={style.homeContainerText}>Home Screen</Text>
    </View>

  )
}

function DetailsScreen(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
      <Text style={{fontSize:30}}>Details Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  homeContainer:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor:'gray' 
  },

  homeContainerText:{
    fontSize:25,
    color:'orange',
  }
})

export default App;

/*
  Note :- 1) The component prop accepts component, not a render function. Don't pass an inline function (e.g. component={() => <HomeScreen />}), or your component will unmount and remount losing all state when the parent component re-renders.

  2) React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens.

  3) Stack.Navigator is a component that takes route configuration as its children with additional props for configuration and renders our content.

  4) Each Stack.Screen component takes a name prop which refers to the name of the route and component prop which specifies the component to render for the route. These are the 2 required props.

  5) To specify what the initial route in a stack is, provide an initialRouteName as the prop for the navigator.

  6) To specify screen-specific options, we can pass an options prop to Stack.Screen and for common options, we can pass screenOptions to Stack.Navigator.

*/
