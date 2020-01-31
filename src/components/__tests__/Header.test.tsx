import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Header from 'components/Header'

describe('<Header />', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    fireEvent.click(getByTestId('route-users'))

    expect(getByTestId('app-header')).toBeInTheDocument()
  })
})
