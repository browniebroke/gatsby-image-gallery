# gatsby-image-gallery

<p align="center">
  <a href="https://github.com/browniebroke/gatsby-image-gallery/actions?query=workflow%3ACI">
    <img alt="CI status" src="https://img.shields.io/github/workflow/status/browniebroke/gatsby-image-gallery/CI/main?label=CI&logo=github&logoColor=white&style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/@browniebroke/gatsby-image-gallery">
    <img src="https://img.shields.io/npm/v/@browniebroke/gatsby-image-gallery.svg?logo=npm&logoColor=white&style=flat-square" alt="Current npm package version." />
  </a>
  <a href="https://github.com/browniebroke/gatsby-image-gallery/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="Released under the MIT license." />
  </a>
  <a href="https://lgtm.com/projects/g/browniebroke/gatsby-image-gallery/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/github/browniebroke/gatsby-image-gallery?logo=lgtm&logoColor=white&style=flat-square" alt="Total alerts">
  </a>
</p>

Very basic gallery grid based on `gatsby-image` and `react-image-lightbox`, styling powered by `styled-components`.

## Install

```bash
npm install --save @browniebroke/gatsby-image-gallery
```

## Usage

This component is built on top `react-image-lightbox`, the CSS that ships with `react-image-lightbox` is included in this library for convenience, but you may import it from there.

```jsx
import { graphql } from 'gatsby'
import React from 'react'

import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const MyPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return <Gallery images={images} />
}

export const query = graphql`
  query ImagesForGallery {
    allFile {
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

export default MyPage
```

### Details

The `images` prop is an array of objects with 2 required properties: `thumb` and `full` that should each be a `GatsbyImage` compatible object.

In addition, images may have the following properties:

- `thumbAlt`: (string) used to set the `alt` attribute on the thumbnail image
- `title`: (node) passed to the Lightbox component as [`imageTitle`](https://github.com/frontend-collective/react-image-lightbox#options).
- `caption`: (node) passed to the Lightbox component as [`imageCaption`](https://github.com/frontend-collective/react-image-lightbox#options).

### Passing options to Lightbox

The `<Gallery>` component also accepts an object in the `lightboxOptions` props, which will be passed down directly [to `react-image-lightbox`](https://github.com/frontend-collective/react-image-lightbox).

You can see the full list of options in [their documentation](https://github.com/frontend-collective/react-image-lightbox#options).

### Example

For a full working example, there is one in [the example folder](https://github.com/browniebroke/gatsby-image-gallery/tree/master/example) which is [deployed to Netlify](https://gatsby-image-gallery.netlify.app/).

## Development

### Releases

Releases should be automated using [semantic release](https://github.com/semantic-release/semantic-release).
This library parses the commit log to detect which version number should be bumped.

## License

MIT © [browniebroke](https://github.com/browniebroke)
