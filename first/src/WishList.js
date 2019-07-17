import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, Easing, Image, Animated, ImageBackground, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class WishList extends Component {
	constructor(props) {
		super(props);

		this.getData();
		this.state = {
			xValue: new Animated.Value(0),
			springValue: new Animated.Value(0.3),
			arrData: [],
			loading: false,
			Message: ''
		};
	}

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
	};
	springAnimation = () => {
		Animated.timing(this.state.springValue, {
			toValue: 2,
			friction: 1
		}).start();
	};

	componentDidMount() {
		setTimeout(() => {
			this.moveAnimation();
		}, 3000);
		this.setState({ loading: true });
	}
	setData() {
		const { loading } = this.state;
		firebase
			.database()
			.ref('Wishlist')
			.set({
				wishItem: this.state.arrData
			})
			.then(res => console.log(res), this.setState({ loading: true }))
			.catch(err => console.log(err));
	}

	getData() {
		let a;

		// firebase
		// 	.database()
		// 	.ref('/Wishlist')
		// 	.once('value')
		// 	.then(snapshot => {
		// 		snapshot.forEach(child => {
		// 			a = child.val();
		// 			a.key = child.key;
		// 			console.log(a);
		// 			this.state.arrData.push(a);
		// 		});
		// 	})
		// .catch(error => alert(error));
	}
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('./res/images/fashion26.jpeg')} style={{ flex: 1 }}>
					<ImageBackground source={require('./res/images/fashion23.jpeg')} style={{ flex: 1 }}>
						<View style={styles.first}>
							<View
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									opacity: 0.6,
									backgroundColor: 'white'
								}}
							/>
							<Animated.Image
								style={{
									backgroundColor: 'powderblue',
									width: 120,
									height: 120,
									borderRadius: 60,
									left: this.state.xValue
								}}
								source={require('./res/images/fashion22.jpeg')}
							/>
						</View>
					</ImageBackground>
					<View style={styles.second}>
						<Text style={{ color: 'powderblue', fontSize: 26, alignSelf: 'center', margin: 5 }}>
							Show us your WishList
						</Text>
						<View style={{ flexDirection: 'row', marginTop: 40 }}>
							<TextInput
								onChangeText={text => this.setState({ Message: text })}
								placeholder="enter"
								defaultValue={this.state.Message}
								style={{ borderBottomColor: 'powderblue', borderBottomWidth: 3, width: '70%' }}
							/>
							<TouchableOpacity
								onPress={() => {
									var arrData1 = this.state.arrData;
									arrData1.push(this.state.Message);
									this.setState({ arrData: arrData1 });
									this.setData();
									this.setState({ Message: '' });
								}}
								style={{ marginLeft: 25, borderBottomColor: 'powderblue', marginTop: 15 }}
							>
								<Text style={{ color: 'powderblue', fontSize: 22 }}>Add</Text>
							</TouchableOpacity>
						</View>
						<FlatList
							data={this.state.arrData}
							renderItem={({ item }) => (
								<View>
									<Text style={{ fontSize: 22, color: 'powderblue', marginVertical: 15, marginLeft: 10 }}>{item}</Text>
								</View>
							)}
						/>
					</View>
				</ImageBackground>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	first: {
		flex: 2,
		backgroundColor: 'blue',
		opacity: 0.6
	},
	second: {
		flex: 8
	}
});
