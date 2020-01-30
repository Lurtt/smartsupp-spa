import React, { FC, ChangeEvent } from 'react'
import { useHistory } from "react-router-dom"
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import MessageIcon from '@material-ui/icons/Message'
import FaceIcon from '@material-ui/icons/Face'

const Header: FC = () => {
  const history = useHistory()

  const handleCallToRouter = (_: ChangeEvent<{}>, route: string) => {
    history.push(route)
  }

  return (
    <Paper square data-testid="app-header">
      <Tabs
        value={history.location.pathname}
        onChange={handleCallToRouter}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<FaceIcon />} label="USERS" value="/"/>
        <Tab icon={<MessageIcon />} label="POSTS" value="/posts"/>
      </Tabs>
    </Paper>
  )
}

export default Header