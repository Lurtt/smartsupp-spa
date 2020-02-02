import React, { FC, Suspense } from 'react'

import PostList from 'components/PostList'
import Loading from 'components/LoadingListItem'

const Posts: FC = () => (
  <Suspense fallback={<Loading count={10} />}>
    <PostList />
  </Suspense>
)

export default Posts
