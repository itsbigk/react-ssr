import React, { Suspense } from 'react'

const fallback = <div />

export const lazyRoute = (props, LazyComponent) => (
  <Suspense fallback={fallback}>
    <LazyComponent {...props} />
  </Suspense>
)

export const lazyComponent = Component => props => (
  <Suspense fallback={fallback}>
    <Component {...props} />
  </Suspense>
)
