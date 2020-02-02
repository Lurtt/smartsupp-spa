import React, { FC, Fragment } from 'react'
import useSWR from 'swr'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

import { Post } from 'types/post'

interface Props {
  expanded: boolean
  userId: number
}

const UserDetailCollapse: FC<Props> = ({ expanded, userId }) => {
  const { data: postsResponse } = useSWR(`/posts?userId=${userId}`, {
    suspense: true,
    revalidateOnFocus: false,
  })
  const history = useHistory()

  const handleCallToRouter = (id: number) => {
    history.push(`/posts/${id}`)
  }

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        {postsResponse.data.map((post: Post) => (
          <Fragment key={post.id}>
            <CardHeader title={post.title} subheader={post.body} />
            <CardActions>
              <Button variant="text" color="secondary" onClick={() => handleCallToRouter(post.id)}>
                Show comments
              </Button>
            </CardActions>
          </Fragment>
        ))}
      </CardContent>
    </Collapse>
  )
}

export default UserDetailCollapse
