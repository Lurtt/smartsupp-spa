import React, { FC, ChangeEvent, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import MessageIcon from '@material-ui/icons/Message'
import FaceIcon from '@material-ui/icons/Face'

import { HOME, POSTS } from 'utils/routes'

const Header: FC = () => {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState(HOME)

  useEffect(() => {
    const isPostActive = history.location.pathname.includes(POSTS)

    setActiveTab(isPostActive ? POSTS : HOME)
  }, [history.location.pathname])

  const handleCallToRouter = (_: ChangeEvent<{}>, route: string) => {
    history.push(route)
  }

  return (
    <Paper square data-testid="app-header">
      <Tabs
        value={activeTab}
        onChange={handleCallToRouter}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<FaceIcon />} label="USERS" value={HOME} />
        <Tab icon={<MessageIcon />} label="POSTS" value={POSTS} />
      </Tabs>
    </Paper>
  )
}

export default Header
