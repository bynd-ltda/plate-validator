import React, {useState} from 'react'
import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import {fetchAutoCompletePlate} from "../../services/api";

export default () => {
	const [plate, setPlate] = useState('')
	const [result, setResult] = useState([])
	const [loading, setLoading] = useState(false)

	const autocomplete = (plate) => {
		setLoading(true);
		fetchAutoCompletePlate(plate).then(r => {
			setResult(r.data.data)
		}).catch(e => {
			console.warn(e)
		}).finally(() => {
			setLoading(false)
		})
	}

	return <>
		<View style={styles.container}>
			<Text>Digite a placa do carro</Text>
			<TextInput
				style={styles.input}
				autoCorrect={false}
				autoFocus
				clearButtonMode='always'
				placeholder="_ _ _ _ _ _ _ "
				maxLength={7}
				onChangeText={(text) => {
					setPlate(text)
					autocomplete(text)
				}}
				value={plate}
			/>
			<Text>Não colocar o traço</Text>
			<FlatList
				data={result}
				refreshing={loading}
				onRefresh={() => {
				}}
				style={styles.flexContainer}
				renderItem={({item}) => (<><Text style={styles.item}>{item}</Text></>)}
			/>
		</View>
	</>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50,
	},
	flexContainer: {
		width: '100%',
	},
	item: {
		fontSize: 40,
		color: 'gray',
		borderColor: 'lightgray',
		padding: 15,
		borderBottomWidth: 1,
		borderTopWidth: 1,
		textAlign: 'center'
	},
	input: {
		fontSize: 40,
		borderWidth: 2,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 40,
		paddingRight: 40,
		borderColor: 'lightgray',
		textAlign: 'center'
	}
});
