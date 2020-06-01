import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Gallery from '../../../gatsby-image-gallery/src'

const IndexPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => node.childImageSharp)
  return (
    <Layout>
      <SEO title="Example" />
      <h1>Gatsby image gallery demo</h1>
      <p>A very simple page to demo the gallery component.</p>
      <Gallery images={images} />
    </Layout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
