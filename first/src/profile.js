import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, Button, ToolbarAndroid, FlatList, InputAccessoryView, Dimensions, TextInput, TouchableOpacity, ScrollView, ImageBackground, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import { AppImages } from './res/images';
import Text from './input.js'
import { Slider } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

import { connect } from 'react-redux';
const options = {
    title: 'Take photo',
    takePhotoButtonTitle: 'take a photo',
    chooseFromLibraryButtonTitle: 'choose from gallery'
};

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            source: require("./res/images/fashion21.jpeg"),
            flag: true,
            date: "1999-09-18",
            avatarSource: require('./res/images/fashion12.jpeg'),
            isOn: false,
            text: this.props.email1

        }

    }
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./res/images/fashion12.jpeg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };


    myFun = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.warn('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    renderImageBackground5(imageObj5) {
        const { source, style } = imageObj5;
        return (<Image source={this.state.avatarSource} style={{ height: 140, width: 140, borderRadius: 70 }} resizeMode='stretch'>
        </Image>)
    }
    // renderImageBackground18(imageObj18) {
    //     const { source, style } = imageObj18;
    //     return (<ImageBackground source={require('./res/images/fashion10.jpeg')} style={style} resizeMode='stretch'></ImageBackground>)
    // }
    render() {
        const imageObj5 = AppImages.bg8;

        return (
            <ImageBackground source={this.state.source} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                    <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.6, backgroundColor: "#8d6e63" }} />
                    <View style={styles.container}>


                        <View style={{ height: '30%', justifyContent: 'center', alignItems: 'center' }}>

                            {this.renderImageBackground5(imageObj5)}
                            <TouchableOpacity onPress={() => { this.myFun() }} ><Icon style={{ color: 'powderblue', marginLeft: 100 }} name="ios-camera" size={35} /></TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', height: '10%', }}>
                            <Text style={{ width: '20%', color: 'powderblue', marginTop: 20, paddingLeft: 9 }} >
                                Name:-</Text>
                            <TextInput style={{ margin: 8, width: '60%' }} placeholder='Muskan Modi' placeholderTextColor='white' />

                            <TouchableOpacity style={{ width: '20%', borderBottomWidth: 2, borderBottomColor: 'powderblue', borderLeftWidth: 2, borderLeftColor: 'powderblue', marginVertical: 8 }}><Text style={{ marginLeft: 5, paddingTop: 15, color: 'white' }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', height: '10%' }}>
                            <Text style={{ width: '20%', color: 'powderblue', marginTop: 20, paddingLeft: 9 }} >
                                Email ID:-</Text>
                            <TextInput placeholder='email' value={this.state.text} placeholderTextColor='white' onChangeText={(text) => this.setState({ text })} ref={input => { this.input2 = input }} style={{ margin: 8, width: '60%' }}></TextInput>
                            <TouchableOpacity onPress={() => { this.input2.focus(), this.props.changeEmail(this.state.text) }} style={{ width: '20%', borderBottomWidth: 2, borderBottomColor: 'powderblue', borderLeftWidth: 2, borderLeftColor: 'powderblue', marginVertical: 8 }}><Text style={{ marginLeft: 5, paddingTop: 15, color: 'white' }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', height: '10%' }}>
                            <Text style={{ width: '20%', color: 'powderblue', marginTop: 20, paddingLeft: 9 }} >
                                Language:-</Text>
                            <TextInput placeholder='English' placeholderTextColor='white' ref={input => { this.input1 = input }} style={{ margin: 8, width: '60%' }}></TextInput>
                            <TouchableOpacity onPress={() => { this.input1.focus() }} style={{ width: '20%', borderBottomWidth: 2, borderBottomColor: 'powderblue', borderLeftWidth: 2, borderLeftColor: 'powderblue', marginVertical: 8 }}><Text style={{ marginLeft: 5, paddingTop: 15, color: 'white' }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', height: '10%' }}>
                            <Text style={{ marginTop: 4, width: '20%', color: 'powderblue', marginTop: 20, paddingLeft: 9 }}>Date</Text>
                            <DatePicker
                                style={{ width: '60%', color: 'white', marginTop: 7, alignSelf: 'center', marginRight: 7 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2016-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 20
                                    },
                                    dateInput: {
                                        marginLeft: 56
                                    }

                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                            <TouchableOpacity style={{ width: '20%', borderBottomWidth: 2, marginVertical: 8, marginLeft: 6, borderBottomColor: 'powderblue', borderLeftWidth: 2, borderLeftColor: 'powderblue' }}><Text style={{ marginLeft: 5, fontSize: 15, paddingTop: 15, color: 'white' }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', height: '10%' }}>
                            <Text style={{ width: '20%', color: 'powderblue', marginTop: 20, paddingLeft: 9 }} >
                                font size:-</Text>
                            <TextInput placeholder='15' placeholderTextColor='white' ref={input => { this.input = input }} style={{ margin: 8, width: '20%' }}></TextInput>
                            <TouchableOpacity onPress={() => this.props.increaseFontSize()} style={{ width: '20%', margin: 5, marginVertical: 8, borderBottomColor: 'powderblue', borderLeftWidth: 2, borderLeftColor: 'powderblue' }}><Text style={{ fontSize: 15, paddingTop: 15, color: 'white' }}>Increase</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.decreaseFontSize()} style={{ width: '20%', margin: 5, marginVertical: 8, borderBottomColor: 'powderblue', borderLeftWidth: 2, borderLeftColor: 'powderblue' }}><Text style={{ fontSize: 15, paddingTop: 15, color: 'white' }}>decrease</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.input.focus() }} style={{ width: '20%', borderBottomWidth: 2, marginVertical: 8, borderBottomColor: 'powderblue', borderLeftWidth: 2, borderLeftColor: 'powderblue' }}><Text style={{ marginLeft: 5, fontSize: 15, paddingTop: 15, color: 'white' }}>Edit</Text>
                            </TouchableOpacity></View>
                        <View style={{ height: '10%', flexDirection: 'row' }}>
                            <Text style={{ color: 'powderblue' }}>items in cart</Text>
                            <Slider
                                value={this.state.value}
                                onValueChange={(value) => this.setState({ value })}

                                style={{ width: 200, height: 60, marginLeft: 100, marginBottom: 20 }}
                                thumbImage={<Icon name='ios-home' />}
                                minimumValue={10}
                                step={1}
                                thumbTouchSize={{
                                    height: 40, width: 40
                                }}
                                maximumValue={50}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                            />
                            <Text style={{ marginBottom: 5 }}>Value: {this.state.value}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: '10%' }}>
                            <Text style={{ color: 'powderblue', marginLeft: 20 }}>Notification</Text>
                            <ToggleSwitch style={{ marginLeft: 100 }}
                                isOn={this.state.isOn}
                                onColor='powderblue'
                                offColor='red'

                                labelStyle={{ fontColor: 'powder blue', fontSize: 25 }}
                                size='medium'
                                onToggle={(isOn) => this.setState({
                                    isOn: isOn
                                })

                                }

                            />

                        </View>


                    </View>
                </ScrollView>
            </ImageBackground>

        );
    }
    onActionSelected = (position) => {
        if (position === 0) {
            showSettings();
        }
    }
    componentDidMount() {
        this.Interval = setInterval(() => {
            if (this.state.flag) {
                this.setState({ source: require("./res/images/fashion21.jpeg"), flag: false })
            }
            else {
                this.setState({ source: require("./res/images/fashion22.jpeg"), flag: true })
            }
        }, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.Interval)

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',


    }

})
const mapStateToProps = (state) => {

    return {
        email1: state.email
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseFontSize: () => dispatch({ type: 'INCREASE_FONT' }),
        decreaseFontSize: () => dispatch({ type: 'DECREASE_FONT' }),
        changeEmail: (data) => dispatch({ type: 'CHANGE_EMAIL', payload: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)


