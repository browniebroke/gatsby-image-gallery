import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'

import Row from './row'
import Col from './column'
import ImgWrapper from './img-wrapper'

import 'react-image-lightbox/style.css'

const Gallery = ({
  images = [],
  colWidth = 100 / 3,
  mdColWidth = 100 / 4,
  gutter = '0.25rem',
  imgClass = '',
  lightboxOptions = {},
  onClose = () => {},
}) => {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prevIndex = (index + images.length - 1) % images.length
  const nextIndex = (index + images.length + 1) % images.length

  const onCloseLightbox = () => {
    onClose()
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <Row>
        {images.map((img, imgIndex) => {
          return (
            <Col
              width={colWidth}
              md={mdColWidth}
              key={imgIndex}
              onClick={() => {
                setIsOpen(true)
                setIndex(imgIndex)
              }}
            >
              <ImgWrapper margin={gutter}>
                <Img
                  fluid={img.thumb}
                  className={imgClass}
                  alt={img.thumbAlt}
                />
              </ImgWrapper>
            </Col>
          )
        })}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={images[index].full.src}
          nextSrc={images[nextIndex].full.src}
          prevSrc={images[prevIndex].full.src}
          onCloseRequest={onCloseLightbox}
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
  onClose: PropTypes.func,
}
