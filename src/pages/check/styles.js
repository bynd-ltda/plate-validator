import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, general} from './../../styles';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: metrics.basePadding,
    flexDirection: 'column'

   },
   check: {
     marginTop: metrics.baseMargin * 4,
     marginLeft: '10%',
     width: 110,
     height: 110,
   },
   close: {
    marginTop: metrics.baseMargin * 4,
    marginLeft: '25%',
    width: 120,
    height: 120,
  },
   txtValid: {
    marginTop: metrics.baseMargin * 2,
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold'
   },
   txtSchedule:{
    marginTop: metrics.baseMargin * 2,
    fontSize: 20,
    fontWeight: 'bold'
   },
   txtBolsao:{
    marginTop: metrics.baseMargin * 2,
    fontSize: 20,
    fontWeight: 'bold'
   },
   buttomV:{
    backgroundColor:colors.red,
    height:40,
    width: 200,
    marginTop: metrics.baseMargin * 4,
    justifyContent: 'center',
    alignItems: 'center',
    
   },
   txtButtomV:{   
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20
   },
   buttom:{
    backgroundColor:colors.red,
    height:40,
    width: '80%',
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
  

})

export default styles;
