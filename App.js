import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import writeStoryScreen from './screens/writeStoryScreen'
import readStoryScreen from './screens/readStoryScreen'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  writeStory : {screen : writeStoryScreen},
  readStory : {screen : readStoryScreen},
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ()=>{
      const RouteName = navigation.state.routeName;
      if(routeName === "writeStory"){
        return (
          <Image source={require('./assets/write.png')}
          style={{width:40, height:40}} />
        )
      }
      else if(routeName === "readStory"){
        return (
          <Image source={require('./assets/read.png')}
          style={{width:40, height:40}} />
        )
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)