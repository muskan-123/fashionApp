import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Image, TextInput, Dimensions, Button, TouchableOpacity, ScrollView, ImageBackground, Keyboard } from 'react-native';
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            count1: 1,
            count2: 1,
            modalVisible: false
        }
    }
    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleCount1 = () => {
        this.setState({
            count1: this.state.count1 + 1
        })
    }
    handleCount2 = () => {
        this.setState({
            count2: this.state.count2 + 1
        })
    }
    render() {



        return (
            <ImageBackground source={require('./res/images/fashion24.jpeg')} style={{ flex: 1 }} resizeMode='cover' >
                <View style={styles.Background} />
                <View style={styles.container}>
                    <Text style={styles.text}>Your list of items:-</Text>

                    <View style={styles.cart}>

                        <Text style={styles.text}>{this.props.items[0].name}</Text>
                        <TouchableOpacity onPress={() => this.props.deleteItem(this.props.items[0].id)} style={styles.button}><Text>Delete</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleCount()} style={styles.button1}><Text style={{ fontSize: 22, alignSelf: 'center' }}>{this.state.count}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={{ fontSize: 18, alignSelf: 'center' }}>View</Text></TouchableOpacity>
                    </View>

                    <View style={styles.cart}>
                        <Text style={styles.text}>{this.props.items[1].name} </Text>
                        <TouchableOpacity style={styles.button}><Text>Delete</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleCount1()} style={styles.button1}><Text style={{ fontSize: 22, alignSelf: 'center' }}>{this.state.count1}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={{ fontSize: 18, alignSelf: 'center' }}>View</Text></TouchableOpacity>
                    </View>
                    <View style={styles.cart}>
                        <Text style={styles.text}>{this.props.items[2].name} </Text>
                        <TouchableOpacity style={styles.button}><Text>Delete</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleCount2()} style={styles.button1}><Text style={{ fontSize: 22, alignSelf: 'center' }}>{this.state.count2}</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })} style={styles.button}><Text style={{ fontSize: 18, alignSelf: 'center' }}>View</Text></TouchableOpacity>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={this.state.modalVisible} onRequestClose={() => {
                        console.warn('warn');
                    }}>
                        <ImageBackground source={require('./res/images/fashion24.jpeg')} style={{ height: 400, marginVertical: 100 }} resizeMode='cover' >
                            <View style={{ height: 400, marginVertical: 100 }}>
                                <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={styles.button1}><Text style={{ fontSize: 22, alignSelf: 'center' }}>-</Text></TouchableOpacity>

                            </View>
                        </ImageBackground>
                    </Modal>
                </View>
            </ImageBackground>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    Background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.7,
        backgroundColor: 'lightgrey'
    },
    text: {
        fontSize: 22,
        color: 'grey',
        padding: 10,
        alignSelf: 'center'
    },
    cart: {
        height: 70,
        width: Dimensions.get("window").width,

        padding: 10,
        marginVertical: 20,
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,

    },
    button: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 3,
        height: 30,

        marginTop: 10
    },
    button1: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        width: 40,
        marginLeft: 20,
        marginTop: 9,
        marginRight: 10,
    }
})
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (rid) => dispatch({ type: 'DELETE_ITEM', resultId: rid })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)