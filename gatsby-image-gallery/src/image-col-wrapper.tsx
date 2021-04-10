import React, { FC } from 'react'
import Col from './column'
import ImgWrapper from './img-wrapper'

interface ImageColWrapperProps {
  colWidth: number
  mdColWidth: number
  onClick: () => void
  gutter: string
}

const ImageColWrapper: FC<ImageColWrapperProps> = ({
  children,
  colWidth,
  mdColWidth,
  onClick,
  gutter,
}) => {
  return (
    <Col width={colWidth} md={mdColWidth} onClick={onClick}>
      <ImgWrapper margin={gutter}>{children}</ImgWrapper>
    </Col>
  )
}

export default ImageColWrapper
