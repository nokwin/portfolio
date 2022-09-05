const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          green: '#41C532',
          black: '#1E1E1E',
          white: '#F2F2F2',
        },
      },
      spacing: {
        29: '7.25rem',
      },
    },
  },
  plugins: [],
};
