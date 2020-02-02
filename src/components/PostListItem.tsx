import React, { FC, Suspense, useState } from 'react'
import { getColor } from 'random-material-color'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'

import { Post } from 'types/post'
import PostDetail from 'components/PostDetail'

const useStyles = (color: string) =>
  makeStyles((theme: Theme) =>
    createStyles({
      color: {
        color: theme.palette.getContrastText(color),
        backgroundColor: color,
      },
    })
  )

const Loading: FC = () => (
  <CardContent>
    <Skeleton animation="wave" width={240} height={24} />
    <Skeleton animation="wave" width={200} height={18} />
    <Skeleton animation="wave" width="75%" height={100} />
  </CardContent>
)

const PostListItem: FC<Post> = ({ id, title, body }) => {
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles(getColor({ text: title }))()

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <ListItem data-testid="post">
        <ListItemAvatar>
          <Tooltip title={title} enterDelay={350} leaveDelay={200} aria-label="body">
            <Avatar className={classes.color} data-testid="post-avatar">
              {id}
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={body} data-testid="post-text" />
        <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </ListItem>
      <Suspense fallback={<Loading />}>{expanded && <PostDetail id={id} expanded={expanded} />}</Suspense>
    </Card>
  )
}

export default PostListItem
