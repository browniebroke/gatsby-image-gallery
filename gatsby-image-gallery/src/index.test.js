import React from 'react'
import Gallery from './index'
import ShallowRenderer from 'react-test-renderer/shallow'

const fluidShapeMock = (path) => ({
  aspectRatio: 1.5,
  src: path,
  srcSet: `some srcSet`,
  srcSetWebp: `some srcSetWebp`,
  sizes: `(max-width: 600px) 100vw, 600px`,
  base64: `string_of_base64`,
})

const unifiedImageNodeShapeMock = (path) => ({
  node: {
    childImageSharp: {
      thumb: fluidShapeMock(`/thumb${path}`),
      fluid: fluidShapeMock(path),
    },
  },
})

describe('Gallery component', () => {
  test('that it renders with empty props', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Gallery images={[]} thumbs={[]} />)
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })

  test('that it renders with data in images', () => {
    const renderer = new ShallowRenderer()
    renderer.render(
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
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })

  test('that it renders with data in thumbs', () => {
    const renderer = new ShallowRenderer()
    renderer.render(
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
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })

  test('that it renders with data in images & thumbs', () => {
    const renderer = new ShallowRenderer()
    renderer.render(
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
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })

  test('that it renders with data in fullImages & thumbs', () => {
    const renderer = new ShallowRenderer()
    renderer.render(
      <Gallery
        fullImages={[
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
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })

  test('that it renders with unified image prop', () => {
    const renderer = new ShallowRenderer()
    renderer.render(
      <Gallery
        images={[
          unifiedImageNodeShapeMock('/images/image001.jpg'),
          unifiedImageNodeShapeMock('/images/image002.jpg'),
          unifiedImageNodeShapeMock('/images/image003.jpg'),
          unifiedImageNodeShapeMock('/images/image004.jpg'),
          unifiedImageNodeShapeMock('/images/image005.jpg'),
        ]}
      />
    )
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })

  test('that it renders with a custom column class', () => {
    const renderer = new ShallowRenderer()
    renderer.render(
      <Gallery
        colClass="col-md-3"
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
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
