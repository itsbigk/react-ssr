/* eslint-disable */
import React from 'react'

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools'

// Monitors are separate packages, and you can make a custom one
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'

// createDevTools takes a monitor and produces a DevTools component
// tslint:disable-next-line:variable-name
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
    toggleVisibilityKey="ctrl-h"
  >
    <LogMonitor
      expandActionRoot={false}
      expandStateRoot={false}
      theme="tomorrow"
    />
  </DockMonitor>,
)

export default DevTools
