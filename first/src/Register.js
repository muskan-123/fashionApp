import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Dimensions,
	Button,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
	Keyboard
} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppImages } from './res/images';

import Logout from './Logout';
import Profile from './profile';
import SettingsScreen from './Favourties';
import { createDrawerNavigator } from 'react-navigation';
import Video from 'react-native-video';
import signUp from './signUp';
import Cart from './Cart.js';
import WishList from './WishList';

class HomeScreen extends Component {
	renderImageBackground(imageObj) {
		const { source, style } = imageObj;
		return (
			<ImageBackground
				source={source}
				style={[style, { justifyContent: 'center', alignItems: 'center' }]}
				resizeMode="stretch"
			>
				<Text
					style={{
						color: 'white',
						fontSize: 25,
						textShadowColor: 'white',
						textShadowOffset: {
							width: 3,
							height: 3
						},
						shadowOpacity: 2,
						textShadowRadius: 3
					}}
				>
					#Black world{' '}
				</Text>
			</ImageBackground>
		);
	}
	renderImageBackground1(imageObj1) {
		const { source, style } = imageObj1;
		return (
			<ImageBackground source={source} style={style} resizeMode="stretch">
				<Text
					style={{
						color: 'white',
						fontSize: 25,
						textShadowColor: 'white',
						textShadowOffset: {
							width: 3,
							height: 3
						},
						shadowOpacity: 2,
						textShadowRadius: 3
					}}
				/>
			</ImageBackground>
		);
	}
	renderImageBackground2(imageObj2) {
		const { source, style } = imageObj2;
		return <ImageBackground source={source} style={style} resizeMode="stretch" />;
	}
	renderImageBackground3(imageObj3) {
		const { source, style } = imageObj3;
		return <ImageBackground source={source} style={style} resizeMode="stretch" />;
	}
	renderImageBackground4(imageObj4) {
		const { source, style } = imageObj4;
		return <ImageBackground source={source} style={style} resizeMode="stretch" />;
	}
	renderImageBackground5(imageObj5) {
		const { source, style } = imageObj5;
		return <ImageBackground source={source} style={style} resizeMode="stretch" />;
	}

	render() {
		const { source, style } = AppImages.bg1;
		const imageObj = AppImages.bg3;
		const imageObj1 = AppImages.bg4;
		const imageObj2 = AppImages.bg5;
		const imageObj3 = AppImages.bg6;
		const imageObj4 = AppImages.bg7;
		const imageObj5 = AppImages.bg8;

		return (
			<View style={{ flex: 1, backgroundColor: '#8d6e63', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}>
				<View
					style={{
						flex: 0.8,
						height: 50,
						flexDirection: 'row',
						backgroundColor: 'white',
						width: '100%',
						borderColor: '#8d6e63',
						borderRadius: 5,
						borderWidth: 3
					}}
				>
					<TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} style={{ padding: 15 }}>
						<Icon color="#8d6e63" name="ios-menu" size={30} />
					</TouchableOpacity>
					<TouchableOpacity style={{ padding: 15 }}>
						<Icon color="#8d6e63" name="ios-search" size={30} />
					</TouchableOpacity>

					<TextInput style={{ width: 180, marginBottom: 10, borderBottomWidth: 2, borderBottomColor: '#8d6e63' }} />

					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('Logout')}
						style={{ marginLeft: 24, padding: 15 }}
					>
						<Icon color="#8d6e63" name="ios-log-out" size={30} />
					</TouchableOpacity>
				</View>

				<View style={{ flex: 9.2, backgroundColor: '#8d6e63', opacity: 0.7 }}>
					<ImageBackground
						source={require('./res/images/fashion26.jpeg')}
						style={[AppImages.bg9.style, { backgroundColor: '#8d6e63' }]}
						resizeMode="stretch"
					>
						<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
							<View>
								<View style={{ height: 150, width: Dimensions.get('window').width }}>
									<Video
										source={require('./res/images/video2.mp4')}
										ref={ref => {
											this.player = ref;
										}}
										onBuffer={this.onBuffer}
										onError={this.videoError}
										fullscreen={true}
										style={styles.backgroundVideo}
										resizeMode="stretch"
										repeat={true}
									/>
								</View>

								<View style={styles.first}>{this.renderImageBackground(imageObj)}</View>
								<View style={styles.second}>{this.renderImageBackground1(imageObj1)}</View>
								<View style={styles.third}>{this.renderImageBackground2(imageObj2)}</View>
								<View style={styles.fourth}>
									{this.renderImageBackground3(imageObj3)}
									<TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('App')}>
										<Text style={{ color: 'white', textAlign: 'center', padding: 5 }}>{'go back'}</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.fifth}>{this.renderImageBackground4(imageObj4)}</View>

								<View style={styles.sixth}>{this.renderImageBackground5(imageObj5)}</View>
							</View>
						</ScrollView>
					</ImageBackground>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		margin: 20,
		padding: 5,
		borderRadius: 5,
		backgroundColor: 'blue',
		alignSelf: 'center'
	},
	first: {
		//flex: 1,
		backgroundColor: '#8d6e63',
		margin: 7,
		height: 100
	},
	second: {
		//  flex: 1,
		backgroundColor: '#8d6e63',
		margin: 7,
		height: 100
	},

	third: {
		//flex: 1,
		backgroundColor: '#8d6e63',
		margin: 7,
		height: 100
	},
	fourth: {
		// flex: 1,
		backgroundColor: '#8d6e63',
		margin: 7,
		height: 100
	},
	fifth: {
		//flex: 1,
		backgroundColor: '#8d6e63',
		margin: 7,
		height: 100
	},
	sixth: {
		//flex: 1,
		backgroundColor: '#8d6e63',
		margin: 7,
		height: 100
	},
	backgroundVideo: {
		padding: 20,
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});

const TabNavigator = createBottomTabNavigator({
	//Register: Register,
	Home: {
		screen: HomeScreen,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => <Icon name="ios-home" color={tintColor} size={24} />
		}),
		tabBarOptions: {
			showIcon: true,
			activeTintColor: 'black',
			inactiveTintColor: '#586589',
			style: {
				backgroundColor: '#4e342e'
			}
		}
	},
	Favourites: {
		screen: SettingsScreen,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => <Icon name="ios-heart" color={tintColor} size={24} />
		}),
		tabBarOptions: {
			showIcon: true,
			activeTintColor: '#8d6e63',
			inactiveTintColor: '#586589',
			style: {
				backgroundColor: '#171F33'
			}
		}
	},
	MyList: {
		screen: signUp,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => <Icon name="ios-search" color={tintColor} size={24} />
		}),
		tabBarOptions: {
			showIcon: true,
			activeTintColor: '#8d6e63',
			inactiveTintColor: '#586589',
			style: {
				backgroundColor: '#171F33'
			}
		}
	},

	Cart: {
		screen: Cart,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => <Icon name="ios-cart" color={tintColor} size={24} />
		}),
		tabBarOptions: {
			showIcon: true,
			activeTintColor: '#8d6e63',
			inactiveTintColor: '#586589',
			style: {
				backgroundColor: '#171F33'
			}
		}
	}
});
const customDrawerContent = props => (
	<View>
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Image
				source={require('./res/images/fashion12.jpeg')}
				style={{ marginTop: 30, marginBottom: 20, height: 80, width: 80, borderRadius: 40 }}
			/>
		</View>
		<View>
			<DrawerItems {...props} />
		</View>
	</View>
);

const DrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: TabNavigator,
			navigationOptions: {
				drawerLabel: 'Home',
				drawerIcon: <Icon name="ios-more" size={20} />
			}
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				drawerLabel: 'Profile',
				drawerIcon: <Icon name="ios-person" size={20} />
			}
		},
		WishList: {
			screen: WishList,
			navigationOptions: {
				drawerLabel: 'WishList',
				drawerIcon: <Icon name="ios-cart" size={20} />
			}
		}
	},
	{
		initialRouteName: 'Home',
		contentComponent: customDrawerContent,
		drawerOpenRoute: 'drawerOPEN',
		drawerCloseRoute: 'drawerClose',
		drawerToggleRoute: 'drawertoggle'
	},
	{
		drawerBackgroundColor: '#FDEEF4',
		contentOptions: {
			activeTintColor: 'white',
			activeBackgroundColor: '#8d6e63',
			inactiveTintColor: 'black',
			labelStyle: 'normal',
			drawerStyle: {}
		},
		style: {
			backgroundColor: 'transparent',
			flex: 1
		}
	}
);
const AppContainer = createAppContainer(DrawerNavigator);
export default createAppContainer(AppContainer);
