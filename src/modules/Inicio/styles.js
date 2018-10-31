import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'stretch',

  },
  title:{
    textAlign:'left',
    color: colors.primary,
    fontSize: 26,
    fontWeight: 'bold',
    // paddingTop: 100,
  },
  text:{
    textAlign:'center',
    marginTop: metrics.baseMargin,
    fontSize:14,
    color:colors.dark,
    lineHeight:21,
  },
  form:{
    marginBottom:metrics.baseMargin * 2,
  },
  input:{
    backgroundColor:colors.white,
    borderRadius: metrics.baseRadius,
    height:44,
    paddingHorizontal: metrics.basePadding,
    marginBottom:metrics.baseMargin,
    
  },
  button:{
    backgroundColor:colors.primary,
    borderRadius: metrics.baseRadius,
    height:44,
    paddingHorizontal: metrics.basePadding,
    marginTop:metrics.baseMargin,
    marginBottom:metrics.baseMargin,
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
  textUserForget:{
    color:colors.regular,
    fontWeight:'normal',
    fontSize:12
  },
  error:{
    color:colors.error,
    textAlign:'center',
    marginTop: metrics.baseMargin,

  },
  forgetUser:{
    alignItems:'flex-start',
    marginTop:metrics.baseMargin,
  },
  visibilityBtn:
  {
    position: 'absolute',
    top:62,
    right: 1,
    height: 40,
    width: 35,
    padding: 5,
    flexDirection:'row'
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
      position: 'relative',
      width: '45%',
      height: '50%',
      marginTop:10,
      marginBottom:30,
  },
  logoPin: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    // marginTop:70,
    marginBottom:10,
    alignSelf:'center'  
  },
  logoPin3: {
    position: 'absolute',
    bottom:400,
    // width: '50%',
    // height: '50%',
    // marginTop:10,
    // marginBottom:100,
    // alignSelf:'center'
    
},

});
export default styles;
