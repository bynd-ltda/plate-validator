import {
  CLICK_ADD, CLICK_ITEM
} from './constants'

export function clickOpenScreenADD() {
  return {
    type: 'CLICK_OPEN_ADD_ITEM'
  };  
}

export function clickItem(item){
  return {
    type: CLICK_ITEM,
    payload: {...item}
  }
}
export function clickAdd(user) {
  return {
    type: CLICK_ADD,
    payload: {user}
  };  
}
export function clickNaoPode() {
  return {
    type: 'NAO_PODE'
  };  
}

