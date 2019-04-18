import express from 'express'
import { matchRoutes } from 'react-router-config'
import render from './render'
import createStore from 'store'
import Routes from 'router/Routes'

const PORT = process.env.PORT || 3000
const store = createStore({})
const app = express()

app.use(express.static('dist'))
app.use(express.static('src/static'))

app.get('*', async (req, res) => {
  let routeMatch = {}

  const matchedRoutes = matchRoutes(Routes, req.path)
    .map(({ route, match }) => {
      routeMatch = match

      return route
    })

  const loadedRoutes = await Promise.all(matchedRoutes)
  const actions = loadedRoutes
    .map(route => {
      return route.fetchData ? route.fetchData({ ...store, match: routeMatch }) : null
    })
    .map(async actions => {
      const results = await Promise.all(
        (actions || []).map(p => p && new Promise(resolve => resolve()))
        // use p.then(resolve).catch(resolve) if action returns promise
      )

      return results
    })

  await Promise.all(actions)

  const context = {}
  const content = render(req.path, store, context)

  if (context.url) {
    return res.redirect(context.url)
  }

  res.send(content)
  res.end()
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
