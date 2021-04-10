import React, { FC } from 'react'
import Col from './column'
import ImgWrapper from './img-wrapper'

interface ImageColWrapperProps {
  colWidth: number
  mdColWidth: number
  gutter: string
}

const ImageColWrapper: FC<ImageColWrapperProps> = ({
  children,
  colWidth,
  mdColWidth,
  gutter,
}) => {
  return (
    <Col width={colWidth} md={mdColWidth}>
      <ImgWrapper margin={gutter}>{children}</ImgWrapper>
    </Col>
  )
}

export default ImageColWrapper
