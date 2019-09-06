import React, { Component } from 'react'

import Gallery from '@browniebroke/gatsby-image-gallery'
import 'react-image-lightbox/style.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Gallery images={[]} thumbs={[]} />
      </div>
    )
  }
}
