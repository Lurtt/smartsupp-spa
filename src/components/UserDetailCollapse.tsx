import React, { FC } from 'react'
import useSWR from 'swr'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'

interface Props {
  expanded: boolean
  userId: number
}

const UserDetailCollapse: FC<Props> = ({ expanded, userId }) => {
  const { data: postsResponse } = useSWR(`/posts?userId=${userId}`, {
    suspense: true,
    revalidateOnFocus: false,
  })

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        {postsResponse.data.map((post: any) => (
          <CardHeader key={post.id} title={post.title} subheader={post.body} />
        ))}
      </CardContent>
    </Collapse>
  )
}

export default UserDetailCollapse
