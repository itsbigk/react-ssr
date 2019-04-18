import React from 'react'
import { Redirect } from 'react-router-dom'
import loadable from '@loadable/component'

import Root from 'components/Root'
import Home from 'pages/Home'
import { initClient } from 'services/contentfulClient'
import { fetchHeader } from 'store/actions/header'
// import { fetchPage } from 'store/actions/page'

const RedirectComponent = () => <Redirect to='/home' />
const Page2 = loadable(() => import(/* webpackChunkName: 'page2' */ 'pages/Page2'))
// const Page2Inner = loadable(() => import(/* webpackChunkName: 'page2_inner' */ 'pages/Page2/inner'))
const Page3 = loadable(() => import(/* webpackChunkName: 'page3' */ 'pages/Page3'))
const Page4 = loadable(() => import(/* webpackChunkName: 'page4' */ 'pages/Page4'))

export default [
  {
    component: Root,
    fetchRoot (...args) {
      initClient(...args)
    },
    routes: [
      {
        component: Home,
        path: '/home',
        exact: true
      },
      {
        component: Page3,
        path: '/page3',
        exact: true
      },
      {
        component: Page4,
        path: '/page4',
        exact: true
      },
      {
        component: Page2,
        path: '/:slug',
        exact: true,
        fetchData ({ dispatch, match }) {
          return [
            dispatch(fetchHeader())
            // dispatch(fetchPage(match.params.slug))
          ]
        }
      },
      { component: RedirectComponent }
    ]
  }
]
