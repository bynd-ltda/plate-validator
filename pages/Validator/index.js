import React, {useEffect, useState} from 'react'
import {
	ActivityIndicator,
	FlatList,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
import {fetchAutoCompletePlate, validatePlate} from "../../services/api";

export default () => {

	let timer = null;
	const [plate, setPlate] = useState('')
	const [result, setResult] = useState([])
	const [loading, setLoading] = useState(false)
	const [validated, setValidated] = useState(undefined)

	useEffect(() => {
		clearTimeout(timer);
		timer = setTimeout(function () {
			if (plate.length === 7) {
				validate(plate)
			} else {
				autocomplete(plate)
				setValidated(undefined)
			}
		}, 600);
		return () => {
		};
	}, [plate]);


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

	const validate = (plate) => {
		setLoading(true);
		validatePlate(plate).then(r => {
			setValidated(r.data.data.status === 'valid')
		}).catch(e => {
			alert('Você está sem internet, tente novamente mais tarde')
			setPlate('')
		}).finally(() => {
			setLoading(false)
		})
	}

	return <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
			}}
			value={plate}
		/>
		<Text>Não colocar o traço</Text>
		<Background validated={validated}>
			{plate.length < 7 ?
				<FlatList
					data={result}
					keyboardShouldPersistTaps="always"
					refreshing={loading}
					onRefresh={() => {
					}}
					style={styles.flexContainer}
					ListEmptyComponent={() => (<Empty plate={plate}/>)}
					renderItem={({item}, index) => (<Item key={parseInt(index)} item={item} onSelect={setPlate}/>)}
				/> : (<>
					{loading ? <ActivityIndicator size='large' style={{margin: 20}}/> :
						<Validate validated={validated} setPlate={setPlate} plate={plate}/>
					}
				</>)}
		</Background>
	</KeyboardAvoidingView>
}

const Background = ({validated, children}) => {
	if (validated === undefined) return <>{children}</>
	return validated ? <GreenBackground>{children}</GreenBackground> : <RedBackground>{children}</RedBackground>
}

const Item = ({item, onSelect}) => (
	<TouchableOpacity onPress={() => onSelect(item.split('-').join(''))}><Text
		style={styles.item}>{item}</Text></TouchableOpacity>
)

const GreenBackground = ({children}) => (
	<View style={styles.green}>
		{children}
	</View>
)

const RedBackground = ({children}) => (
	<View style={styles.red}>
		{children}
	</View>
)

const Empty = ({plate}) => (<>
	<Text style={styles.item}>{plate.toUpperCase()}
		{plate.length < 7 && '...'}
	</Text>
</>)

const Validate = ({validated, setPlate, plate}) => (<View>
	<Text style={styles.title}>{validated ? 'OK' : 'Problema'}</Text>
	<Text style={styles.subtitle}>{validated ? 'Carro regular' : 'Carro irregular'}</Text>
	<TouchableOpacity
		style={{backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', padding: 15, marginTop: 20}}
		onPress={() => setPlate('')}><Text style={styles.subtitle}>Validar outro carro</Text></TouchableOpacity>
</View>)


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
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 40,
		paddingRight: 40,
		textAlign: 'center'
	},
	green: {
		backgroundColor: 'rgb(102,181,108)',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flex: 1,
		width: '100%',
	},
	red: {
		backgroundColor: 'rgba(222,42,38,0.69)',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flex: 1,
		width: '100%',
	},
	title: {
		fontSize: 60,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	}, subtitle: {
		fontSize: 22,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	}
});
