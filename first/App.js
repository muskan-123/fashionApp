import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	BackHandler,
	Modal,
	TouchableOpacity,
	ImageBackground,
	Image,
	Keyboard,
	Dimensions
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/Register';
import Logout from './src/Logout';
import { AppImages } from './src/res/images';
import Icon from 'react-native-vector-icons/Ionicons';
import splash from './src/splash.js';
import Video from 'react-native-video';
import Phone from './Phone';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import signUp from './src/signUp.js';
import reducer from './src/reducer/reducer.js';
import { LoginManager, GraphRequest, GraphRequestManager, AccessToken, LoginButton } from 'react-native-fbsdk';

const store = createStore(reducer);

class App extends Component {
	static navigationOptions = {
		title: 'F is fashion!!!!!',
		header: null
	};

	Interval = 0;

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			visible: true,
			username: '',
			password: '',
			userInfo: [],
			res: '',
			color: 'white',
			flag: true
		};

		firebase.initializeApp({
			apiKey: 'AIzaSyDT6_jPRFDak2vMUojDILcnLxiO4CI-FBE',
			authDomain: 'myapp-8897c.firebaseapp.com',
			databaseURL: 'https://myapp-8897c.firebaseio.com',
			projectId: 'myapp-8897c',
			storageBucket: '',
			messagingSenderId: '677415044925',
			appId: '1:677415044925:web:b19a36b61bfd3c76'
		});
	}
	_responseInfoCallback = (error, result) => {
		console.log('callled');
		console.log(result);
		this.setState({ res: result });
		this.setData();
		console.warn(this.state.res.picture.data.url);
		if (error) {
			console.log('Error fetching data: ' + error.toString());
		} else {
		}
	};

	setData = () => {
		console.warn(this.state.res);
		firebase
			.database()
			.ref('facebook')
			.push({
				users: this.state.res.email
			})
			.then(() => {
				// this.props.navigation.navigate('test');
				alert('You have successfully logged in');
			})
			.catch(err => {
				console.log(err);
			});
	};

	fbLog() {
		LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then(resolve =>
				AccessToken.getCurrentAccessToken().then(data => {
					const infoRequest = new GraphRequest('/me?fields=name,picture,email', null, this._responseInfoCallback);
					new GraphRequestManager().addRequest(infoRequest).start();
				})
			)
			.catch(rejects => {
				console.log(rejects);
			});
	}
	fbGraphPath() {
		return '/me?fields=id,email,first_name,last_name';
	}

	getUserInfoFromFacebook() {
		const infoRequest = new GraphRequest(this.fbGraphPath(), null, (error, result) => {
			if (error) {
				alert('cannot get user data');
				reject('Cannot get user info from facebook');
			} else {
				AccessToken.getCurrentAccessToken()
					.then(data => {
						const accessToken = data.accessToken.toString();
					})
					.catch(error => {
						console.log(`cannot get access token ${error}`);
						reject('Cannot get access token from facebook');
					});
			}
		});
		new GraphRequestManager().addRequest(infoRequest).start();
	}

	loginUser = (username, password) => {
		try {
			if (this.state.password.length < 6) {
				alert('please enter passwsord of length more than 6');
				return;
			}
			firebase.auth().createUserWithEmailAndPassword(username, password);
		} catch (error) {
			console.log(error.toString());
		}
	};
	signUpUser = (username, password) => {
		try {
			console.warn(username);
			firebase.auth().signInWithEmailAndPassword(username, password);
		} catch (error) {
			console.log(error.toString());
		}
	};

	// Myfun() {

	//   if (this.state.value == "") {
	//     alert("please enter username")
	//   }
	//   else {
	//     alert("successfull")
	//   }
	//   Keyboard.dismiss()
	// }

	// renderTopView(count) {
	// 	return (
	// 		<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
	// 			<Text
	// 				style={{
	// 					fontSize: 40,
	// 					color: '#4e342e',
	// 					alignSelf: 'center',
	// 					textAlign: 'center',
	// 					marginTop: 30,
	// 					textShadowColor: 'white',
	// 					textShadowOffset: {
	// 						width: -2,
	// 						height: 2
	// 					},
	// 					textShadowRadius: 10,
	// 					shadowOpacity: 5
	// 				}}
	// 			>
	// 				!!Login for more!! {count}
	// 			</Text>
	// 		</View>
	// 	);
	// }

	// renderWelcomeText() {
	// 	return (
	// 		<Text
	// 			style={{
	// 				textAlign: 'center',
	// 				fontSize: 30,
	// 				fontWeight: 'bold',
	// 				color: '#34495E',
	// 				marginTop: 30,
	// 				textShadowColor: 'white',
	// 				textShadowOffset: {
	// 					width: -2,
	// 					height: 2
	// 				},
	// 				textShadowRadius: 10,
	// 				shadowOpacity: 5
	// 			}}
	// 		>
	// 			Welcome here
	// 		</Text>
	// 	);
	// }

	render() {
		const { count } = this.state;
		const source = AppImages.bg2.source;

		return (
			<View style={{ flex: 1 }}>
				<ImageBackground source={require('./src/res/images/fashion21.jpeg')} style={{ flex: 1 }}>
					<View
						style={{
							backgroundColor: 'white',
							position: 'absolute',
							top: 0,
							bottom: 0,
							right: 0,
							left: 0,
							opacity: 0.6
						}}
					/>
					<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
						{/* <Video
						source={require('./src/res/images/video6.mp4')}
						ref={ref => {
							this.player = ref;
						}}
						onBuffer={this.onBuffer}
						onError={this.videoError}
						fullscreen={true}
						style={styles.backgroundVideo}
						resizeMode="stretch"
						repeat={true}
					/> */}
						<Icon name={'logo-sass'} size={140} color={'#566573'} />
					</View>

					<View style={{ flex: 7 }}>
						<View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, opacity: 0.7 }} />
						{/* {this.renderTopView(count)} */}
						<View style={styles.container}>
							{/* {this.renderWelcomeText()} */}

							<TextInput
								style={styles.input}
								onChangeText={username => this.setState({ username })}
								underlineColorAndroid="white"
								placeholder="username"
								// placeholderTextColor="#D6DBDF  "
							/>
							<TextInput
								onChangeText={password => this.setState({ password })}
								style={styles.Passinput}
								underlineColorAndroid="white"
								placeholder="password"
								// placeholderTextColor="#D6DBDF  "
								secureTextEntry={true}
							/>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									return (
										clearInterval(this.Interval),
										this.loginUser(this.state.username, this.state.password),
										this.props.navigation.navigate('test')
									);
								}}
							>
								<Text style={{ color: 'white', alignSelf: 'center', marginTop: 2 }}>Login</Text>
							</TouchableOpacity>
							<View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
								<TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('test')}>
									<Text style={{ fontSize: 16, marginTop: 4, color: '#34495E' }}>Don't have an account ?</Text>
								</TouchableOpacity>
							</View>
							<View style={{ flexDirection: 'row', marginTop: 20 }}>
								<TouchableOpacity
									style={{
										backgroundColor: '#3b5998',
										alignSelf: 'center',
										width: '	90%',
										marginHorizontal: '5%',
										height: 40
									}}
									onPress={() => this.fbLog()}
								>
									<Text style={{ color: 'white', marginLeft: 80, marginTop: 9, fontSize: 13 }}>
										REGISTER WITH FACEBOOK
									</Text>
								</TouchableOpacity>
							</View>
							<View style={{ flexDirection: 'row', marginTop: 20 }}>
								<TouchableOpacity
									style={{
										backgroundColor: '#717D7E',
										alignSelf: 'center',
										width: '	90%',
										marginHorizontal: '5%',
										height: 40
									}}
									onPress={() => this.props.navigation.navigate('Phone')}
								>
									<Text style={{ color: 'white', marginLeft: 80, marginTop: 9, fontSize: 13 }}>
										REGISTER WITH MOBILE
									</Text>
								</TouchableOpacity>
							</View>

							{/* <View style={{ flexDirection: 'row', marginTop: 25 }}>
							<Text style={{ margin: 8, fontSize: 20, color: this.state.color }}>Follow us on </Text>
							<TouchableOpacity style={{ marginTop: 7, marginRight: 15 }}>
								<Icon name={'logo-facebook'} color={'#212F3C'} size={40} />
							</TouchableOpacity>
							<TouchableOpacity style={{ marginTop: 7, marginRight: 8 }}>
								<Icon name={'logo-instagram'} color={'white'} size={40} />
							</TouchableOpacity>
						</View> */}
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
	componentDidMount() {
		this.Interval = setInterval(() => {
			this.setState({ count: this.state.count + 1 });
		}, 1000);
		this.Interval = setInterval(() => {
			if (this.state.flag) {
				this.setState({ color: '#4e342e', flag: false });
			} else {
				this.setState({ color: 'white', flag: true });
			}
		}, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.Interval);
	}

	// componentDidMount() {
	//   BackHandler.addEventListener('hardwareBackPress', this.exi);
	// }
}

const styles = StyleSheet.create({
	container: {
		flex: 8
	},
	input: {
		marginVertical: 5,
		borderBottomColor: '#212F3C',
		width: '	90%',
		borderBottomWidth: 2,
		marginHorizontal: '5%'
	},
	Passinput: {
		marginVertical: 5,
		borderBottomColor: '#212F3C',
		width: '	90%',
		borderBottomWidth: 2,
		marginHorizontal: '5%'
	},
	button: {
		margin: 15,
		padding: 5,
		borderRadius: 2,
		backgroundColor: '#85929E',
		alignSelf: 'center',
		width: '	90%',
		marginHorizontal: '5%',
		height: 40
	},
	button1: {
		marginLeft: 4,
		borderRadius: 5,
		height: 30,
		alignSelf: 'center',
		marginBottom: 10
	},
	backgroundVideo: {
		padding: 20,
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		alignItems: 'stretch'
	}
});

const AppNavigator = createStackNavigator(
	{
		splash: splash,
		App: App,
		test: HomeScreen,
		Logout: Logout,
		signUp: signUp,
		Phone: Phone
	},
	{
		initialRouteName: 'App',
		headerMode: 'none'
	}
);

const AppContainer = createAppContainer(AppNavigator);

class Func extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);
	}
}

export default Func;
