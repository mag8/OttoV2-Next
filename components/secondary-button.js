import React from 'react'

import PropTypes from 'prop-types'

const SecondaryButton = (props) => {
  return (
    <>
      <div className="container">
        <button className="button mediumLabel">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .button {
            color: var(--dl-color-purple-default);
            align-self: center;
            transition: 0.3s;
            padding-top: 12px;
            border-width: 0px;
            padding-left: 32px;
            border-radius: var(--dl-radius-radius-radius6);
            padding-right: 32px;
            padding-bottom: 12px;
            background-color: var(--dl-color-purple-100);
          }
          .button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-purple-800);
          }
          .button:active {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-purple-900);
          }
        `}
      </style>
    </>
  )
}

SecondaryButton.defaultProps = {
  button: 'Button',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
}

export default SecondaryButton
