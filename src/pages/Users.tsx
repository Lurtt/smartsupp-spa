import React, { FC, Suspense } from 'react'

import UserList from 'components/UserList'
import Loading from 'components/LoadingListItem'

const Users: FC = () => (
  <Suspense fallback={<Loading count={10} />}>
    <UserList />
  </Suspense>
)

export default Users
