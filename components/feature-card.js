import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <h5 className="text headline5">{props.title}</h5>
        <span className="text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .container {
            width: 320px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .image {
            width: var(--dl-size-size-doubleunit);
            height: var(--dl-size-size-doubleunit);
            object-fit: cover;
          }
          .text {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text1 {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  image_src: '/playground_assets/01.svg',
  image_alt: 'image',
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard
