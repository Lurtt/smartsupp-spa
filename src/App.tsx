import React, { FC, Suspense } from 'react'
import Container from '@material-ui/core/Container'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { SWRConfig } from 'swr'

import { typicodeAPI, ROUTE } from 'utils/api'
import Header from 'components/Header'
import UserDetail from 'components/UserDetail'
import Users from 'pages/Users'
import Posts from 'pages/Posts'

const { HOME, POSTS, USER } = ROUTE

const App: FC = () => (
  <SWRConfig value={{ fetcher: typicodeAPI }}>
    <Router>
      <Container maxWidth="md" data-testid="app">
        <Header />
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Switch>
            <Route path={POSTS}>
              <Posts />
            </Route>
            <Route path={USER}>
              <UserDetail />
            </Route>
            <Route path={HOME}>
              <Users />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </Router>
  </SWRConfig>
)

export default App
