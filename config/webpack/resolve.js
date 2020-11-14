const path = require('path')

module.exports = {
  alias: {
    _assets: path.resolve(__dirname, '..', '..', 'src/assets/'),
    _content: path.resolve(__dirname, '..', '..', 'content/'),
    _components: path.resolve(__dirname, '..', '..', 'src/components/'),
    _containers: path.resolve(__dirname, '..', '..', 'src/containers/'),
    _utils: path.resolve(__dirname, '..', '..', 'src/utils/'),
    _views: path.resolve(__dirname, '..', '..', 'src/views/'),
  },
}
