const path = require('path');
const fs = require("fs");

module.exports = {
  // ...
  resolve: {
    fallback: {
      'path': require.resolve('path-browserify')
    }
  }
  // ...
};




