import React, { Component } from 'react';
import { StyleSheet, Text, View, ProgressBarAndroid, TouchableOpacity, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class Splash extends Component {
    render() {
        return (
            <ImageBackground source={require('./res/images/fashion23.jpeg')} style={{
                flex: 1, width: null, height: null,
                backfaceVisibility: 'visible'
            }} resizeMode='cover'>
                <View style={{ flex: 1, backgroundColor: "#4e342e", top: 0, bottom: 0, left: 0, right: 0, position: 'absolute', opacity: 0.5 }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <ProgressBarAndroid styleAttr="Large" color='white' />

                </View>
            </ImageBackground>
        );
    }
    componentDidMount() {
        setTimeout(() => { this.props.navigation.navigate('App') }, 3000)
    }

}
