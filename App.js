import React from 'react';
import {Text, View} from 'react-native';
import Validator from './pages/Validator'
import bugsnag from '@bugsnag/expo';

const bugsnagClient = bugsnag();

const ErrorBoundary = bugsnagClient.getPlugin('react')

export default function App() {
	return (<>
			<ErrorBoundary FallbackComponent={ErrorView}>
				<Validator/>
			</ErrorBoundary>
		</>
	);
}
const ErrorView = ({}) => <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
	<Text>Aconteceu algum
		problema, feche e abra o app</Text>
</View>



