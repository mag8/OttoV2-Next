import React from 'react'

import PropTypes from 'prop-types'

const StatsCard = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <div className="container1">
          <h1 className="headline4">{props.number}</h1>
          <span className="body1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 200px;
            margin: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .image {
            width: 32px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

StatsCard.defaultProps = {
  number: '10',
  image_src: '/playground_assets/05.svg',
  description: 'Description',
  image_alt: 'image',
}

StatsCard.propTypes = {
  number: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StatsCard
