import styled from 'styled-components'

interface ImgWrapperProps {
  margin: string
}

const ImgWrapper = styled.div<ImgWrapperProps>`
  margin: ${(props) => props.margin};
`

export default ImgWrapper
