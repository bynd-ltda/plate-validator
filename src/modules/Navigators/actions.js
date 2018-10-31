import {
  PUSH,
  DEEPLINK,
  POP,
  BACK,
  RESET
} from './constants'
import {
  LOGOUT,
} from '../UserManagement/constants'

export function deeplink(screen, params) {
  return {
    type: DEEPLINK,
    screen,
    params
  };
}

export function push(screen, params) {
  return {
    type: PUSH,
    screen,
    params
  };
}
export function pop() {
  return {
    type: POP
  };
}

export function reset(screen) {
  return {
    type: RESET,
    screen
  };
}

export function back() {
  return {
    type: BACK
  };
}


export function logout() {
  return {
    type: LOGOUT,
  };
}