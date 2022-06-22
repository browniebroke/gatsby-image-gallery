import React from 'react'
import Col from './column'
import ImgWrapper from './img-wrapper'

interface ImageColWrapperProps {
  children?: React.ReactNode
  colWidth: number
  mdColWidth: number
  onClick: () => void
  gutter: string
}

const ImageColWrapper = ({
  children,
  colWidth,
  mdColWidth,
  onClick,
  gutter,
}: ImageColWrapperProps) => {
  return (
    <Col width={colWidth} md={mdColWidth} onClick={onClick}>
      <ImgWrapper margin={gutter}>{children}</ImgWrapper>
    </Col>
  )
}

export default ImageColWrapper
