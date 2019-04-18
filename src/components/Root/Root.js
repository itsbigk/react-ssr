import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

import Nav from 'components/Nav'

const Root = ({ route }) => (
  <div>
    <Nav />
    {renderRoutes(route.routes)}
  </div>
)

Root.propTypes = {
  route: PropTypes.object.isRequired
}

export default Root
