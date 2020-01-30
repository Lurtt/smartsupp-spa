import React from 'react'
import { render } from '@testing-library/react'

import Header from 'components/Header'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    location: {
      pathname: '/',
    },
  }),
}))

describe('<Header />', () => {
  it('should render', () => {
    const { getByTestId } = render(<Header />)

    expect(getByTestId('app-header')).toBeInTheDocument()
  })
})
