import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import UserListItem from 'components/UserListItem'
import { mockSWRResponse } from 'utils/test-helpers'

jest.mock('swr')

describe('<UserListItem />', () => {
  it('should render', () => {
    const mockUsers = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    }
    mockSWRResponse([mockUsers])

    const { getByTestId } = render(
      <MemoryRouter>
        <UserListItem {...mockUsers} />
      </MemoryRouter>
    )

    expect(getByTestId('user')).toBeInTheDocument()

    const textElement = getByTestId('text')
    expect(textElement).toHaveTextContent('Bret')
    expect(textElement).toHaveTextContent('Sincere@april.biz')
  })
})
