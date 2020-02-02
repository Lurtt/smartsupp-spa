import React, { FC } from 'react'
import { getColor } from 'random-material-color'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import { Post } from 'types/post'

const useStyles = (color: string) =>
  makeStyles((theme: Theme) =>
    createStyles({
      color: {
        color: theme.palette.getContrastText(color),
        backgroundColor: color,
      },
    })
  )

const PostListItem: FC<Post> = ({ id, title, body }) => {
  const classes = useStyles(getColor({ text: title }))()
  const history = useHistory()

  const handleCallToRouter = () => {
    history.push(`/posts/${id}`)
  }

  return (
    <ListItem button onClick={handleCallToRouter} data-testid="post">
      <ListItemAvatar>
        <Tooltip title={title} enterDelay={350} leaveDelay={200} aria-label="body">
          <Avatar className={classes.color} data-testid="post-avatar">
            {id}
          </Avatar>
        </Tooltip>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={body} data-testid="post-text" />
    </ListItem>
  )
}

export default PostListItem
