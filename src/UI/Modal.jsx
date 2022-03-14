import React, {Fragment, useEffect, useState} from 'react'

import classes from './Modal.module.css'

function Modal(props) {
  // const [showModal, setShowModal] = useState(false)
  //
  // useEffect(() => {
  //   setShowModal(true)
  // }, [])

  return (
    <Fragment>
      {props.show &&
        <Fragment>
          <div className={`${classes['modal']}`}>
            <p className={`${classes['modal-text']}`}>employé crée bravo</p>
          </div>
          <div className={`${classes['background']}`} onClick={props.close}/>
        </Fragment>
      }
    </Fragment>
  )
}

export default Modal