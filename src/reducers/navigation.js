import { NavigationActions } from 'react-navigation';
import { NavigatorModule, UserManagement } from '../modules';

const {AppNavigator, constants} = NavigatorModule;
const {POP, PUSH, BACK, RESET } = constants;
const {LOGOUT} = UserManagement.constants;

const firstAction = AppNavigator.router.getActionForPathAndParams('Inicio');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);
const logoutAction = AppNavigator.router.getActionForPathAndParams('Inicio');

const reduce = (state = initialNavState, action) => {
  let nextState;
  
  switch (action.type) {
    case PUSH:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.screen,params: action.params }),
        state
      );  
      break;
    case BACK:
      nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
      break;
    case RESET:
      nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({
        index:0,
        actions: [
          NavigationActions.navigate({ routeName: action.screen,params: action.params}),
        ]
      }), state);
      break;
    case LOGOUT:
      nextState = AppNavigator.router.getStateForAction(logoutAction);
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);  
      break;
  }
  return nextState || state;
}

export default reduce;
