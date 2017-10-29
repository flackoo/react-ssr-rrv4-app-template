import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Routes from './common/Routes'

import '../../../bower_components/bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
          titleTemplate='%s | React App'
          titleAttributes={{ itemprop: 'name', lang: 'en' }}
          meta={[
            { name: 'description', content: 'Server side rendering example' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />
        <Routes />
      </div>
    )
  }
}
