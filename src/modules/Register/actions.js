import {
  CLICK_REGISTER
} from './constants';

export function clickRegistrar(user) {
  return {
    type: CLICK_REGISTER,
    payload: {user}
  };
}