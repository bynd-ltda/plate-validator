import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',

  },
  title:{
    textAlign:'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text:{
    textAlign:'center',
    marginTop: metrics.baseMargin,
    fontSize:14,
    color:colors.light,
    lineHeight:21,
  },
  form:{
    marginTop:metrics.baseMargin * 2,
  },
  input:{
    backgroundColor:colors.white,
    borderRadius: metrics.baseRadius,
    height:44,
    paddingHorizontal: metrics.basePadding,
  },
  button:{
    backgroundColor:colors.primary,
    borderRadius: metrics.baseRadius,
    height:44,
    paddingHorizontal: metrics.basePadding,
    marginTop:metrics.baseMargin,
    justifyContent:'center',
    alignItems: 'center',
    padding: 12,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 4,
  },
  buttonText:{
    color:colors.white,
    fontWeight:'bold',
    fontSize:14
  },
  textRegister:{
    color:colors.white,
    fontWeight:'normal',
    fontSize:12
  },
  error:{
    color:colors.error,
    textAlign:'center',
    marginTop: metrics.baseMargin,

  },
  registerUser:{
    alignItems:'flex-end',
    marginTop:metrics.baseMargin,
  }


});
export default styles;
