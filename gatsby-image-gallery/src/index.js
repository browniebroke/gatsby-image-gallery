import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Row from './row'
import Col from './column'
import ImgWrapper from './img-wrapper'

const Gallery = ({
  images = null,
  thumbs = null,
  fullImages = null,
  colWidth = 100 / 3,
  mdColWidth = 100 / 4,
  gutter = '0.25rem',
  imgClass = '',
}) => {
  let thumbsArray, imagesArray
  if (thumbs === null && fullImages === null) {
    // New style with all images in one prop
    thumbsArray = images.map(({ node }) => node.childImageSharp.thumb)
    imagesArray = images.map(({ node }) => node.childImageSharp.fluid.src)
  } else {
    // Compat with old props
    thumbsArray = thumbs
    if (fullImages === null && images !== null) {
      console.warn(
        `Using the images props with thumbs is deprecated and will not 
        be supported in the next major version. If you need to pass 2 arrays 
        separately, use the new prop "fullImages" instead which works exactly 
        the same way as "images" used to. It's recommended to pass all data in 
        the "images" prop instead.`
      )
      imagesArray = images
    } else {
      imagesArray = fullImages
    }
  }

  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prevIndex = index - (1 % imagesArray.length)
  const nextIndex = (index + imagesArray.length + 1) % imagesArray.length

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
                <Img fluid={thumbnail} className={imgClass} />
              </ImgWrapper>
            </Col>
          )
        })}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={imagesArray[index]}
          nextSrc={imagesArray[nextIndex]}
          prevSrc={imagesArray[prevIndex]}
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
  images: PropTypes.array,
  thumbs: PropTypes.array,
  fullImages: PropTypes.array,
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
}
