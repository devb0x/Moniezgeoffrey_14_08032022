import React, {Fragment, useCallback} from 'react'
import PropTypes from "prop-types"

import classes from './Modal.module.css'

function Modal(props) {
  const close = useCallback((e) => {
    e.stopPropagation()
    props.close()
  }, [props.close])

  return (
    <Fragment>
      {props.show &&
          <div>
            <div
              className={`${classes['background']}`}
              onClick={close}
              data-testid="background"
            />
            <div
            className={`${classes['modal']}`}
            style={{padding: props.padding}}
            data-testid={"modal"}
          >
            {props.closeBtn &&
              <header
                onClick={close}
                data-testid="close-icon"
              >
                <span
                  className={`${classes['modal-btn__close']}`}
                >
                  &times;
                </span>
              </header>
            }
            {props.title &&
              <h3
                className={`${classes['modal-title']}`}
                data-testid="title"
              >
                {props.title}
              </h3>
            }
            {props.textMessage &&
              <p className={`${classes['modal-text']}`} data-testid="message">
                {props.textMessage}
              </p>
            }
          </div>
        </div>
      }
    </Fragment>
  )
}

export default Modal

Modal.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
  padding: PropTypes.string,
  title: PropTypes.string,
  textMessage: PropTypes.string,
  closeBtn: PropTypes.bool
}
