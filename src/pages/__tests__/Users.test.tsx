import React from 'react'
import { render } from '@testing-library/react'
import Users from 'pages/Users'
import { MemoryRouter } from 'react-router-dom'

import { mockSWRResponse } from 'utils/test-helpers'

jest.mock('swr')

describe('<Users />', () => {
  it('should render', () => {
    mockSWRResponse([])

    const { getByTestId } = render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    )

    expect(getByTestId('users')).toBeInTheDocument()
  })
})
