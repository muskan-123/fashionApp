import React, { Component } from 'react';
import { StyleSheet, Modal, Text, View, TouchableHighlight, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppImages } from './res/images';
import Video from 'react-native-video';
import redux from './redux.js'
import { connect } from 'react-redux';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'white',
            modalVisible: false,
            modalVisible1: false


        }
    }

    handleColor = () => {
        if (this.state.color == 'white') {
            this.setState({
                color: 'grey'
            })
        }
        else {
            this.setState({
                color: 'white'
            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'cadetblue' }} >
                <Video source={require('../src/res/images/video5.mp4')}
                    ref={(ref) => {
                        this.player = ref
                    }}

                    onBuffer={this.onBuffer}
                    onError={this.videoError}
                    fullscreen={true}
                    style={styles.backgroundVideo}
                    resizeMode='stretch'
                    repeat={true} />
                <View style={styles.first}>
                    <Image style={{ height: 120, width: 120, borderRadius: 60 }} source={AppImages.bg3.source}></Image>


                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 22, color: 'white', alignSelf: 'flex-start' }}>email-id </Text>
                        <Text style={{ fontSize: 22, fontFamily: 'bold', color: 'white', alignSelf: 'flex-start' }}>{this.props.email1}
                        </Text>
                    </View>
                </View>

                <View style={styles.second}>


                    <TouchableOpacity onPress={() => this.handleColor()}
                        style={{ flexDirection: 'row', marginVertical: 10, width: Dimensions.get("window").width }}><Icon style={{ marginHorizontal: 8, color: 'white' }} name="ios-settings" size={30} />
                        <Text style={{ fontSize: 20, color: 'white' }}>Settings</Text></TouchableOpacity>
                    <Modal transparent={true} animationType="slide" visible={this.state.modalVisible} onRequestClose={() => {
                        console.warn('warn');
                    }}>

                        <View style={{ flex: 1, backgroundColor: 'lightsteelblue', height: 600, marginVertical: 80 }}>


                            <TouchableHighlight style={{ alignItems: 'flex-end', padding: 40, justifyContent: 'flex-end' }}
                                onPress={() => { this.setState({ modalVisible: false }) }}>
                                <Icon name="ios-close" size={35} />
                            </TouchableHighlight>
                            <Text style={{ fontSize: 32, color: 'white', alignSelf: 'center', marginTop: 140 }}>Contact us:    Toll free number:1800 108 9777</Text>


                        </View>

                    </Modal>

                    <TouchableOpacity onPress={() => { this.setState({ modalVisible: true }) }} style={{ flexDirection: 'row', marginVertical: 10, width: Dimensions.get("window").width }}><Icon style={{ marginHorizontal: 8, color: 'white' }} name="ios-keypad" size={30} />
                        <Text style={{ fontSize: 20, color: 'white' }}>Contact-us</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.props.navigation.navigate('redux')} style={{ flexDirection: 'row', marginVertical: 10, width: Dimensions.get("window").width }}><Icon style={{ marginHorizontal: 8, color: 'white' }} name="ios-shirt" size={30} />
                        <Text style={{ fontSize: 20, color: 'white' }}>Add your items</Text></TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10, width: Dimensions.get("window").width }}><Icon style={{ marginHorizontal: 8, color: 'white' }} name="ios-shrt" size={30} />
                        <Text style={{ fontSize: 20, color: 'white' }}>Need help</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.playSound} style={{ flexDirection: 'row', marginVertical: 10, width: Dimensions.get("window").width }}><Icon style={{ marginHorizontal: 8, color: 'white' }} name="ios-create" size={30} />
                        <Text style={{ fontSize: 20, color: 'white' }}>Feedback</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ modalVisible1: true }) }} style={{ flexDirection: 'row', marginVertical: 10, width: Dimensions.get("window").width }}><Icon style={{ marginHorizontal: 8, color: 'white' }} name="ios-power" size={30} />
                        <Text style={{ fontSize: 20, color: 'white' }}>Logout</Text></TouchableOpacity>
                    <Modal transparent={true} animationType="fade" visible={this.state.modalVisible1} onRequestClose={() => {
                        console.warn('warn');
                    }}>

                        <View style={{ borderColor: "#8d6e63", borderRadius: 5, borderWidth: 4, backgroundColor: 'white', height: 200, marginTop: 400, marginBottom: 100 }}>
                            <View style={{ paddingTop: 10 }}>
                                <Text style={{ fontSize: 25, color: 'black', alignSelf: 'center' }}>Are you sure ?</Text>
                            </View>
                            <View style={{ justifyContent: 'space-around', padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableHighlight style={{ alignItems: 'flex-end', padding: 40, justifyContent: 'flex-end' }}
                                    onPress={() => { this.setState({ modalVisible1: false }) }}>
                                    <Text style={{ fontSize: 22, color: 'black' }}>Cancel</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={{ alignItems: 'flex-end', padding: 40, justifyContent: 'flex-end' }}
                                    onPress={() => { this.props.navigation.navigate('App'), this.setState({ modalVisible1: false }) }}>
                                    <Text style={{ fontSize: 22, color: 'black' }}>Yes</Text>
                                </TouchableHighlight>
                            </View>



                        </View>

                    </Modal>


                    <View style={{ height: 200, width: Dimensions.get("window").width }}>

                    </View>
                </View>
            </View>



        );
    }
}
const styles = StyleSheet.create({

    first: {
        height: 150,
        alignSelf: 'center',
        marginTop: 20

    },
    second: {
        height: 500,
        width: 100
    }, backgroundVideo: {
        padding: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'stretch'
    },
})
const mapStateToProps = (state) => {
    return {
        email1: state.email
    }
}


export default connect(mapStateToProps, null)(Logout)
