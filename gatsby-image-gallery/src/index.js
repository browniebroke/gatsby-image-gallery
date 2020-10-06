import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'

import Row from './row'
import Col from './column'
import ImgWrapper from './img-wrapper'

import 'react-image-lightbox/style.css'

const Gallery = ({
  images = null,
  colWidth = 100 / 3,
  mdColWidth = 100 / 4,
  gutter = '0.25rem',
  imgClass = '',
  lightboxOptions = {},
}) => {
  let thumbsArray, fullArray, thumbAltArray

  // New style with all images in one prop
  thumbsArray = images
    .filter((thumb) => thumb !== undefined)
    .map(({ thumb }) => thumb)
  thumbAltArray = images.map(({ thumbAlt }) => thumbAlt)
  fullArray = images
    .filter((image) => image.full !== undefined)
    .map(({ full }) => full.src)

  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prevIndex = index - (1 % fullArray.length)
  const nextIndex = (index + fullArray.length + 1) % fullArray.length

  return (
    <React.Fragment>
      <Row>
        {thumbsArray.map((thumbnail, thumbIndex) => {
          return (
            <Col
              width={colWidth}
              md={mdColWidth}
              key={thumbIndex}
              onClick={() => {
                setIsOpen(true)
                setIndex(thumbIndex)
              }}
            >
              <ImgWrapper margin={gutter}>
                <Img
                  fluid={thumbnail}
                  className={imgClass}
                  alt={
                    thumbAltArray
                      ? thumbAltArray[thumbIndex]
                        ? thumbAltArray[thumbIndex]
                        : ''
                      : ''
                  }
                />
              </ImgWrapper>
            </Col>
          )
        })}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={fullArray[index]}
          nextSrc={fullArray[nextIndex]}
          prevSrc={fullArray[prevIndex]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
          imageTitle={images[index].title}
          imageCaption={images[index].caption}
          {...lightboxOptions}
        />
      )}
    </React.Fragment>
  )
}

export default Gallery

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      full: PropTypes.object,
      thumb: PropTypes.object,
      thumbAlt: PropTypes.string,
      title: PropTypes.node,
      caption: PropTypes.node,
    })
  ),
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
  lightboxOptions: PropTypes.object,
}
