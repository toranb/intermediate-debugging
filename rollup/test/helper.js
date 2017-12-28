'use strict';

var path = require('path');
var fs = require('fs-extra');
var Resolver = require('../src/resolver');

var prepareSamples = function() {
  fs.copySync(path.join('samples', 'src'), path.join('samples', 'basic', 'src'));
}

var patchReducer = function(directory) {
  Resolver.prototype.storePath = function() {
    return this.cwd + '/samples/' + directory + '/src/store.js:./';
  }
}

var helper = {
  patchReducer: patchReducer,
  prepareSamples: prepareSamples
}

module.exports = helper;
