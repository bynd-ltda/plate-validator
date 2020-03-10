import React, {useEffect, useState} from 'react'
import * as Font from 'expo-font';
import {
	ActivityIndicator,
	FlatList,
	Image,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
import {fetchAutoCompletePlate, validatePlate} from "../../services/api";
import Ok from './../../assets/ok.png';
import No from './../../assets/no.png';

export default () => {

	let timer = null;
	const [plate, setPlate] = useState('')
	const [result, setResult] = useState([])
	const [loading, setLoading] = useState(false)
	const [validated, setValidated] = useState(undefined)


	useEffect(() => {
		if (plate.length === 7) {
			validate(plate)
		} else {
			clearTimeout(timer);
			timer = setTimeout(function () {
				autocomplete(plate)
				setValidated(undefined)
			}, 600);
		}
		return () => {
			clearTimeout(timer);
		};
	}, [plate]);


	const autocomplete = (plate) => {
		setLoading(true);
		fetchAutoCompletePlate(plate).then(r => {
			setResult(r.data.data || [])
		}).catch(e => {
			setResult([])
		}).finally(() => {
			setLoading(false)
		})
	}

	const validate = (plate) => {
		setLoading(true);
		validatePlate(plate).then(r => {
			setValidated(r.data.data.status === 'valid' && !r.data.data.warning)
		}).catch(e => {
			alert('Você está sem internet, tente novamente mais tarde')
			setPlate('')
		}).finally(() => {
			setLoading(false)
		})
	}

	return <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
		<StyledFontText style={styles.title}>Digite a placa do carro</StyledFontText>
		<StyledFontText style={styles.subtitle}>Não colocar o traço</StyledFontText>
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
	<TouchableOpacity onPress={() => onSelect(item.split('-').join(''))}><StyledFontText
		style={styles.item}>{item}</StyledFontText></TouchableOpacity>
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
	<StyledFontText style={styles.item}>{plate.toUpperCase()}
		{plate.length < 7 && '...'}
	</StyledFontText>
</>)

const Validate = ({validated, setPlate, plate}) => (validated ? (
	<View style={{justifyContent: 'center', alignItems: 'center'}}>
		<Image source={Ok} style={{width: 30, height: 30}}/>
		<StyledFontText style={[styles.title, {color: '#83ba75'}]}> Validado </StyledFontText>
		<StyledFontText style={[styles.subtitle, {color: '#83ba75'}]}>Carro regular</StyledFontText>
		<TouchableOpacity
			style={styles.button}
			onPress={() => setPlate('')}><StyledFontText style={[styles.subtitle, {color: 'white'}]}>Validar outro
			carro</StyledFontText></TouchableOpacity>
	</View>) : (<View style={{justifyContent: 'center', alignItems: 'center'}}>
	<Image source={No} style={{width: 30, height: 30}}/>
	<StyledFontText style={[styles.title, {color: 'red'}]}>Não Validado</StyledFontText>
	<StyledFontText style={[styles.subtitle, {color: 'red'}]}>Verifique se digitou certo a placa</StyledFontText>
	<TouchableOpacity
		style={styles.button}
		onPress={() => setPlate('')}><StyledFontText style={[styles.subtitle, {color: 'white'}]}>Validar outro
		carro</StyledFontText></TouchableOpacity>
</View>))

const StyledFontText = ({style, children}) => {
	const [fontLoaded, setFontLoaded] = useState(true)
	useEffect(() => {
		Font.loadAsync({
			'source-sans-bold': require('./../../assets/fonts/SourceSansPro-Bold.ttf'),
		}).then(() => {
			setFontLoaded(true)
		}).catch((e) => {
			console.error(e)
		})
		return () => {
		}
	}, [])
	return fontLoaded && <Text style={style}>{children}</Text>
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
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 40,
		paddingRight: 40,
		textAlign: 'center',
		borderRadius: 40,
		margin: 10,
		borderWidth: 1,
		borderColor: "#6d3ea3"
	},
	green: {
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	red: {
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		color: "#6d3ea3"
	},
	subtitle: {
		fontSize: 16,
		textAlign: 'center',
		color: "#6d3ea3"
	},
	button: {
		backgroundColor: '#6d3ea3',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 15,
		paddingBottom: 15,
		marginTop: 20,
		borderRadius: 40
	}
});
