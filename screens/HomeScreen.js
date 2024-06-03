import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';



const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 pt-4 pb-0.5`}>
        <Image
          style={{
            width: 180,
            height: 120,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://www.coolgenerator.com/Data/Textdesign/202312/ad2d848cab0c22de56844f47eaa96387.png',
          }}
        />
        
        <GooglePlacesAutocomplete
          placeholder='Where From?'
          styles={{
            container:{
              flex: 0,
              paddingTop: 0,
            },  textInput: {
              fontSize: 18, 
            }
          }}
          onPress={(data, details = null) => {
             dispatch(setOrigin({
               location: details.geometry.location,
               description: data.description,
             }))
              dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={'search'} 
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

      <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  }

})