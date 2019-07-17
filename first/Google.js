import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { LoginManager, GraphRequest, GraphRequestManager, AccessToken, LoginButton } from 'react-native-fbsdk';

class Google extends Component {
	constructor(props) {
		super(props);
		this.state = { userInfo: [] };
	}

	_responseInfoCallback = (error, result) => {
		alert(result);
		if (error) {
			alert('Error fetching data: ' + error.toString());
		} else {
			alert(result);
		}
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

		// function(result) {
		// 	if (result.isCancelled) {
		// 		console.log('Login cancelled');
		// 	} else {
		// 		this.getUserInfoFromFacebook();
		// 		console.log('Login success with permissions: ' + result.grantedPermissions.toString());
		// 	}
		// },
		// function(error) {
		// 	console.log('Login fail with error: ' + error);
		// }
		//);
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

	handle = async () => {
		console.warn(GoogleSignin.configure());
		await GoogleSignin.configure({
			webClientId: '677415044925-6s7alg6dr7g8mmnqetdrle31ih0mineo.apps.googleusercontent.com'
		});
		await GoogleSignin.signIn()
			.then(user => {
				console.warn(user);
			})
			.catch(err => {
				console.warn(err);
			});
	};
	render() {
		return (
			<View>
				<TouchableOpacity onPress={() => this.fbLog()}>
					<Text>login</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Google;
