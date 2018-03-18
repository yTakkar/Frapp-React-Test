import React from 'react'
import { connect } from 'react-redux'
import { selectItem } from '../store/actions/item-a'

@connect(store => (
  { favs: store.Items.favourites }
))

export default class Item extends React.Component {

  state = {
    selected: false
  }

  parseViews = viewCount => {
    let a = viewCount/1000
    return a.toFixed(1)
  }

  select = e => {
    e.preventDefault()
    let { imageUrl, title, desc, type, 'view-count': viewCount, dispatch } = this.props
    dispatch(selectItem({
      imageUrl,
      title,
      desc,
      type,
      'view-count': viewCount,
    }))
    this.setState({ selected: true })
  }

  render() {
    let
      { imageUrl, 'view-count': viewCount, when } = this.props,
      { selected } = this.state

    return (
      <div className='item' >
        <img src={imageUrl} />
        <div className='item_details'>
          <span>{this.parseViews(viewCount)}k views</span>
          {
            when == 'list' ?
              <a
                href='#'
                className={`pri_btn ${selected ? 'a_disabled' : ''}`}
                onClick={this.select}
              >
                { selected ? 'Selected' : 'Select' }
              </a>
              : null
          }
        </div>
      </div>
    )
  }
}
