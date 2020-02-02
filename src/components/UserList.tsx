import React, { FC } from 'react'
import useSWR from 'swr'
import List from '@material-ui/core/List'

import Detail from 'components/UserListItem'
import { User } from 'types/user'

const UserList: FC = () => {
  const { data: response } = useSWR('/users', {
    suspense: true,
    revalidateOnFocus: false,
  })
  const { data } = response

  return (
    <List data-testid="users">
      {data.map((user: User) => (
        <Detail key={user.id} {...user} />
      ))}
    </List>
  )
}

export default UserList
