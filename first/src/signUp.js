import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert, TextInput, PanResponder, Dimensions, Button, TouchableOpacity, ScrollView, Animated, ImageBackground, Keyboard } from 'react-native';
import FlatlistData from './redux.js'
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';

class FlatItem extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     activerowkey: null,
        // }
    }

    render() {
        // const swipeSettings = {
        //     autoClose: true,
        //     onClose: (secId, rowId, direction) => {
        //         if (this.state.activerowkey != null)
        //             this.setState({ activerowkey: null })
        //     },
        //     onOpen: (secId, rowId, direction) => {
        //         this.setState({ activerowkey: this.props.item.name })
        //     },
        //     right: [{
        //         onPress: () => {
        //             const deletedRow = this.state.activerowkey;
        //             Alert.alert(
        //                 'Alert',
        //                 'Are you sure you want to delete',
        //                 [
        //                     { text: 'no' },
        //                     {
        //                         text: 'yes', onPress: () => {
        //                             FlatlistData.splice(this.props.item.name, 1);
        //                             this.props.parentFlatList.refreshFlatList(deletedRow)
        //                         }
        //                     }
        //                 ], { cancellable: true }
        //             )

        //         }, text: 'delete', type: 'delete'
        //     }], rowId: this.props.index,
        //     sectionId: 1
        // }
        return (

            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', borderColor: 'powderblue' }}>
                <Image style={{ width: 100, height: 100, borderRadius: 50, margin: 5 }} source={this.props.item.source}></Image>
                <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#4e342e", padding: 20 }}>
                    <Text style={{ fontSizstye: 25, color: 'white' }}>{this.props.item.name}</Text>
                    <Text style={{ fontSizstye: 25, color: 'white' }}>{this.props.item.description}</Text>
                </View>

            </View>

        );
    }
}

export default class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            // deletedRowKey: null,
            textInput_Holder1: '',
            textInput_Holder2: '',
            arrayHolder: [...FlatlistData]
        });
    }
    // refreshFlatList = (deletedKey) => {
    //     this.setState((prevState) => {
    //         return {
    //             deletedRowKey: deletedKey
    //         };
    //     });
    // }
    // componentDidMount() {
    //     const array2 = { name: this.state.textInput_Holder1, description: this.state.textInput_Holder2, source: require('./res/images/fashion12.jpeg') }
    //     this.setState({ arrayHolder: [...this.state.arrayHolder, array2] })
    // }
    joinData = () => {
        const input = this.state.textInput_Holder1;
        const input1 = this.state.textInput_Holder2;
        const array2 = { name: input, description: input1, source: require('./res/images/fashion12.jpeg') }

        this.setState({ arrayHolder: [...this.state.arrayHolder, array2] })
        console.warn(this.state.arrayHolder);
    }


    render() {
        console.warn('Render method called');
        console.warn(this.state.arrayHolder);
        return (
            <View>
                <View>

                    <TextInput
                        placeholder="Enter Name Here"
                        onChangeText={(data) => this.setState({ textInput_Holder1: data })}
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity onPress={() => { this.joinData() }}>
                        <Text>enter</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Enter Description Here"
                        onChangeText={(data) => this.setState({ textInput_Holder2: data })}
                        style={styles.textInputStyle1}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <FlatList data={this.state.arrayHolder}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatItem parentFlatList={this} item={item} index={index}></FlatItem>)
                    }}
                />
            </View>
        );
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
    textInputStyle1: {

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
