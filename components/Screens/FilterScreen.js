import { styles } from "../Styles";
import React, { useEffect, useState } from "react";
import MapFunction from "./MapDisplay";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from 'react-native-element-dropdown';
import DetailScreen from "./DetailsScreen";

// In here we are defining a filter screen based on the PlacesType ID. The data is being pulled from PlacesType API

export default function FilterScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState(0);

  const PlaceTypeName = [
    { label: "Show all places", id: 0 },
    { label: "Province", id: 1 },
    { label: "County", id: 2 },
    { label: "City", id: 3 },
    { label: "Town", id: 4 },
    { label: "Townland", id: 5 },
    { label: "Barony", id: 6 },
    { label: "Street ", id: 7 },
    { label: "Village", id: 8 },
    { label: "River ", id: 9 },
    { label: "Other", id: 10 },
    { label: "Country", id: 11 },
    { label: "Castle", id: 12 },
    { label: "Seignory", id: 13 },
    { label: "Forest", id: 14 },
    { label: "Lake", id: 15 },
  ]; // TODO: GET DATA FROM PLACETYPE API


  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
    //   headerTitle: "Maps",
      headerRight: () => (
        // Filter by place type with dropdown menu
        <Dropdown
          placeholder="Select a place type"
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          backgroundColor="white"
          data={PlaceTypeName}
          labelField="label"
          valueField="id"
          onChange={(value) => setSearch(value.id)}
        />
      )   })
    
}
  )
  
  return (
    <MapFunction
      filter={search} //In here we filter the data by ID, and then return it to the screen
    />
  )
}

