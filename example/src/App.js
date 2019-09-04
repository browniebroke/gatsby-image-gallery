import React, { Component } from 'react'

import Gallery from '@browniebroke/gatsby-image-gallery'

export default class App extends Component {
  render() {
    return (
      <div>
        <Gallery images={[]} thumbs={[]} />
      </div>
    )
  }
}
