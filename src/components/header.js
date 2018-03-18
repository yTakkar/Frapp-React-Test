import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { NavLink } from 'react-router-dom'

export default class AppHeader extends Component {
  render() {
    let { favLen } = this.props

    return (
      <div className='header'>
        <ul>
          <li>
            <NavLink
              to='/' exact
              activeClassName='tab_active'
              className='tab'
            >Lists</NavLink>
          </li>
          <li>
            <NavLink
              to='/favourites'
              activeClassName='tab_active'
              className='tab'
            >Favourites{favLen != 0 ? ` (${favLen})` : ''}</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
