import { resolve } from 'path'
import { defineConfig } from 'iles'

import excerpt from '@islands/excerpt'
import headings from '@islands/headings'
import icons from '@islands/icons'
import prism from '@islands/prism'
import images, { hdPreset } from '@islands/images'

import windicss from 'vite-plugin-windicss'
import inspect from 'vite-plugin-inspect'
import lastUpdated from './modules/lastUpdated'
import site from './src/site'

const { title, description } = site

const presets = {
  narrow: hdPreset({
    width: 200,
    widths: [200],
    formats: {
      avif: { quality: 44 },
      webp: { quality: 44 },
      original: {},
    },
  }),
  post: hdPreset({
    widths: [440, 758],
    formats: {
      avif: { quality: 44 },
      webp: { quality: 44 },
      original: {},
    },
  }),
}

export default defineConfig({
    siteUrl: 'https://www.blog.dayrakiarts.com',
    turbo: true,
    vue: {
        reactivityTransform: true,
      },
    modules: [
      headings(),
      icons(),
      prism(),
      // images(presets),
      lastUpdated(),
      excerpt(),
    ],
    markdown: {
      rehypePlugins: [
        'rehype-external-links',
      ],
      // withImageSrc (src) {
      //   if (!src.includes('?'))
      //     return `${src}?preset=post`
      // },
    },
    extendFrontmatter (frontmatter, filename) {
      if (filename.includes('/posts/'))
        frontmatter.layout ||= 'post'
    },
    vite: {
      resolve: {
        alias: {
          '~images': resolve(__dirname, 'images'),
        },
      },
      plugins: [
        windicss(),
        Boolean(process.env.DEBUG) && inspect(),
      ],
    },
})
