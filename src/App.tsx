import React, { FC } from 'react'
import Container from '@material-ui/core/Container'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Header from 'components/Header'

const App: FC = () => {
  return (
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
}

function Users() {
  return <h2>Users</h2>
}

function Posts() {
  return <h2>Posts</h2>
}

export default App
