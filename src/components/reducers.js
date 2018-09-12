import * as Actions from './actions'
import { combineReducers } from 'redux'

const initialState = {
    users: []
}

const productsApp = (state = initialState, action) => {  
  return  (typeof state === 'undefined') ? initialState : state
}

const getProducts = (state = [], action) => {
    switch (action.type) {
        case Actions.GET_PRODUCTS:
        return [...state]
    default:
      return state
    }   
  }

const initApp = combineReducers({
    productsApp,
    getProducts
  })
  
export default initApp 