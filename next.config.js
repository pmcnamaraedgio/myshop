// This file was automatically added by edgio init.
// You should commit this file to source control.
const { withEdgio, withServiceWorker } = require('@edgio/next/config')

const _preEdgioExport = {
  images: {
    domains: ['imgur.com'],
  },
};;

module.exports = (phase, config) =>
  withEdgio(
    withServiceWorker({
      // Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
      // the logs in the Edgio developer console.
      edgioSourceMaps: true,

      // Set the following to `true` to disable the Edgio dev tools.
      disableEdgioDevTools: false,

      ..._preEdgioExport
    })
  )
