import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	Dimensions,
	Vibration,
	View,
	TextInput,
	Button,
	Image,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
	Keyboard
} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppImages } from './res/images';

import { KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class SettingsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: true,
			source: AppImages.bg10.source,
			handle: false
		};
	}

	renderImageBackground6(imageObj6) {
		const { source, style } = imageObj6;
		return <ImageBackground source={source} style={style} resizeMode="stretch" />;
	}
	renderImageBackground7(imageObj7) {
		const { source, style } = imageObj7;
		return <ImageBackground source={this.state.source} style={style} resizeMode="stretch" />;
	}
	renderImageBackground8(imageObj8) {
		const { source, style } = imageObj8;
		return <ImageBackground source={source} style={style} resizeMode="stretch" />;
	}
	renderImageBackground9(imageObj9) {
		const { source, style } = imageObj9;
		return <ImageBackground source={source} style={style} resizeMode="stretch" />;
	}
	renderImageBackground10(imageObj10) {
		const { source, style } = imageObj10;
		return <ImageBackground source={source} style={style} resizeMode="stretch" />;
	}
	renderImageBackground11(imageObj11) {
		const { source, style } = imageObj11;
		return <ImageBackground source={source} style={style} />;
	}
	render() {
		const imageObj6 = AppImages.bg9;
		const imageObj7 = AppImages.bg10;
		const imageObj8 = AppImages.bg11;
		const imageObj9 = AppImages.bg12;
		const imageObj10 = AppImages.bg13;
		const imageObj11 = AppImages.bg2;
		const imageObj12 = AppImages.bg17;

		return (
			<View style={{ flex: 1 }}>
				<View
					style={{ flex: 0.7, flexDirection: 'row', backgroundColor: 'white', width: '100%', position: 'absolute' }}
				>
					<TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} style={{ padding: 15 }}>
						<Icon color="#8d6e63" name="ios-menu" size={30} />
					</TouchableOpacity>
					<TouchableOpacity style={{ padding: 15 }}>
						<Icon color="#8d6e63" name="ios-search" size={30} />
					</TouchableOpacity>

					<TextInput style={{ width: 200, marginBottom: 10, borderBottomWidth: 2, borderBottomColor: '#8d6e63' }} />

					<TouchableOpacity style={{ marginLeft: 62, padding: 15 }}>
						<Icon color="#8d6e63" name="ios-log-out" size={30} />
					</TouchableOpacity>
				</View>

				<View style={{ flex: 9.3, position: 'relative' }}>
					<KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
						<View>
							<KeyboardAwareScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
								<View style={{ height: 200, backgroundColor: '#B26666', flexDirection: 'row' }}>
									<View
										style={{
											width: Dimensions.get('window').width / 2,
											height: 170,
											backgroundColor: 'grey',
											margin: 7
										}}
									>
										{this.renderImageBackground7(imageObj7)}
									</View>
									<View
										style={{
											width: Dimensions.get('window').width / 2,
											height: 170,
											backgroundColor: 'blue',
											margin: 7
										}}
									>
										{this.renderImageBackground8(imageObj8)}
									</View>
									<View
										style={{
											width: Dimensions.get('window').width / 2,
											height: 170,
											backgroundColor: 'black',
											margin: 7
										}}
									>
										{this.renderImageBackground9(imageObj9)}
									</View>
									<View
										style={{
											width: Dimensions.get('window').width / 2,
											height: 170,
											backgroundColor: 'red',
											margin: 7
										}}
									>
										{this.renderImageBackground10(imageObj10)}
									</View>
								</View>
							</KeyboardAwareScrollView>
							<TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'white' }}>
								<Text style={{ color: '#B26666', fontSize: 30, fontFamily: 'sans-serif-condensed' }}>
									{' '}
									Tap to add more
								</Text>
								<Icon style={{ color: '#B26666', marginLeft: 10, marginTop: 6 }} name="ios-shirt" size={30} />
							</TouchableOpacity>
							<View style={{ opacity: 0.8 }}>
								<ImageBackground source={AppImages.bg9.source} style={AppImages.bg9.style}>
									<View
										style={{
											width: Dimensions.get('window').width,
											backgroundColor: 'white',
											height: 170,
											margin: 10,
											borderBottomWidth: 2,
											borderBottomColor: '#B26666'
										}}
									>
										<Image
											source={AppImages.bg14.source}
											style={{ margin: 20, height: 120, width: 120, borderRadius: 60 }}
										/>
									</View>

									<View
										style={{
											width: Dimensions.get('window').width,
											margin: 10,

											backgroundColor: 'white',
											height: 170,
											borderBottomWidth: 2,
											borderBottomColor: '#B26666'
										}}
									>
										<Image
											source={AppImages.bg15.source}
											style={{ margin: 20, height: 130, width: 130, borderRadius: 65 }}
										/>
										<TouchableOpacity
											onPress={() => {
												this.setState({ handle: true });
											}}
											style={{ marginLeft: 25, borderBottomColor: 'black', marginTop: 15 }}
										>
											<Text style={{ color: 'black', fontSize: 22 }}>Add</Text>
										</TouchableOpacity>
									</View>
									<View
										style={{
											width: Dimensions.get('window').width,
											margin: 10,
											backgroundColor: 'white',
											height: 170,
											borderBottomWidth: 2,
											borderBottomColor: '#B26666'
										}}
									>
										<Image
											source={AppImages.bg16.source}
											style={{ margin: 20, height: 130, width: 130, borderRadius: 65 }}
										/>
									</View>
									<View
										style={{
											width: Dimensions.get('window').width,
											margin: 10,
											backgroundColor: 'white',
											height: 170,
											borderBottomWidth: 2,
											borderBottomColor: '#B26666'
										}}
									/>
								</ImageBackground>
							</View>
						</View>
					</KeyboardAwareScrollView>
				</View>
			</View>
		);
	}

	componentDidMount() {
		this.Interval = setInterval(() => {
			if (this.state.flag) {
				this.setState({ source: AppImages.bg10.source, flag: false });
			} else {
				this.setState({ source: AppImages.bg11.source, flag: true });
			}
		}, 2000);
	}

	componentWillUnmount() {
		clearInterval(this.Interval);
	}
}
