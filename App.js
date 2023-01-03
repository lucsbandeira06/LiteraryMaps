import * as React from 'react';
import MapFunction from './components/Screens/MapDisplay';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from './components/Screens/DetailsScreen';





// TAB NAVIGATOR
const Tab = createBottomTabNavigator();

export default function App() {
  return (

        <NavigationContainer>
         <Tab.Navigator
         screenOptions={{
           headerStyle:{
             backgroundColor: "white"
           },
           headerColor: "black"
           }}
          >
            <Tab.Screen name="Eiré Maps" 
            component={MapFunction}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="map" size={32} color={color} />
              ),
              headerStyle: {},
            }}
            />
            <Tab.Screen name="Details" 
            component={Details} 
            options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="info" size={32} color={color} />
                  )
                }}   
            />
         </Tab.Navigator>
        </NavigationContainer>
  )
}


