import {fireEvent, render, screen} from "@testing-library/react"
import Modal from "./Modal"

describe('When the props show is false', () => {
  test('The modal is not displayed', () => {
    render(<Modal title={"Successfully Added"} show={false} />)

    const background = screen.queryByTestId("background")
    expect(background).not.toBeInTheDocument()
  })
})


describe('When the modal is in the document', () => {
  let closeHandler = jest.fn()

  beforeEach(() => {
    render(
      <Modal
        title={"Successfully Added"}
        textMessage={"Employee added"}
        show={true}
        closeBtn={true}
        close={closeHandler}
      />
    )
  })
  test('the modal is displayed', () => {
    const background = screen.getByTestId("background")
    expect(background).toBeInTheDocument()

    const title = screen.getByText(/Successfully Added/i)
    expect(title).toBeInTheDocument()

    const message = screen.getByText(/Employee added/i)
    expect(message).toBeInTheDocument()
  })
  test('when i click on the background the modal is closed', () => {
    const background = screen.getByTestId("background")
    expect(background).toBeInTheDocument()

    fireEvent.click(background)
    expect(closeHandler).toHaveBeenCalledTimes(1)
  })
  test('when i click on the close icon the modal is close', () => {
    const closeBtn = screen.getByTestId("close-icon")
    expect(closeBtn).toBeInTheDocument()

    const background = screen.getByTestId('background')
    expect(background).toBeInTheDocument()

    fireEvent.click(closeBtn)
    expect(closeHandler).toHaveBeenCalledTimes(1)
  })

})


