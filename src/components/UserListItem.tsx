import React, { FC } from 'react'
import { getColor } from 'random-material-color'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import { useHistory } from 'react-router-dom'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export interface UserProps {
  id: number
  name: string
  username: string
  email: string
}

const useStyles = (color: string) =>
  makeStyles((theme: Theme) =>
    createStyles({
      color: {
        color: theme.palette.getContrastText(color),
        backgroundColor: color,
      },
    })
  )

const UserListItem: FC<UserProps> = ({ id, name, username, email }) => {
  const classes = useStyles(getColor({ text: username }))()
  const history = useHistory()

  const handleCallToRouter = () => {
    history.push(`${id}`)
  }

  return (
    <ListItem button onClick={handleCallToRouter} data-testid="user">
      <ListItemAvatar>
        <Tooltip title={name} enterDelay={350} leaveDelay={200} aria-label="user name">
          <Avatar className={classes.color} data-testid="user-avatar">
            {username.charAt(0)}
          </Avatar>
        </Tooltip>
      </ListItemAvatar>
      <ListItemText primary={username} secondary={email} data-testid="text" />
    </ListItem>
  )
}

export default UserListItem
