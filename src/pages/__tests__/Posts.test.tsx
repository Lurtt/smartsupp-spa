import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Posts from 'pages/Posts'

import { mockSWRResponse } from 'utils/test-helpers'

jest.mock('swr')

describe('<Posts />', () => {
  it('should render', () => {
    mockSWRResponse([])

    const { getByTestId } = render(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    )

    expect(getByTestId('posts')).toBeInTheDocument()
  })
})
