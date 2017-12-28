'use strict';

var Resolver = require('./resolver');
var replace = require('rollup-plugin-replace');

function getCacheKey(id, origin) {
  var isRelativePath = id.indexOf('.') === 0;
  return isRelativePath ? origin + ':' + id : id;
}

function resolveCachedPath(id, origin) {
  var key = getCacheKey(id, origin);
  if (key in includedOverrides) {
    return includedOverrides[key];
  }
  return false;
}

function resolvePath(id, origin) {
  origin = origin || false;
  return resolveCachedPath(id, origin) || null;
}

var includedOverrides = {};

var index = (function () {

  var PathResolver = new Resolver();
  var storePath = PathResolver.storePath();

  var defaultReducer = storePath + 'reducers/index';
  var reducersPath = './src/reducers/index.js';
  var includedOverrides = {
    [defaultReducer]: reducersPath
  };

  return {
    resolveId: function resolveId(file, origin) {
      return resolvePath(file, origin);
    },
    transform: function transform(code, id) {
      return replace({
        "process.env.NODE_ENV": JSON.stringify(process.env.EMBER_ENV)
      }).transform(code, id);
    }
  };
});

module.exports = index;
