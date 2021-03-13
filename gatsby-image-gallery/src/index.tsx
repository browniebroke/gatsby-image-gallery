import React, { FC, useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Lightbox from 'react-image-lightbox'

import Row from './row'
import Col from './column'
import ImgWrapper from './img-wrapper'
import styled from 'styled-components'

import LightboxCSS from 'react-image-lightbox/style.css'

interface ImageProp {
  full: FluidObject
  thumb: FluidObject
  thumbAlt?: string
  title?: string
  caption?: string
}

interface GalleryProps {
  images: ImageProp[]
  colWidth?: number
  mdColWidth?: number
  gutter?: string
  imgClass?: string
  lightboxOptions?: object
  onClose?: () => void
}

const StyledLightbox = styled(Lightbox)`
  ${LightboxCSS}
`

const Gallery: FC<GalleryProps> = ({
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
                  alt={img.thumbAlt || ''}
                />
              </ImgWrapper>
            </Col>
          )
        })}
      </Row>
      {isOpen && (
        <StyledLightbox
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
