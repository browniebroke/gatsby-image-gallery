import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Row from './row'
import Col from './column'
import ImgWrapper from './img-wrapper'

const Gallery = ({
  images,
  thumbs,
  colWidth = 100 / 3,
  mdColWidth = 100 / 4,
  gutter = '0.25rem',
  imgClass = '',
}) => {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prevIndex = index - (1 % images.length)
  const nextIndex = (index + images.length + 1) % images.length

  return (
    <React.Fragment>
      <Row>
        {thumbs.map((thumbnail, thumbIndex) => {
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
                <Img fluid={thumbnail} className={imgClass} />
              </ImgWrapper>
            </Col>
          )
        })}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[nextIndex]}
          prevSrc={images[prevIndex]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
          imageLoadErrorMessage="Impossible de charger cette image"
          nextLabel="Image suivante"
          prevLabel="Image précédente"
          zoomInLabel="Zoomer"
          zoomOutLabel="Dézoomer"
          closeLabel="Fermer"
        />
      )}
    </React.Fragment>
  )
}

export default Gallery

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  thumbs: PropTypes.array.isRequired,
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
}
