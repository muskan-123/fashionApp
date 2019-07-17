import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class photo extends Component {
	render() {
		return (
			<View>
				<Image source={{ uri: this.props.pic }} />
				<Text> photo </Text>
			</View>
		);
	}
}
