import { graphql } from 'gatsby'
import * as React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Gallery from '../../../gatsby-image-gallery/src'

interface ImageSharpEdge {
  node: {
    childImageSharp: {
      thumb: IGatsbyImageData
      full: IGatsbyImageData
      meta: {
        originalName: string
      }
    }
  }
}

interface PageProps {
  data: {
    images: {
      edges: ImageSharpEdge[]
    }
  }
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // Use original name as caption.
    // The `originalName` is queried in a nested field,
    // but the `Gallery` component expects `caption` at the top level.
    caption: node.childImageSharp.meta.originalName,
  }))

  // Override some of Lightbox options to localise labels in French
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }

  //Add callback to Lightbox onCloseRequest
  const onClose = () => {
    console.log('Lightbox was closed')
  }

  return (
    <Layout>
      <SEO title="Example" />
      <h1>Gatsby image gallery demo</h1>
      <p>A very simple page to demo the gallery component.</p>
      <Gallery
        images={images}
        lightboxOptions={lightboxOptions}
        onClose={onClose}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
            meta: fixed {
              originalName
            }
          }
        }
      }
    }
  }
`

export default IndexPage
