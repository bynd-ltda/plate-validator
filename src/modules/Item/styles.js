import { 
    StyleSheet,
    Dimensions,
    PixelRatio, } from 'react-native';
import {colors,metrics} from '../../styles';    
const window = Dimensions.get('window');
const widthRatio = window.width * PixelRatio.get();
const styles = StyleSheet.create({
    containerMsg:{
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingLeft: 15,
        paddingRight: 15,
    },
    container: {
        flex: 1,
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingLeft: 10,
        // paddingRight: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    contentContainer: {
        flex: 1,
    },
    adesao: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingLeft: 16,
        paddingRight: 16,
        height: 55
    },
    textAdesao: {
        fontSize: widthRatio > 600 ? 16 : 14,
        color: '#505050'
    },
    line: {
        backgroundColor: '#ccc',
        height: 1
    },
    floatButton:{
        borderWidth:1,
        borderColor:'transparent',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        height:50,
        backgroundColor:colors.primary,
        opacity:0.9,
        borderRadius:100,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
    },
    containerAdd:{
        flex: 1,
        backgroundColor: colors.whiteTransparent,
        padding: metrics.basePadding * 2,
        justifyContent: 'center',
        alignItems: 'stretch',
    
      },
      title:{
        textAlign:'center',
        color: colors.dark,
        fontSize: 24,
        fontWeight: 'bold',
      },
      text:{
        textAlign:'center',
        marginTop: metrics.baseMargin,
        fontSize:14,
        color:colors.darkTransparent,
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
        marginTop:metrics.baseMargin * 2,
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
