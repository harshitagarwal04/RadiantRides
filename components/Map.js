import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
// import { selectDestination } from '../slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin);
    // const destination = useSelector(selectDestination);

  return (
    <MapView
    style={tw`flex-1 `}
    mapType='mutedStandard'
    initialRegion={{
    latitude: 28.7041, //origin.location.lat,
    longitude: 77.1025, //origin.location.lng,
    latitudeDelta: 0.5,  //0.005,
    longitudeDelta: 0.1,  //0.005,
  }}
        // {origin && destination && (
        //     <MapViewDirections
        //         origin={origin.description}
        //         destination={destination.description}
        //         apikey={GOOGLE_MAPS_APIKEY}
        //         strokeWidth={3}
        //         strokeColor='black'
        //     />
        // )
        
        // {origin?.location && (
        //     <Marker
        //     coordinate={{
        //         latitude: origin.location.lat,
        //         longitude: origin.location.lng,
        //     }}
        //     title='Origin'
        //     description={origin.description}
        //     identifier='origin'
        //     />
        // )}
    />
  )
}

export default Map

const styles = StyleSheet.create({})