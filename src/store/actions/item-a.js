export const getList = () => {
  return dispatch => {
    fetch('https://cors-anywhere.herokuapp.com/http://54.169.233.100:8080/favourite.json')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'GET_LIST', payload: data })
        console.log(data)
      })
      .catch(err => console.error(err))
  }
}

export const selectItem = item => {
  return {
    type: 'SELECT_ITEM',
    payload: item
  }
}
