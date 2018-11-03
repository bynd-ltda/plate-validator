import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, general} from './../../styles';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: metrics.basePadding,

   },
   txt:{
    fontSize: 20,
    fontWeight: 'bold'
   },
   buttom:{
    backgroundColor:colors.secundary,
    height:40,
    width: '100%',
    marginTop: metrics.baseMargin * 4,
    justifyContent: 'center',
    alignItems: 'center',
    
   },
   txtButtom:{   
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20
   },
   email: {
    marginTop: metrics.baseMargin * 4,
    marginLeft: '10%',
    width: 110,
    height: 110,
  }
  

})

export default styles;
