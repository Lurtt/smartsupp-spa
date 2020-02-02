import React from 'react'
import { render } from '@testing-library/react'

import PostListItem from 'components/PostListItem'
import { mockSWRResponse } from 'utils/test-helpers'

jest.mock('swr')

describe('<PostListItem />', () => {
  it('should render', () => {
    const mockPost = {
      id: 1,
      userId: 1,
      title: 'post title',
      body: 'post body text',
    }
    mockSWRResponse([mockPost])

    const { getByTestId } = render(<PostListItem {...mockPost} />)

    expect(getByTestId('post')).toBeInTheDocument()

    expect(getByTestId('post-text')).toHaveTextContent('post body text')
    expect(getByTestId('post-avatar')).toHaveTextContent('1')
  })
})
