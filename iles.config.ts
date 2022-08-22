import { resolve } from 'path'
import { defineConfig } from 'iles'

import excerpt from '@islands/excerpt'
import headings from '@islands/headings'
import icons from '@islands/icons'
import prism from '@islands/prism'
import images, { hdPreset } from '@islands/images'
import pwa from '@islands/pwa'

import windicss from 'vite-plugin-windicss'
import inspect from 'vite-plugin-inspect'
import lastUpdated from './modules/lastUpdated'
import site from './src/site'

const { title, description } = site

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
      lastUpdated(),
      excerpt(),
//       pwa({
//         manifestFilename: 'pwa-manifest.json',
//         manifest: {
//           id: '/',
//           name: title,
//           short_name: title,
//           description,
//           theme_color: '#5C7E8F',
//           background_color: '#ffffff',
//           icons: [
//             {
//               src: 'https://github.com/moedayraki.png',
//               sizes: '192x192',
//               type: 'image/png',
//             },
//             {
//               src: 'https://github.com/moedayraki.png',
//               sizes: '512x512',
//               type: 'image/png',
//             },
//             {
//               src: 'https://github.com/moedayraki.png',
//               sizes: '192x192',
//               type: 'image/png',
//               purpose: 'any maskable',
//             },
//           ],
//         },
//         workbox: {
//           globPatterns: ['**/*.{js,css,svg,ico,png,avif,json,xml,html}'],
//           runtimeCaching: [
//             {
//               urlPattern: new RegExp('https://unpkg.com/.*', 'i'),
//               handler: 'CacheFirst',
//               options: {
//                 cacheName: 'unpkg-cache',
//                 expiration: {
//                   maxEntries: 10,
//                   maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
//                 },
//                 cacheableResponse: {
//                   statuses: [0, 200],
//                 },
//               },
//             },
//             {
//               urlPattern: new RegExp('https://pixel.thesemetrics.org/.*', 'i'),
//               handler: 'CacheFirst',
//               options: {
//                 cacheName: 'thesemetrics-cache',
//                 expiration: {
//                   maxEntries: 10,
//                   maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
//                 },
//                 cacheableResponse: {
//                   statuses: [0, 200],
//                 },
//               },
//             },
//           ],
//         },
//       }),
    ],
    markdown: {
      rehypePlugins: [
        'rehype-external-links',
      ],
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
