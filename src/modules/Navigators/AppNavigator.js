import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import {
  View,
  BackHandler,
} from 'react-native' ;
import {Register} from '../Register';
import {Inicio} from '../Inicio';
import {ListaItems, Add, Detalhes} from '../Item';
import {Validador} from '../Placa';
import HeaderHight from './HeaderRight';
import {colors} from '../../styles';
const TabNav = TabNavigator({
    Home:{
      screen: ListaItems,
      navigationOptions: {
        tabBarLabel: 'Itens',
      }
    },
    Adicionar: {
      screen: Add,
      navigationOptions: {
        tabBarLabel: 'Add Item',
      }
    }
},
{
  tabBarPosition:'bottom',
  tabBarOptions: {
    activeTintColor: '#fff',
    upperCaseLabel: false,
    showLabel:true,
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: colors.secundary,
    },
    indicatorStyle: {
      backgroundColor: '#fff',
      height: 4,
    }
  }
});
//parte logada

const stack = StackNavigator({

  TabView: {
    screen: TabNav,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: "Início",
      headerRight:<HeaderHight/>
    })
  },
  Detalhes: {
    screen: Detalhes,
    navigationOptions: {
      title: "Detalhes"
    }
  },
},
{
  initialRouteName: 'TabView',
  navigationOptions: {
    headerTintColor: colors.white,
    headerTitleStyle: {
      /*  */
    },
    headerStyle: {
      backgroundColor: colors.primary
      
    },
  },
  headerMode: 'screen'
});

const HomeDrawer = DrawerNavigator({
   Stack: {
     screen: stack
   }
 });

//parte não logada
export const AppNavigator = StackNavigator({
  HomeDrawer: {
    screen: HomeDrawer,
    navigationOptions:{
      header: null
    }
  },
  Inicio: {
    screen: Inicio,
    navigationOptions:{
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Registrar Usuário"
    }
  },
  Validador: {
    screen: Validador,
    navigationOptions: {
      title: "Validar Placa"
    }
  }
},{
  navigationOptions: {
    headerTintColor: colors.white,
    headerTitleStyle: {
      /*  */
    },
    headerStyle: {
      backgroundColor: colors.primary 
    },
  },
  headerMode: 'screen'
})

class AppWithNavigationState extends Component{
  state = {
   
  };
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
    
  };
  constructor(props){
    super(props)
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', () => {
      return false;
    });
  }

  render(){
    const { dispatch, nav  } = this.props;
    console.log(this.props)
    return (
      <View style={{flex:1}}>
          <AppNavigator  navigation={addNavigationHelpers({ dispatch, state: nav})}/>
        </View>
      );  
  }
};


export default connect(
  state => ({
    nav: state.nav
  }),
  dispatch => ({
    dispatch: dispatch
  })
)(AppWithNavigationState)