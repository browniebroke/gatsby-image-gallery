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

Very basic gallery grid based on `gatsby-plugin-image` and `react-image-lightbox`, styling powered by `styled-components`.

## Install

```bash
npm install --save @browniebroke/gatsby-image-gallery
```

Note: this library is compatible with Gatbsy v3 and `gatsby-plugin-image` as of version 6.
If you want to use it with Gastby v2 and the `gatsby-image` plugin, please stick to version 5 or earlier.

## Usage

This library provides a `Gallery` component, rendering as a grid of images that can be clicked to open in full size inside a lightbox. See below for a minimal example:

```jsx
import { graphql } from 'gatsby'
import React from 'react'

import Gallery from '@browniebroke/gatsby-image-gallery'

const MyPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return <Gallery images={images} />
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
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

### Passing onClose callback to Lightbox

The `<Gallery>` component also accepts a function in the `onClose` prop, which will be called when [`react-image-lightbox`](https://github.com/frontend-collective/react-image-lightbox) is closed by the user.

### Example

For a full working example, there is one in [the example folder](https://github.com/browniebroke/gatsby-image-gallery/tree/master/example) which is [deployed to Netlify](https://gatsby-image-gallery.netlify.app/).

## Development

### Releases

Releases are automated using [semantic release](https://github.com/semantic-release/semantic-release).
This library parses the commit log to detect which version number should be bumped.

## License

MIT © [browniebroke](https://github.com/browniebroke)
