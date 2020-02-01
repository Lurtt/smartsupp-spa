import React from 'react'
import { render } from '@testing-library/react'

import UserDetail from 'components/UserDetail'

jest.mock('swr')

describe('<UserDetail />', () => {
  it('should render', () => {
    const { getByTestId } = render(<UserDetail />)

    expect(getByTestId('user-detail')).toBeInTheDocument()
  })
})
