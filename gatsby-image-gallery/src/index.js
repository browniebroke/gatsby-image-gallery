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
  thumbs = null,
  fullImages = null,
  colWidth = 100 / 3,
  mdColWidth = 100 / 4,
  gutter = '0.25rem',
  imgClass = '',
  lightBoxOptions = {},
}) => {
  let thumbsArray, fullArray, thumbAltArray
  if (thumbs === null && fullImages === null) {
    // New style with all images in one prop
    thumbsArray = images.map(({ thumb }) => thumb)
    fullArray = images.map(({ full }) => full.src)
    thumbAltArray = images.map(({ thumbAlt }) => thumbAlt)
  } else {
    // Compat with old props
    thumbsArray = thumbs
    if (fullImages === null && images !== null) {
      console.warn(
        `Using the images props with thumbs is deprecated and will not 
        be supported in the next major version. 
        
        If you need to pass 2 arrays separately, use the new prop "fullImages" 
        instead, which works exactly the same way as "images" used to. 
        
        It's recommended to pass all images as a single array in the "images"
        prop instead.`
      )
      fullArray = images
    } else {
      fullArray = fullImages
    }
  }

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
          {...lightBoxOptions}
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
  thumbs: PropTypes.array,
  fullImages: PropTypes.array,
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
  lightboxOptions: PropTypes.object,
}
