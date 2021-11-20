import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native'; 
import { Spinner } from 'native-base'


export default class SplashScreen extends Component {
    render(){
            return <View style={{flex: 1,backgroundColor:'#000',flexDirection:'column',justifyContent:'center'}}>
                <ImageBackground source={require('../assets/Logo/logo.png')} style={{alignSelf:'center',alignItems:'center',resizeMode:'contain', width: 500, height: 500}}>
                <View style={{marginTop: 300}}>
                <Spinner color='#ffffff' />
                </View>
                </ImageBackground>
            </View>
    }
}