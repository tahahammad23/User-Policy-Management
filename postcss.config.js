// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    // You typically **don’t need** `autoprefixer`, `postcss-import`, etc. unless you have other CSS tooling
  },
}
