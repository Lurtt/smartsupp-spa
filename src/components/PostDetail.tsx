import React, { FC } from 'react'
import useSWR from 'swr'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'

interface Props {
  id: number
  expanded: boolean
}

const PostDetail: FC<Props> = ({ id, expanded }) => {
  const { data: response } = useSWR(`/comments?postId=${id}`, {
    suspense: true,
    revalidateOnFocus: false,
  })
  const { data: comments } = response

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit data-testid="user-detail">
      {comments.map((comment: any) => (
        <CardContent>
          <Typography variant="overline" display="block">
            {comment.name}
          </Typography>
          <Typography variant="caption" color="secondary" display="inline" gutterBottom>
            {comment.email}
          </Typography>
          <Typography color="textSecondary" component="p" gutterBottom>
            {comment.body}
          </Typography>
        </CardContent>
      ))}
    </Collapse>
  )
}

export default PostDetail
