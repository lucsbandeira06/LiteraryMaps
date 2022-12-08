import MapView, { Marker, Callout } from 'react-native-maps'
import { useEffect, useState } from "react";
import { Button, View, Text } from 'react-native';
import { styles } from '../Styles';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import FilterScreen from './FilterScreen';


// This constant set the initial position of maps when the application is first rendered.
const initialPosition = {
  latitude: 53.2734, 
  longitude: -7.95832031,
  latitudeDelta: 4.0922,
  longitudeDelta: 5.0921
}

//Main Map function where data will be fetched to render the map and markers for places.
export default function MapFunction() {
   
   
  const [Places, setPlaces] = useState([])
  const [PlaceType, setPlaceType] = useState([])

  


  // Fetching data from two API's simultaneously Places and Place types.
useEffect(() => {
    Promise.all([
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json'),
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json')
    ])
    .then(([resPlaces, resPlaceType]) =>
    Promise.all([resPlaces.json(), resPlaceType.json()])
    )
    .then(([dataPlaces, dataPlaceType]) => {
            setPlaces(dataPlaces);
            setPlaceType(dataPlaceType)
         
    }) 
}, []);

// Return place type name according to place_type_id
function Get_Marker_Type(type_id) {
  return PlaceType.map((type) => {
      if (type.id === type_id) {
          return type.name;
      }
  })
}

// Function to return color according to place type 
function MarkerColors(type_id) {
  switch(type_id) {
      case 1:
          return 'aqua';
      case 2:
          return 'blueviolet';
      case 3:
          return 'darkblue';
      case 4:
          return 'green';
      case 5:
          return 'crimson';
      case 6:
          return 'purple';
      case 7:
          return 'darkgreen';
      case 8:
          return 'chocolate';
      case 9:
          return 'white';
      case 10:
          return 'pink';
      case 11:
          return 'bronze';
      case 12:
          return 'magenta';
      case 13:
          return 'lime';
      case 14:
          return 'teal';
      case 15:
          return 'gold';
      default:
          return 'crimson';
  }
} 

const navigation = useNavigation()

// Variable to position every marker on the map according to its coordinates
const DisplayMarker = 
    Places.map((marker, position) => (
    <Marker
    //set position value
       key={position}
       coordinate={{ latitude: marker.latitude, longitude: marker.longitude}}
       //Calling MarkerColors function to change marker color according to its place type
       pinColor={MarkerColors(marker.place_type_id)}
       name={marker.name}
     >
     {/* In here we display a small pop up windows with marker short details */}
  <Callout>
     <View>
      <Text style={styles.PlaceType}> 
       {Get_Marker_Type(marker.place_type_id)}
      </Text>
       <Text style={styles.PlaceName}> {marker.name} </Text>
       {marker.gaelic_name ? <Text style={styles.PlaceGaelicName}>
        Gaelic name: {marker.gaelic_name} </Text> : null }   
       <Button
       title="More details"
       // Here we pass the data from places API to the detail screen, and then navigate to the next screen.
       onPress={() => 
            navigation.navigate("Details", {    
        place_type_id: marker.place_type_id,
        name: marker.name,
        gaelic_name: marker.gaelic_name,
        latitude: marker.latitude,
        longitude: marker.longitude
        })}>
        </Button>
         </View>
   </Callout>
     </Marker>
))

  //In here we render the home screen which is the maps IOS and its features.
  return (   
    <MapView
      filter={FilterScreen}
      style={{flex:1}}
      //passing variable defined at the beginning of this file.
      initialRegion={initialPosition}
      // Positioning markers on the map according to their coordinates.
      showUserLocation={true}
        //  below I call a variable to get marker displayed on the map 
    >
    {DisplayMarker}
      </MapView>
 
  );
}