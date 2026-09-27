// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

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
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/QuaySansITCStd-MediumItalic.woff2'],
            weight: 700,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    }, // 👈 Added missing closing brace here
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
  ], // 👈 Fixed closing bracket for fonts array

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});