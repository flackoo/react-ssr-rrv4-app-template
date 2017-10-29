import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'

export default class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    )
  }
}