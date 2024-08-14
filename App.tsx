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
  TouchableOpacity
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

        <Stack.Screen name='Home' component={Home} options={

          {
            title:"Name Of Title i.e \' Home \'",
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

        <Stack.Screen name='Login' component={LoginScreen} />

        <Stack.Screen name='Detail' component={DetailsScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const Home = (prop: any)=>{
  // console.log('wwe',prop.navigation);
  
  return(
    <View style={style.homeContainer}>
      <Text style ={style.homeContainerText}>Home Screen</Text>

      <TouchableOpacity style={style.btn} onPress={()=> (prop.navigation).navigate('Detail')}>
        <Text style={style.btnText}>Go to Details with navigate function</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> (prop.navigation).push('Detail')}>
        <Text style={style.btnText}>Go to Details with push function</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> (prop.navigation).push('Home')}>
        <Text style={style.btnText}>Go to Home again with push function</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> (prop.navigation).goBack()}>
        <Text style={style.btnText}>GoBack to Login with goBack function</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> (prop.navigation).navigate('Login')}>
        <Text style={style.btnText}>GoBack to Login with navigate function</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> (prop.navigation).popToTop()}>
        <Text style={style.btnText}>GoBack to Login with popToTop function</Text> 
      </TouchableOpacity>

    </View>

  )
}

// const Home = ({navigation}: any)=>{
//   return(
//     <View style={style.homeContainer}>
//       <Text style ={style.homeContainerText}>Home Screen</Text>
//       <TouchableOpacity style={style.btn} onPress={()=> navigation.push('Home')}>
//         <Text style={style.btnText}>Go to home again....</Text>
//       </TouchableOpacity>
//     </View>

//   )
// }

function LoginScreen(props : any){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
      <Text style={{fontSize:30}}>Login Screen</Text>
      <TouchableOpacity style={style.btn} onPress={()=> props.navigation.navigate('Home')}>
        <Text style={style.btnText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen(props : any){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
      <Text style={{fontSize:30}}>Details Screen</Text>

      <TouchableOpacity style={style.btn} onPress={()=> props.navigation.navigate('Login')}>
        <Text style={style.btnText}>Go to Login with naviagte function</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> props.navigation.push('Login')}>
        <Text style={style.btnText}>Go to Home with push function</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> props.navigation.navigate('Home')}>
        <Text style={style.btnText}>Go to Home with naviagte function</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> (props.navigation).goBack()}>
        <Text style={style.btnText}>GoBack to Home with goBack function</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=> (props.navigation).popToTop()}>
        <Text style={style.btnText}>GoBack to Login with popToTop function</Text>
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
  Note :- 1) navigation.navigate('RouteName') pushes a new route to the native stack navigator if it's not already in the stack, otherwise it jumps to that screen. When you call navigate it first tries to find an existing route with that name,\ and only pushes a new route if there isn't yet one on the stack.

  2) We can call navigation.push('RouteName') as many times as we like and it will continue pushing routes. Each time you call push we add a new route to the navigation stack.

  3) The header bar will automatically show a back button but you can programmatically go back by calling navigation.goBack(). This function only remove one screen . On Android, the hardware back button just works as expected.

  4) You can go back to an existing screen in the stack with navigation.navigate('RouteName'), and you can go back to the first screen in the stack with navigation.popToTop().

  5) The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

  6) We generally use navigation.navigate() function rather then naviagtion.push() function as naviagtion.push() function always push another route regardless of it's current route and your naviagtion.goBack() function will not work properly for naviagtion.push() function.

*/
