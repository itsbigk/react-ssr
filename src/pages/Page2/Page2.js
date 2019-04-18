import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { fetchPage } from 'store/actions/page'

class Page2 extends React.Component {
  componentDidMount () {
    if (window.__SERVER__) {
      return delete window.__SERVER__
    } else {
      // this.props.fetchPage()
    }
  }

  componentWillReceiveProps (nextProps) {
    const { match } = this.props

    if (match.params.slug !== nextProps.match.params.slug) {
      // this.props.fetchPage()
    }
  }

  render () {
    const { app, route } = this.props

    return (
      <div>
        <Helmet>
          <title>Page2</title>
        </Helmet>
        <div>Page2: {app.test}</div>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

Page2.propTypes = {
  app: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
  // fetchPage: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({ app })

export default connect(mapStateToProps, { fetchPage })(Page2)
