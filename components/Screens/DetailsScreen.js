import React from "react";
import { Image, Button, View, Text } from 'react-native';
import  { styles }  from "../Styles";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";

export default function Details() {
    
    const navigation = useNavigation()
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
          <Image source={{ uri: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/300/300` }}
          style={{ width: 180, height: 180, borderRadius:100, marginBottom: 20, marginTop: 40 }} />
        <Text style={ styles.detailScreenStyle }>place_type_id: {place_type_id}</Text>
        <Text style={styles.detailScreenStyle }>name: {name}</Text>
        <Text style={ styles.detailScreenStyle }>gaelic_name: {gaelic_name}</Text>
        <Text style={ styles.detailScreenStyle }>latitude: {latitude}</Text>
        <Text style={ styles.detailScreenStyle }>longitude: {longitude}</Text>
        <Button style={ styles.Buttons}
        title="GO BACK"
        onPress={() => navigation.goBack()}></Button>
      </View>

    );
  }
}