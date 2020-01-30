import React from 'react'
import { render } from '@testing-library/react'

import Posts from 'pages/Posts'

describe('<Posts />', () => {
  it('should render', () => {
    const { getByTestId } = render(<Posts />)

    expect(getByTestId('page-posts')).toBeInTheDocument()
  })
})