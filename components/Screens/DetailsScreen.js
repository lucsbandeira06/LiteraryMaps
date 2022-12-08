import React from "react";
import { View, Text } from 'react-native';
import  { styles }  from "../Styles";
import { useRoute } from "@react-navigation/core";

export default function Details() {
    
    const route = useRoute()
   
    if (route.params === undefined) {
      //if else statement to check if there is any params being passed to the detail screen
      return (
        <View style={styles.Detailcontainer}>
          <Text style={styles.detailScreenStyle}>Select a marker to display its full details.</Text>
        </View>
      );
    } else {
      // In case there is data being passed to this function, then:
     const { place_type_id, name, gaelic_name, latitude, longitude } = route.params;
     // return Place data
    return (
      <View style={ styles.Detailcontainer }>
        <Text style={ styles.detailScreenStyle }>place_type_id: {place_type_id}</Text>
        <Text style={styles.detailScreenStyle }>name: {name}</Text>
        <Text style={ styles.detailScreenStyle }>gaelic_name: {gaelic_name}</Text>
        <Text style={ styles.detailScreenStyle }>latitude: {latitude}</Text>
        <Text style={ styles.detailScreenStyle }>longitude: {longitude}</Text>
      </View>

    );
  }
}