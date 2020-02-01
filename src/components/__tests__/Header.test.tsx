import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Header from 'components/Header'

describe('<Header />', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(getByTestId('app-header')).toBeInTheDocument()
  })
})
