import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    PlaceName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 1,
    },
    PlaceType:{
        fontSize: 10,
        fontStyle: "italic",
        marginTop: 1,
    },
    PlaceGaelicName: {
        fontSize: 14,
    margin: 1,
    },
    PlaceAddress: {
        fontSize: 12,
    margin: 4,
    },
    DetailsButton: {
    flex: 1,
      fontSize: 16,
      marginRight: 4,
      fontWeight: 'bold',
      color: 'blue',
    },
    detailScreenStyle:{
        fontSize: 18, 
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Detailcontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    
      },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
    },
    title: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: "bold",
    },
    name: {
        fontSize: 18,
    },
    description: {
        fontSize: 14,
        color: "gray",
    },
    box: {
        padding: 10,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 7,
        resizeMode: "cover",
    },
    image: {
        width: 350,
        height: 100,
        borderRadius: 7,
    },
    dropdownContainer: {
        width: 150,
        marginLeft: 4,
        marginTop: -30,
        marginRight: 8,
        borderRadius: 12,
      },
      dropdown: {
        backgroundColor: "white",
        paddingHorizontal: 8,
        margin: 14,   
        borderRadius:12,
        width: 140,
        borderWidth: 1,
        alignSelf: "flex-start",
      },
      searchInput: {
        alignSelf: "flex-start",
        width: 150,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        padding: 5,
      },
  });