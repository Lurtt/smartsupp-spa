import React, { FC } from 'react'
import Container from '@material-ui/core/Container'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Header from 'components/Header'
import Users from 'pages/Users'
import Posts from 'pages/Posts'

const App: FC = () => (
  <Router>
    <Container maxWidth="md" data-testid="app">
      <Header />

      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </Container>
  </Router>
)

export default App
