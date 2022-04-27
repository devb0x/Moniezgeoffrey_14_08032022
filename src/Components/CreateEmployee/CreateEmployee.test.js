import { render, screen } from "@testing-library/react"
import CreateEmployee from "./CreateEmployee"


test('render create employee', () => {
  render(<CreateEmployee />)

  const createEmployeeElement = screen.getByText(/create employee/i)
  expect(createEmployeeElement).toBeInTheDocument()
})

describe('Check for the form fields & btn', () => {
  beforeEach(() => {
    render(<CreateEmployee />)
  })
  test('check firstname field', () => {
    const firstnameInput = screen.getByTestId("firstname")
    expect(firstnameInput).toBeInTheDocument()
  })
  test('check lastname field', () => {
    const lastnameInput = screen.getByTestId("lastname")
    expect(lastnameInput).toBeInTheDocument()
  })
  test('check birthdate field', () => {
    const birthdateInput = screen.getByTestId("birthdate")
    expect(birthdateInput).toBeInTheDocument()
  })
  test('check street field', () => {
    const streetInput = screen.getByTestId("street")
    expect(streetInput).toBeInTheDocument()
  })
  test('check city field', () => {
    const cityInput = screen.getByTestId("city")
    expect(cityInput).toBeInTheDocument()
  })
  test('check state field', () => {
    const stateInput = screen.getByTestId("state")
    expect(stateInput).toBeInTheDocument()
  })
  test('check zipcode field', () => {
    const zipcodeInput = screen.getByTestId("zipcode")
    expect(zipcodeInput).toBeInTheDocument()
  })
  test('check department field', () => {
    const departmentInput = screen.getByTestId("department")
    expect(departmentInput).toBeInTheDocument()
  })
  test('check button', () => {
    const btn = screen.getByTestId("button")
    expect(btn).toBeInTheDocument()
  })
})
