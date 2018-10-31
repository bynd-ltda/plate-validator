import {
    CLICK_VALIDAR
  } from './constants';
  
  export function clickValidar(user) {
    return {
      type: CLICK_VALIDAR,
      payload: {user}
    };
  }