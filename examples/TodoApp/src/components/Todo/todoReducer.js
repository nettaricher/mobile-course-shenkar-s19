import { ADD_ITEM, SET_INPUT_VISIBILITY, TOGGLE_ITEM } from './todoActionTypes'

const initialState = {
  items: [],
  showAddItemInput: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.data)
      }
    case SET_INPUT_VISIBILITY:
      return {
        ...state,
        showAddItemInput: action.data
      }
    case TOGGLE_ITEM: {
      const items = state.items.filter(i => i.key !== action.data.item.key)
      const newItem = { ...action.data.item, isDone: !action.data.item.isDone }
      return {
        ...state,
        items: [...items, newItem]
      }
    }
    default:
      return state
  }
}
