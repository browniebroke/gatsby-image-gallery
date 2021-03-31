import styled, { css } from 'styled-components'

interface RowProps {
  margin: number
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  ${(props) => {
    return css`
      margin-right: ${props.margin}px;
      margin-left: ${props.margin}px;
    `
  }}
`
export default Row
