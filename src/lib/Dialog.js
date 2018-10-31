import {Alert} from 'react-native';

export const showAlert=(msg)=>{
    Alert.alert(
        'Atenção!',
        msg,
        [
            {text: 'Ok', onPress: () => {}},
        ],
        { cancelable: false }
    );
}