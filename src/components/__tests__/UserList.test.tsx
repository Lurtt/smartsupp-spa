import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import UserList from 'components/UserList'
import { mockSWRResponse } from 'utils/test-helpers'

jest.mock('swr')

describe('<UserList />', () => {
  it('should render', () => {
    const mockUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    }
    mockSWRResponse([mockUser])

    const { getByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>
    )

    expect(getByTestId('users')).toBeInTheDocument()
    expect(getAllByTestId('user')).toHaveLength(1)
  })
})
