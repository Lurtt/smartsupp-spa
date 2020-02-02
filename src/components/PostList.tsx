import React, { FC } from 'react'
import useSWR from 'swr'
import List from '@material-ui/core/List'

import { Post } from 'types/post'
import Detail from 'components/PostListItem'

const PostList: FC = () => {
  const { data: response } = useSWR('/posts', {
    suspense: true,
    revalidateOnFocus: false,
  })
  const { data } = response

  return (
    <List data-testid="posts">
      {data.map((post: Post) => (
        <Detail key={post.id} {...post} />
      ))}
    </List>
  )
}

export default PostList
