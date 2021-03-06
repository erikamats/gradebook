import * as ActionTypes from "../actions/types"
import { updateObject } from './utilityFunctions'

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_DB_ASSIGNMENTS_STARTED:
      return updateObject(state, {
        isLoading: true,
        error: false
      })
    case ActionTypes.GET_DB_ASSIGNMENTS_SUCCESS:
      return updateObject(state, {
        ...action.payload,
        isLoading: false,
        error: false
      })
    case ActionTypes.GET_DB_ASSIGNMENTS_FAILURE:
      return updateObject(state, {
        isLoading: false,
        error: action.error
      })
    case ActionTypes.ADD_DB_ASSIGNMENT_STARTED:
      return updateObject(state, {
        isLoading: true,
        error: false
      })
    case ActionTypes.ADD_DB_ASSIGNMENT_SUCCESS:
      return updateObject(state, {
        [action.payload._id]: action.payload,
        isLoading: false,
        error: false
      })
    case ActionTypes.ADD_DB_ASSIGNMENT_FAILURE:
      return updateObject(state, {
        isLoading: false,
        error: action.error
      })
    case ActionTypes.REMOVE_ASSIGNMENT:
      return updateObject(state, {
        [action.payload._id]: undefined
      })
    case ActionTypes.UPDATE_ASSIGNMENT:
      return updateObject(state, {
        [action.payload._id]: updateObject(state[action.payload._id], action.payload)
      })
    default: return state;
  }
}