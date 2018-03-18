export const getList = () => {
  return dispatch => {
    fetch('http://54.169.233.100:8080/favourite.json', { mode: 'no-cors' })
      .then(data =>
        dispatch({ type: 'GET_LIST', payload: data.body })
      )
      .catch(err => console.error(err))
  }
}

export const selectItem = item => {
  return {
    type: 'SELECT_ITEM',
    payload: item
  }
}
