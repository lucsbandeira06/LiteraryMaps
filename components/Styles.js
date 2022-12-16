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
        marginTop: 20,
        marginBottom:24,
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
        width: 120,
        margin: 4,
        borderRadius: 6,
        textAlign: "center",
        alignContent: "flex-start"  ,
        fontStyle: 'bold'
      },
      dropdown: {
        backgroundColor: "white",
        margin: 8,
        padding: 12,   
        borderRadius:12,
        width: 144,
        height: 30,
        alignContent: 'center',
      },
      searchInput: {
        alignSelf: "flex-start",
        width: 150,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        padding: 5,
      },
      Buttons: {
        color: "black",
        width: 50,
        height: 30,
        marginTop: 46,
        backgroundColor: "black",
        borderWidth: 2,
        padding: 5,
      },
  });