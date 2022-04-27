import { render, screen } from "@testing-library/react"
import Header from "./Header"
import {MemoryRouter} from "react-router-dom"

describe('Header component', () => {
  test('company name', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const companyName = screen.getByText(/HRnet/i)
    expect(companyName).toBeInTheDocument()
  })
})