import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Col = styled.div`
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

Col.propTypes = {
  width: PropTypes.number.isRequired,
  md: PropTypes.number.isRequired,
}

export default Col
