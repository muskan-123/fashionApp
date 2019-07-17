import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, BackHandler, Modal, TouchableOpacity, ImageBackground, Keyboard } from 'react-native';
import { connect } from 'react-redux';


class input extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: this.props.fontSize }}> {this.props.children}</Text>
            </View>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        fontSize: state.count
    }
}

export default connect(mapStateToProps)(input)