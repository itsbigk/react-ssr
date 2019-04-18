import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import path from 'path'

import Routes from 'router/Routes'

const statsFile = path.resolve('dist/loadable-stats.json')
const extractor = new ChunkExtractor({ statsFile })

export default (pathname, store, context) => {
  const reactMarkup = renderToString(
    <Provider store={store}>
      <ChunkExtractorManager extractor={extractor}>
        <StaticRouter location={pathname} context={context}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </ChunkExtractorManager>
    </Provider>
  )

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        ${extractor.getStyleTags()}
      </head>
      <script>
        window.__SERVER__ = true
        window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
      </script>
      <body>
        <div id="root">${reactMarkup}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `
}
