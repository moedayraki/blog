import { defineConfig } from 'iles'
import icons from '@islands/icons'
import images, { hdPreset } from '@islands/images'
import pwa from '@islands/pwa'

export default defineConfig({
    siteUrl: 'https://www.blog.dayrakiarts.com',
    vue: {
        reactivityTransform: true,
      },
    modules: [
        icons,
        // ['@islands/excerpt', { maxLength: 140 }],
        '@islands/headings',
        '@islands/icons',
        // '@islands/feed',
        // '@islands/prism',
        pwa(),
        images({
            thumnail: hdPreset({
              class: 'img thumb',
              loading: 'lazy',
              widths: [48, 96],
              formats: {
                webp: { quality: 44 },
                original: {},
              },
            }),
          }),
    ]
})
