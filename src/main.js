import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store/store'

let element = document.getElementById('root')

if (element) {
  ReactDOM.render(
    <Provider store={store} >
      <App/>
    </Provider>,
    element
  )
}
