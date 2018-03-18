import React from 'react'
import { FadeIn } from 'animate-components'
import Title from './title'
import { connect } from 'react-redux'
import Item from './item'
import { Scrollbars } from 'react-custom-scrollbars'

@connect(store => (
  { favs: store.Items.favourites }
))

export default class Favourites extends React.Component {
  render() {
    let
      { favs } = this.props,
      map_list = favs.map(l =>
        <Item key={l.imageUrl} {...l} when='favs' />
      )

    return (
      <div>

        <Title value='Favourites' />

        <FadeIn duration='300ms'>
          <div className='cont_title'>
            <span>View all selected items</span>
          </div>

          <Scrollbars style={{ height: 460, marginTop: 10 }}>
            <div className='cont_list_main' >
              { map_list }
            </div>
          </Scrollbars>

        </FadeIn>

      </div>
    )
  }
}
