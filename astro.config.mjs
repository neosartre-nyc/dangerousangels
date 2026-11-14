// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import d2 from 'astro-d2';

export default defineConfig({
  site: 'https://example.com',

  integrations: [mdx(), sitemap(), d2()],

  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['d2', 'math'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    // Run prerendering in Node; use Cloudflare's runtime at deployment.
    prerenderEnvironment: 'node',
  }),

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'QuaySans',
      cssVariable: '--font-quay',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/QuaySansITCStd-Book.woff2'],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/QuaySansITCStd-Medium.woff2'],
            weight: 700,
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/QuaySansITCStd-BookItalic.woff2'],
            weight: 400,
            style: 'italic',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/QuaySansITCStd-MediumItalic.woff2'],
            weight: 700,
            style: 'italic',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Merriweather',
      cssVariable: '--font-merriweather',
      fallbacks: ['serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Merriweather-Regular.woff2'],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/Merriweather-SemiBold.woff2'],
            weight: 700,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
});