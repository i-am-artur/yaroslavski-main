import { defineConfig } from '@pandacss/dev';
import { tokens } from './src/styles/panda/tokens';
import { utilities } from './src/styles/panda/utilities/utilities';
import { textStyles } from './src/styles/panda/textStyles';
import { breakpoints } from './src/styles/panda/breakpoints';

export default defineConfig({
  // Whether to use css reset
  eject: false,
  minify: false,
  preflight: true,
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  presets: [],
  // Files to exclude
  exclude: [],

  // Useful for theme customization

  // The output directory for your css system
  outdir: 'styled-system',

  // @ts-expect-error
  utilities,
  theme: {
    extend: {
      breakpoints,
      tokens,
      textStyles,
      // recipes: {
      //   stack,
      // },
    },
  },
});
