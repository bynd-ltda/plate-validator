import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, general} from './../../styles';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: colors.primary,
    padding: metrics.basePadding,

   },
   login:{
     marginTop: metrics.baseMargin * 6,
     alignItems: 'center',
     color: colors.black,
     fontSize: 28,
     fontWeight:'bold'
   },
   form:{
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding 
   },
   txtInput:{
    height:40,
    color: colors.black,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: colors.black,
    marginTop: metrics.baseMargin * 2

   },
   buttom:{
    backgroundColor:colors.secundary,
    height:38,
    marginTop: metrics.baseMargin * 4,
    justifyContent: 'center',
    alignItems: 'center',
    
   },
   txtButtom:{
    //marginTop: metrics.baseMargin * 3,   
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20
   },
   Link:{
    marginTop: metrics.baseMargin * 4,
   },
   txtLink:{
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 22
   },
   eye:{
       width: 30,
       height: 30
   }

})

export default styles;
