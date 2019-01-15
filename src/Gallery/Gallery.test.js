import React from 'react'
import Gallery from './index'
import renderer from 'react-test-renderer'
import Image from 'gatsby-image'

const fluidShapeMock = path => ({
  aspectRatio: 1.5,
  src: path,
  srcSet: `some srcSet`,
  srcSetWebp: `some srcSetWebp`,
  sizes: `(max-width: 600px) 100vw, 600px`,
  base64: `string_of_base64`,
})

describe('Gallery component', () => {
  test('that it renders with empty props', () => {
    const component = renderer.create(<Gallery images={[]} thumbs={[]} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('that it renders with data in images', () => {
    const component = renderer.create(
      <Gallery
        images={[
          '/images/image001.jpg',
          '/images/image002.jpg',
          '/images/image003.jpg',
          '/images/image004.jpg',
        ]}
        thumbs={[]}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('that it renders with data in thumbs', () => {
    const component = renderer.create(
      <Gallery
        images={[]}
        thumbs={[
          { fluid: fluidShapeMock('/thumb/image001.jpg') },
          { fluid: fluidShapeMock('/thumb/image002.jpg') },
          { fluid: fluidShapeMock('/thumb/image003.jpg') },
          { fluid: fluidShapeMock('/thumb/image004.jpg') },
          { fluid: fluidShapeMock('/thumb/image005.jpg') },
        ]}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('that it renders with data in images & thumbs', () => {
    const component = renderer.create(
      <Gallery
        images={[
          '/images/image001.jpg',
          '/images/image002.jpg',
          '/images/image003.jpg',
          '/images/image004.jpg',
        ]}
        thumbs={[
          { fluid: fluidShapeMock('/thumb/image001.jpg') },
          { fluid: fluidShapeMock('/thumb/image002.jpg') },
          { fluid: fluidShapeMock('/thumb/image003.jpg') },
          { fluid: fluidShapeMock('/thumb/image004.jpg') },
          { fluid: fluidShapeMock('/thumb/image005.jpg') },
        ]}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
