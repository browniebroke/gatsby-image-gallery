import styled from 'styled-components'

interface ImgWrapper {
  margin: string
}

const ImgWrapper = styled.div<ImgWrapper>`
  margin: ${(props) => props.margin};
`

export default ImgWrapper
