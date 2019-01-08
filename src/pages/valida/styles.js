import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, general } from './../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.primary,
    padding: metrics.basePadding,

  },
  loading: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  login: {
    //marginTop: metrics.baseMargin * 6,
    marginLeft: '18%',
    alignItems: 'center',
    color: colors.black,
    fontSize: 38,
    fontWeight: 'bold'
  },
  form: {
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  txtInputLetterRed: {
    color: colors.black,
    fontSize: 40,
    width: 100,
    borderBottomWidth: 1,
    borderColor: colors.red,
    marginTop: metrics.baseMargin * 2,

  },
  txtInputLetterYelow: {
    color: colors.black,
    fontSize: 40,
    width: 100,
    borderBottomWidth: 1,
    borderColor: colors.yelow,
    marginTop: metrics.baseMargin * 2,

  },
  txtInputNumberRed: {
    color: colors.black,
    fontSize: 40,
    width: 210,
    borderBottomWidth: 1,
    borderColor: colors.red,
    marginTop: metrics.baseMargin * 2

  },
  txtInputNumberYelow: {
    color: colors.black,
    fontSize: 40,
    width: 210,
    borderBottomWidth: 1,
    borderColor: colors.yelow,
    marginTop: metrics.baseMargin * 2

  },
  buttom: {
    backgroundColor: colors.red,
    height: 38,
    marginTop: metrics.baseMargin * 4,
    justifyContent: 'center',
    alignItems: 'center',

  },
  txtButtomSair: {
    width: 45,
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
  },
  txtButtom: {
    //marginTop: metrics.baseMargin * 3,   
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20
  },
  Link: {
    marginTop: metrics.baseMargin * 4,
  },
  txtLink: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 22
  },
  eyeArea: {
    right: metrics.baseMargin * 3,
  },
  eye: {
    marginTop: metrics.baseMargin * 2,
    width: 30,
    height: 30
  },
  firstSection: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  firstSection2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    marginLeft: '90%'
  }

})

export default styles;
