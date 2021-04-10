import * as React from 'react'
import Gallery from '../src/index'
import { createRenderer } from 'react-test-renderer/shallow'
import { Layout } from 'gatsby-plugin-image'

const constrainedLayout: Layout = 'constrained'
const gatsbyImageShapeMock = (path: string) => {
  return {
    layout: constrainedLayout,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    images: {
      sources: [
        {
          media: path,
          type: 'JPG',
          srcSet: path,
        },
      ],
      fallback: {
        src: path,
      },
      alt: path,
    },
  }
}

const unifiedImageShapeMock = (path: string, alt?: string) => ({
  thumb: gatsbyImageShapeMock(`/thumb${path}`),
  full: gatsbyImageShapeMock(path),
  thumbAlt: alt || '',
})

describe('Gallery component', () => {
  test('that it renders with empty props', () => {
    const renderer = createRenderer()
    renderer.render(<Gallery images={[]} />)
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })

  describe('Unified image prop', () => {
    test('that it renders image prop when no alt property is used', () => {
      const renderer = createRenderer()
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
      const renderer = createRenderer()
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
      const renderer = createRenderer()
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
      const renderer = createRenderer()
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

  describe('rowMargin prop', () => {
    const rowMargin = 0

    test('that the rowMargin prop is accepted', () => {
      const renderer = createRenderer()
      renderer.render(
        <Gallery
          images={[
            unifiedImageShapeMock('/images/image001.jpg'),
            unifiedImageShapeMock('/images/image002.jpg'),
            unifiedImageShapeMock('/images/image003.jpg'),
          ]}
          rowMargin={rowMargin}
        />
      )

      const result = renderer.getRenderOutput()
      expect(result).toMatchSnapshot()
    })
  })

  describe('onClose prop', () => {
    const onClose = () => {
      console.log('test onClose')
    }

    test('onClose prop is accepted', () => {
      const renderer = createRenderer()
      renderer.render(
        <Gallery
          images={[
            unifiedImageShapeMock('/images/image001.jpg'),
            unifiedImageShapeMock('/images/image002.jpg'),
            unifiedImageShapeMock('/images/image003.jpg'),
          ]}
          onClose={onClose}
        />
      )

      const result = renderer.getRenderOutput()
      expect(result).toMatchSnapshot()
    })
  })

  describe('custom wrapper', () => {
    const CustomWrapper: React.FC<{
      onClick?: () => void
    }> = ({ children, onClick }) => <div onClick={onClick}>{children}</div>

    test('render with custom wrapper', () => {
      const renderer = createRenderer()
      renderer.render(
        <Gallery
          images={[
            unifiedImageShapeMock('/images/image001.jpg'),
            unifiedImageShapeMock('/images/image002.jpg'),
            unifiedImageShapeMock('/images/image003.jpg'),
          ]}
          customWrapper={CustomWrapper}
        />
      )

      const result = renderer.getRenderOutput()
      expect(result).toMatchSnapshot()
    })
  })
})
