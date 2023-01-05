## Google Maps Application - React Native ##
### Lucas Bandeira - ID: 23884 ###

The main objective of this assignment is to create a mobile app to showcase in a map literary important places in Ireland and other countries around the world, mostly Europe. The user will be able to press on the markers of these places to find some information about that place. There is also a detail screen and a dropdown filter, in case the user wants to filter places by place type. Users will also be able to create custom markers on the maps and check the distance between two markers.


### Display markers on the map ###
- [x] Load places and place types JSON data1
- [x] Display marker for all places using GPS coordinates
- [x] Use different colours, one for each place type
- [x] When marker is tapped, place name should be displayed on a pop-up info window
### Show extended information ###
- [x] When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates)
- [x] Show the image of the place loaded from the internet
- [ ] [Bonus] Show relevant image using any free web service, or search engine
- [x] Show a back button, when pressed, go back to map view
### Allow filtering by Place Type ###
- [x] Show dropdown for selecting Place Type, default value should be all
- [ ] When a specific Place Type is selected, show only the places with this Place Type on the map
### Allow custom marker ###
- [x] Long Press anywhere on map to show a draggable marker
- [ ] Show distance to the nearest place (from the downloaded data), and on drag marker, update this info
- [x] Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius
- [ ] [Bonus] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly

API's requests URLs:

### Places: ###
 https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json
### Place Types: ###
https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json
### Images ###
https://picsum.photos/id/${Math.floor(Math.random() * 50)}/300/300

## Youtube video link ## 

## References ##

https://www.educative.io/answers/how-to-calculate-distance-using-the-haversine-formula
https://reactnavigation.org/docs/getting-started/
https://github.com/react-native-maps/react-native-maps
