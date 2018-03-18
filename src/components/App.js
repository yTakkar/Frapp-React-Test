import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppHeader from './header'
import { connect } from 'react-redux'

import Lists from './lists'
import Favourites from './favourites'

@connect(store => (
  { favs: store.Items.favourites }
))

export default class App extends React.Component {
  render() {
    let { favs } = this.props

    return (
      <Router>
        <div className='app'>
          <AppHeader favLen={favs.length} />
          <div className='content'>
            <Switch>
              <Route path='/' exact component={Lists} />
              <Route path='/favourites' component={Favourites} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
