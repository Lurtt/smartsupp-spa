import React, { FC } from 'react'
import useSWR from 'swr'
import List from '@material-ui/core/List'

import User from 'components/UserListItem'
import { User as UserProps } from 'types/user'

const Users: FC = () => {
  const { data: response } = useSWR('/users', {
    suspense: true,
    revalidateOnFocus: false,
  })
  const { data } = response

  return (
    <List data-testid="users">
      {data.map((user: UserProps) => (
        <User key={user.id} {...user} />
      ))}
    </List>
  )
}

export default Users
