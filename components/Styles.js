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
        margin: 8,
        padding: 6,
        borderRadius: 6,
        textAlign: "center",
        alignContent: "center",
        fontStyle: 'bold'
      },
      dropdown: {
        backgroundColor: "white",
        marginBottom: 8,
        marginTop: 3,
        marginLeft: 3,
        borderRadius:10,
        borderColor: 'black',
        width: 125,
        alignItems: "center",
        fontSize: 8,
        height: 30,
        justifyContent: "space-around"
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
      CustomMarkerView: {
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 4,
        display: "flex"
      },
      CustomMarkerDetails: {
        color: "black",
        fontSize: 14,
        padding: 4,
        margin: 4,
        textAlign: "center",
        textAlignVertical: "center"
      }
  });