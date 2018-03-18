import React from 'react' // eslint-disable-line
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Title = ({ value }) => (
  <Helmet>
    <title>{value}</title>
  </Helmet>
)

Title.defaultProps = {
  value: 'Frapp React Test'
}

Title.propTypes = {
  value: PropTypes.string
}

export default Title
