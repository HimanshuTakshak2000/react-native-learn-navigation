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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {


  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Login' screenOptions={
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

        <Stack.Screen name='Login' component={LoginScreen} initialParams={{defaultText:'this is the initial param send by login screen', heading:'Initial Param'}} />

        <Stack.Screen name='Home' component={Home} initialParams={{itemId: 50, otherParam: `New Update`,}} options={

          {
            title:"Home",
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

const LoginScreen = ({navigation}: any)=>{
  // console.log('wwe',prop.navigation);
  
  return(
    <View style={style.homeContainer}>
      <Text style ={style.homeContainerText}>Login Screen</Text>

      <TouchableOpacity style={style.btn} onPress={()=> navigation.navigate('Home', {
            itemId: 69,
            otherParam: `anything you want!!!!!\nYou can pass here.`,
          })}>
        <Text style={style.btnText}>Go to Home</Text>
      </TouchableOpacity>

    </View>

  )
}

const Home = (prop: any)=>{
  const {itemId, otherParam} = prop.route.params;
  const [yourName, setYourName] = useState('');
  const [yourRollNo, setYourRollNo] = useState('');

  const onClickHandler = ()=>{
    prop.navigation.navigate('Detail',{yourName, yourRollNo}); 
    setYourName('');
    setYourRollNo('');
  }

  return(
    <View style={style.homeContainer}>
      <Text style ={style.homeContainerText}>Home Screen</Text>

      <View style={{margin:10, backgroundColor:'white', padding:10, borderRadius:5}}>
        <Text style ={{color:'black', fontSize:15}}>These are the params from Login Screen(these are inital param after firstt render) :- </Text>
        <Text style ={{color:'black', fontSize:15}}>ItemId :-- {itemId}</Text>
        <Text style ={{color:'black', fontSize:15}}>otherParam :-- {otherParam}</Text>
      </View>

      <TextInput placeholder='Enter Your Name' value={yourName} style={{backgroundColor:'brown', margin:10, width:310, borderRadius:10}} onChangeText={(text)=> setYourName(text)} />

      <TextInput placeholder='Enter Your Roll No' value={yourRollNo} style={{backgroundColor:'brown', margin:10, width:310, borderRadius:10}} onChangeText={(text)=> setYourRollNo(text)} />

      <TouchableOpacity style={style.btn} onPress={onClickHandler}>
        <Text style={style.btnText}>Go to Details</Text>
      </TouchableOpacity>

    </View>

  )
}


function DetailsScreen({navigation, route}: any){

  // console.log("route :- ",route);
  // console.log("route.params :- ",route.params);
  const {yourName, yourRollNo} = route.params;

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
      <Text style={{fontSize:30}}>Details Screen</Text>

      <View style={{margin:10, backgroundColor:'white', padding:10, borderRadius:5}}>
        <Text style ={{color:'black', fontSize:15}}>These are the params from Home Screen :- </Text>
        <Text style ={{color:'black', fontSize:15}}>Name :-- {yourName}</Text>
        <Text style ={{color:'black', fontSize:15}}>Roll No :-- {yourRollNo}</Text>
      </View>

      <TouchableOpacity style={style.btn} onPress={()=> navigation.navigate('Home')}>
        <Text style={style.btnText}>Go to Home</Text>
      </TouchableOpacity>

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
  },

  btn:{
    // borderWidth:3,
    // borderColor:'purple',
    marginTop:10,
    height:60,
    width:160,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'powderblue',
    borderRadius:10,
    padding:10
  },

  btnText:{
    color:'black',
  }
})

export default App;

/*
  Note :- 1) navigate and push accept an optional second argument to let you pass parameters to the route you are navigating to. For example: navigation.navigate('RouteName', { paramName: 'value' }).

  2) You can read the params through route.params inside a screen.

  3) You can update the screen's params with navigation.setParams.

  4) Initial params can be passed via the initialParams prop on Screen.

  5) Params should contain the minimal data required to show a screen, nothing more.

*/
