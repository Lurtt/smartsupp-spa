import React from 'react'
import { render } from '@testing-library/react'

import Users from 'pages/Users'

describe('<Users />', () => {
  it('should render', () => {
    const { getByTestId } = render(<Users />)

    expect(getByTestId('page-users')).toBeInTheDocument()
  })
})
