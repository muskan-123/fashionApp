import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	FlatList,
	Modal,
	Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { Marker } from 'react-native-maps';

export default class Snap extends Component {
	constructor() {
		super();
		this.state = {
			latitude: 0,
			longitude: 0,
			items: [],
			isLoaded: false,
			modalVisible: false
		};
	}
	componentDidMount() {
		this.watchId = navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				});
				const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.latitude},${
					this.state.longitude
				}&radius=500&type=store&key=AIzaSyD03VEmXnU-GJVCU2qraHmKqBaMEw042MA`;

				fetch(url).then(res => {
					return res.json().then(resp => {
						console.log(resp.results);
						let place = [];
						resp.results.forEach(item => {
							// place.push(item.place_id);
							fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${item.place_id}
							&fields=address_component,opening_hours,photo,url&key=AIzaSyD03VEmXnU-GJVCU2qraHmKqBaMEw042MA`).then(res => {
								return console.log(res.json());
							});
						});
						console.log(place);
						this.setState({ items: resp.results, isLoaded: true });
					});
				});

				// fetch('https://myapp-8897c.firebaseio.com/places.json', {
				// 	method: 'POST',
				// 	body: JSON.stringify({
				// 		latitude: position.coords.latitude,
				// 		longitude: position.coords.longitude
				// 	})
				// })
				// 	.then(res => {
				// 		console.warn(res);
				// 	})
				// 	.catch(err => {
				// 		console.warn(err);
				// 	});
			},
			err => {
				console.warn(err);
			},
			{
				// enableHighAccuracy: true,
				// timeout: 10000,
				// maximumAge: 1,
				// distanceFilter: 1
			}
		);
	}
	render() {
		let myCoordinate = {
			latitude: this.state.latitude,
			longitude: this.state.longitude
		};
		if (!this.state.isLoaded) {
			return (
				<View>
					<Text>....loading</Text>
				</View>
			);
		} else {
			console.log(this.state.items);

			return (
				<View style={styles.MainContainer}>
					<MapView
						style={styles.mapStyle}
						zoomEnabled={true}
						zoomControlEnabled={true}
						initialRegion={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.01,
							longitudeDelta: 0.01
						}}
						region={{
							latitude: this.state.latitude,
							longitude: this.state.longitude,
							latitudeDelta: 0.01,
							longitudeDelta: 0.01
						}}
						showsUserLocation
					>
						<MapView.Marker coordinate={myCoordinate} onPress={e => console.warn(e.nativeEvent)} title="i m here" />
					</MapView>
					<View
						style={{
							position: 'absolute',
							alignSelf: 'center',
							bottom: '90%'
						}}
					>
						<TouchableOpacity
							style={{ borderRadius: 2, backgroundColor: '#3b5998', height: 40, width: 200 }}
							onPress={() => this.setState({ modalVisible: true })}
						>
							<Text style={{ color: 'white', fontSize: 16, alignSelf: 'center', marginTop: 8 }}>Get Nearby brands</Text>
						</TouchableOpacity>
					</View>
					<Modal
						transparent={true}
						animationType="slide"
						visible={this.state.modalVisible}
						onRequestClose={() => {
							console.warn('warn');
						}}
					>
						<View style={styles.ModalContainer}>
							<TouchableHighlight
								style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
								onPress={() => {
									this.setState({ modalVisible: false });
								}}
							>
								<Icon name="ios-close" size={35} />
							</TouchableHighlight>
							<FlatList
								data={this.state.items}
								// keyExtractor={(id)=>item.id}
								renderItem={({ item }) => (
									<View
										style={{
											width: Dimensions.get('window').width,
											height: Dimensions.get('window').height / 4,
											backgroundColor: '#CCCC99',
											borderBottomColor: 'white',
											borderBottomWidth: 4
										}}
									>
										<Text style={{ fontSize: 18, color: '#3b5998', marginVertical: 15, marginLeft: 10 }}>
											{item.name}
										</Text>

										<Image
											source={{ uri: item.icon }}
											style={{ alignSelf: 'flex-end', height: 60, width: 60, borderRadius: 30 }}
										/>
									</View>
								)}
							/>
						</View>
					</Modal>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	MainContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	mapStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	ModalContainer: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		backgroundColor: 'white'
	}
});
