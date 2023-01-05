import MapView, { Marker, Callout, Circle } from 'react-native-maps'
import { useEffect, useState } from "react";
import { Button, View, Text } from 'react-native';
import { styles } from '../Styles';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';

//Harvesine formula 
function haversine(lat1, lon1, lat2, lon2)
    {
        // distance between latitudes
        // and longitudes
        let dLat = (lat2 - lat1) * Math.PI / 180.0;
        let dLon = (lon2 - lon1) * Math.PI / 180.0;
           
        // convert to radiansa
        lat1 = (lat1) * Math.PI / 180.0;
        lat2 = (lat2) * Math.PI / 180.0;
         
        // apply formulae
        let a = Math.pow(Math.sin(dLat / 2), 2) +
                   Math.pow(Math.sin(dLon / 2), 2) *
                   Math.cos(lat1) *
                   Math.cos(lat2);
        let rad = 6371;
        let c = 2 * Math.asin(Math.sqrt(a));
        return rad * c;
         
    }
 


// This constant set the initial position of maps when the application is first rendered.
const initialPosition = {
  latitude: 53.2734, 
  longitude: -7.95832031,
  latitudeDelta: 4.0922,
  longitudeDelta: 5.0921
}

//Main Map function where data will be fetched to render the map and markers for places.
export default function MapFunction(props) {
   
  const {filter, navigation} = props;
  const [Places, setPlaces] = useState([])
  const [PlaceType, setPlaceType] = useState([])
  const [Search, setSearch] = useState([])
  const [newMarker, setNewMarker] = useState({
    latitude: 211.35014,
    longitude: -6.266155,
  }) // had to give the new marker an initial position otherwhise there was a bug when rendering the map.


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
            setSearch(dataPlaces)
         
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
          return 'black';
      default:
          return 'crimson';
  }
} 

// Variable to position every marker on the map according to its coordinates
const DisplayMarker =
    Places.map((marker, position) => (
    <Marker
    //set position value
       key={position}
       //Filter places by ID
       filter={filter}
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
      onLongPress={(e) => {
    //Setting the coordinates of the new marker according to long press on the screen
        setNewMarker(e.nativeEvent.coordinate); 
      }}
      style={{flex:1, zIndex: -2}}
      //Passing initial position of the map defined at the beginning of this file.
      initialRegion={initialPosition}
      //Positioning markers on the map according to their coordinates.
      showUserLocation={true}
      filter={Search}
      //Below is the function which will load markers on the map according to latitude and longitute of places in Places API
      
    >
     {DisplayMarker} 

    <Marker //Placing the new marker according to data that was set in the MapView LongPress
        coordinate={{
          latitude: newMarker.latitude,
          longitude: newMarker.longitude,
        }}
        pinColor={"gold"}
        draggable={true}
        onDragEnd={(e) => {
          setNewMarker({ 
              id: newMarker.length + 1,
              name: 'Custom marker',
              place_type_id: 0,
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
          });
        }}  
    >
        <Callout>
        <View style={styles.CustomMarkerView}>

        <Text style={styles.CustomMarkerDetails}>Places within 10km radius: {
        Places.filter((newmarker) => 
        {return (Math.abs(newmarker.latitude - newMarker.latitude) < 0.1 ) && (Math.abs(newmarker.longitude - newMarker.longitude) < 0.1 )
          }).length}</Text>
          
        <Text style={styles.CustomMarkerDetails}>Nearest place (km): {
        // Places.map((marker) => {
        //        return (Math.min(marker.latitude - newMarker.latitude) < 0.1 ) && (Math.abs(marker.longitude - newMarker.longitude) < 0.1 ) + " K.M." })
               }
               </Text>

          </View>
        </Callout>
    </Marker>
    
      <Circle // Radius circle around new marker 
        center={{
          latitude: newMarker.latitude,
          longitude: newMarker.longitude,
        }}
        radius={10000} //10km radius
        fillColor={"rgba(0,0,255,0.2)"} //blue color with very low opacity
        strokeColor={"rgba(0,0,255,0.7)"} // outline of the circle
      >
      </Circle>
    
        <Dropdown
          placeholder="Filter places"
          style={styles.dropdown}
        //   containerStyle={styles.dropdownContainer}
          data={PlaceType}
          labelField="name"
          valueField="id"
          //In here we pass the data 
          onChange={(e) => setSearch(e.id)}
    />
    
      </MapView>
 
  );
}