import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Dimensions, Easing, Image, FlatList, TextInput, PanResponder, Button, TouchableOpacity, ScrollView, Animated, ImageBackground, Keyboard } from 'react-native';
const { width, height } = Dimensions.get("window");
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class animated extends Component {

    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAtIKv93XqoaiHjlFF9MfqLqB4ggSYGcuY",
            authDomain: "database-1e61a.firebaseapp.com",
            databaseURL: "https://database-1e61a.firebaseio.com",
            projectId: "database-1e61a",
            storageBucket: "",
            messagingSenderId: "948253536232",
            appId: "1:948253536232:web:14172214696c16f5"
        };

        firebase.initializeApp(firebaseConfig);

        // firebase.database().ref("users/002").set(
        //     {
        //         age: 10,
        //         name: "muskan modi"
        //     }
        // ).then(() => {
        //     console.warn('inserted')
        // }).catch((error) => {
        //     console.warn(error)
        // });

        // firebase.database().ref('users').once('value', (data) => {
        //     console.warn(data.toJSON())
        // })
    }


    constructor(props) {
        super(props)
        this.state = {
            fadeValue: new Animated.Value(0),
            xValue: new Animated.Value(0),
            springValue: new Animated.Value(0.3),
            uri: '',
            arrayHolder: [],
            textInput_Holder: ''

        }
        this.array = [{
            title: 'ONE'
        },
        {
            title: 'TWO'
        },
        {
            title: 'THREE'
        },
        {
            title: 'FOUR'
        },
        {
            title: 'FIVE'
        }
        ]

    }

    componentDidMount() {

        this.setState({ arrayHolder: [...this.array] })
        setTimeout(() => {
            this.moveAnimation()
        }, 2000)

    }



    joinData = () => {

        this.array.push({ title: this.state.textInput_Holder });

        this.setState({ arrayHolder: [...this.array] })

    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }

    GetItem(item) {

        Alert.alert(item);

    }
    // fadeAnimation = () => {
    //     Animated.timing((this.state.fadeValue), {
    //         toValue: 1,
    //         duration: 1200
    //     }).start();
    // }
    moveAnimation = () => {
        Animated.timing(this.state.xValue, {
            toValue: width - 100,
            duration: 1000,
            Easing: Easing.cubic()
        }).start(() => {
            Animated.timing(this.state.xValue, {
                toValue: 0,
                duration: 1000,
                Easing: Easing.linear()
            }).start(() => {
                this.moveAnimation();
            });
        });


    }
    springAnimation = () => {
        Animated.timing((this.state.springValue), {
            toValue: 2,
            friction: 1
        }).start();
    }
    // imagePress = async () => {
    //     let result = await ImagePicker.launchImageLibrary(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         } else {
    //             this.setState({ uri: response.uri })
    //         }
    //     });

    //     if (!result.cancelled) {
    //         this.uploadImage(result.uri, "test-image")
    //             .then(() => {
    //                 Alert.alert("success");
    //             })
    //             .catch((error) => {
    //                 Alert.alert(error);
    //             })
    //     }
    // }
    // uploadImage = async (uri, imageName) => {
    //     const response = await fetch(uri);
    //     const blob = await response.blob();
    //     var ref = firebase.storage.ref().child("images/" + imageName);
    //     return ref.putFile(blob);
    // }

    render() {

        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Animated.Image style={{ backgroundColor: 'powderblue', width: 120, height: 120, borderRadius: 60, left: this.state.xValue }} source={require('./res/images/fashion22.jpeg')}></Animated.Image>
                    <TouchableHighlight style={{ alignSelf: 'center' }}><Text>Show profile picture</Text></TouchableHighlight>

                </View>
                <View style={{ flex: 8, backgroundColor: 'powderblue', justifyContent: 'center' }}>
                    <TextInput
                        placeholder="Enter Value Here"
                        onChangeText={data => this.setState({ textInput_Holder: data })}
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >

                        <Text style={styles.buttonText}> Add Values To FlatList </Text>

                    </TouchableOpacity>
                    <FlatList

                        data={this.state.arrayHolder}

                        width='100%'

                        extraData={this.state.arrayHolder}

                        keyExtractor={(index) => index.toString()}

                        ItemSeparatorComponent={this.FlatListItemSeparator}

                        renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
                    />

                </View>
            </View>
        );
    }

    componentWillUnmount() {
        clearInterval(this.Interval)
    }

}
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    textInputStyle: {

        textAlign: 'center',
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 7,
        marginTop: 12
    },

    button: {

        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        marginTop: 10
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
})    
