import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'

export default () => (
  <BrowserRouter>
    {renderRoutes(Routes)}
  </BrowserRouter>
)
