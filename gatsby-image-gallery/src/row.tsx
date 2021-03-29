import styled, { css } from 'styled-components'

interface RowProps {
  margin: number
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  ${(props) => {
    return css`
      margin-right: ${props.margin || -15}px;
      margin-left: ${props.margin || -15}px;
    `
  }}
`
export default Row
