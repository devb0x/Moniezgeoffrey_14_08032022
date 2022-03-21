import React, {Fragment} from 'react'

import classes from './Modal.module.css'

function Modal(props) {
  const title = "Successfully Added"
  const textMessage = "The new employee was created !"

  return (

    <Fragment>
      {props.show &&
        <Fragment>
          <div
            className={`${classes['modal']}`}
            style={{padding: props.padding}}
          >
            {props.closeBtn &&
              <header
                className={`${classes['modal-btn__close']}`}
                onClick={props.close}
              >
                <span className={`${classes['x']}`}>&times;</span>
              </header>
            }
            <h3 className={`${classes['modal-title']}`}>{title}</h3>
            <p className={`${classes['modal-text']}`}>{textMessage}</p>
          </div>
          <div
            className={`${classes['background']}`}
            onClick={props.close}
          />
        </Fragment>
      }
    </Fragment>
  )
}

export default Modal