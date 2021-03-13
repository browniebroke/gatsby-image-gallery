const path = require('path')
const postcss = require('rollup-plugin-postcss')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        extract: path.resolve('dist/style.css'),
      })
    )
    return config
  },
}
