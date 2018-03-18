import React from 'react'
import { FadeIn } from 'animate-components'
import Title from './title'
import Spinner from './spinner'
import { connect } from 'react-redux'
import Item from './item'
import { Scrollbars } from 'react-custom-scrollbars'
import { getList } from '../store/actions/item-a'

@connect(store => (
  { list: store.Items.list }
))

export default class Lists extends React.Component {

  state = {
    loading: false
  }

  componentDidMount = () =>
    this.props.dispatch(getList())

  componentWillReceiveProps = () =>
    this.setState({ loading: false })

  render() {
    let
      { loading } = this.state,
      { list } = this.props,
      map_list = list.map(l =>
        <Item key={l.imageUrl} {...l} when='list' />
      )

    return (
      <div>

        <Title value='Lists' />

        { loading ? <Spinner/> : null }

        <FadeIn duration='300ms' className={loading ? 'cLoading': ''} >
          <div className='cont_title'>
            <span>All items</span>
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
