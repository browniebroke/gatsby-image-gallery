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

const unifiedImageShapeMock = (path, alt) => ({
  thumb: fluidShapeMock(`/thumb${path}`),
  full: fluidShapeMock(path),
  thumbAlt: alt,
})

describe('Gallery component', () => {
  test('that it renders with empty props', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Gallery images={[]} />)
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
      />
    )
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })

  describe('Unified image prop', () => {
    test('that it renders image prop when no alt property is used', () => {
      const renderer = new ShallowRenderer()
      renderer.render(
        <Gallery
          images={[
            unifiedImageShapeMock('/images/image001.jpg'),
            unifiedImageShapeMock('/images/image002.jpg'),
            unifiedImageShapeMock('/images/image003.jpg'),
            unifiedImageShapeMock('/images/image004.jpg'),
            unifiedImageShapeMock('/images/image005.jpg'),
          ]}
        />
      )
      const result = renderer.getRenderOutput()
      expect(result).toMatchSnapshot()
    })

    test('that it renders image prop when alt property is used', () => {
      const renderer = new ShallowRenderer()
      renderer.render(
        <Gallery
          images={[
            unifiedImageShapeMock('/images/image001.jpg', '001'),
            unifiedImageShapeMock('/images/image002.jpg', '002'),
            unifiedImageShapeMock('/images/image003.jpg', '003'),
            unifiedImageShapeMock('/images/image004.jpg', '004'),
            unifiedImageShapeMock('/images/image005.jpg', '005'),
          ]}
        />
      )
      const result = renderer.getRenderOutput()
      expect(result).toMatchSnapshot()
    })

    test('that it renders image prop when only in some cases the alt property is used', () => {
      const renderer = new ShallowRenderer()
      renderer.render(
        <Gallery
          images={[
            unifiedImageShapeMock('/images/image001.jpg', '001'),
            unifiedImageShapeMock('/images/image002.jpg', '002'),
            unifiedImageShapeMock('/images/image003.jpg'),
            unifiedImageShapeMock('/images/image004.jpg'),
            unifiedImageShapeMock('/images/image005.jpg', '005'),
          ]}
        />
      )
      const result = renderer.getRenderOutput()
      expect(result).toMatchSnapshot()
    })
  })

  describe('lightboxOptions props', () => {
    const lightboxOptions = {
      imageLoadErrorMessage: 'Impossible de charger cette image',
      nextLabel: 'Image suivante',
      prevLabel: 'Image précédente',
      zoomInLabel: 'Zoomer',
      zoomOutLabel: 'Dézoomer',
      closeLabel: 'Fermer',
    }

    test('that the Lightbox options are accepted', () => {
      const renderer = new ShallowRenderer()
      renderer.render(
        <Gallery
          images={[
            unifiedImageShapeMock('/images/image001.jpg'),
            unifiedImageShapeMock('/images/image002.jpg'),
            unifiedImageShapeMock('/images/image003.jpg'),
          ]}
          lightboxOptions={lightboxOptions}
        />
      )

      const result = renderer.getRenderOutput()
      expect(result).toMatchSnapshot()
    })
  })
})
