import styled, { css } from 'styled-components'

export interface ColProps {
  md: number
  width: number
}

const Col = styled.div<ColProps>`
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  display: flex;
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
