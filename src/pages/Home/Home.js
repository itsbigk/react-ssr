import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={'/images/logo.svg'} className='App-logo' alt='logo' />
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps)(Home)
