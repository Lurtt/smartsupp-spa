import React, { FC } from 'react'
import useSWR from 'swr'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'

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
      <CardContent>{JSON.stringify(comments)}</CardContent>
    </Collapse>
  )
}

export default PostDetail
