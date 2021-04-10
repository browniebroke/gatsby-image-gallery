import React, { FC, useState } from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Lightbox from 'react-image-lightbox'
import styled from 'styled-components'

import Row from './row'
import ImageColWrapper from './image-col-wrapper'

import LightboxCSS from 'react-image-lightbox/style.css'

interface ImageProp {
  full: IGatsbyImageData
  thumb: IGatsbyImageData
  thumbAlt?: string
  title?: string
  caption?: string
}

interface GalleryProps {
  images: ImageProp[]
  colWidth?: number
  mdColWidth?: number
  rowMargin?: number
  gutter?: string
  imgClass?: string
  lightboxOptions?: object
  onClose?: () => void
  customWrapper?: React.FC
}

const StyledLightbox = styled(Lightbox)`
  ${LightboxCSS}
`

const Gallery: FC<GalleryProps> = ({
  images = [],
  colWidth = 100 / 3,
  mdColWidth = 100 / 4,
  gutter = '0.25rem',
  rowMargin = -15,
  imgClass = '',
  lightboxOptions = {},
  onClose = () => {},
  customWrapper = ImageColWrapper,
}) => {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prevIndex = (index + images.length - 1) % images.length
  const nextIndex = (index + images.length + 1) % images.length
  const ImgColWrapper = customWrapper

  // URLs for full width images
  const mainSrc = images[index]?.full?.images?.fallback?.src
  const nextSrc = images[nextIndex]?.full?.images?.fallback?.src
  const prevSrc = images[prevIndex]?.full?.images?.fallback?.src

  const onCloseLightbox = () => {
    onClose()
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <Row margin={rowMargin}>
        {images.map((img, imgIndex) => {
          const thumbImage = getImage(img.thumb)
          if (!thumbImage) {
            return null
          }
          return (
            <ImgColWrapper
              colWidth={colWidth}
              mdColWidth={mdColWidth}
              key={imgIndex}
              gutter={gutter}
            >
              <GatsbyImage
                image={thumbImage}
                className={imgClass}
                alt={img.thumbAlt || ''}
                onClick={() => {
                  setIsOpen(true)
                  setIndex(imgIndex)
                }}
              />
            </ImgColWrapper>
          )
        })}
      </Row>
      {isOpen && (
        <StyledLightbox
          mainSrc={mainSrc || ''}
          nextSrc={nextSrc || ''}
          prevSrc={prevSrc || ''}
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
