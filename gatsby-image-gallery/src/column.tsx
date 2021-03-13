import styled, { css } from 'styled-components'

interface ColProps {
  md: number
  width: number
}

const Col = styled.div<ColProps>`
  flex-grow: 0;
  flex-shrink: 0;
  ${(props) => {
    return css`
      flex-basis: ${props.width}%;
      max-width: ${props.width}%;
    `
  }}

  @media (min-width: 576px) {
    ${(props) => {
      return css`
        flex-basis: ${props.md}%;
        max-width: ${props.md}%;
      `
    }}
  }
`

export default Col
