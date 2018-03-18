/* eslint indent:0 */
/* eslint no-unreachable:0 */
import ListData from './items-data'

const fav_defaults = {
  list: ListData,
  favourites: []
}

export default (state=fav_defaults, action) => {
  let py = action.payload

  switch(action.type) {
    case 'GET_LIST':
      return { ...state, list: py }
      break

    case 'SELECT_ITEM':
      return { ...state, favourites: selectItem(state.favourites, py) }
      break
  }
  return state
}

const selectItem = (favs, item) => {
  favs = [ item, ...favs ]
  return favs
}
