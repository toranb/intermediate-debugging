'use strict';

const path = require('path');
const fs = require('fs-extra');
const mkdirp = require('mkdirp');
const assert = require('assert');
const helper = require('./helper');
const { rollup } = require('rollup');
const glimmerRedux = require('../src/index');

helper.prepareSamples();

describe('rollup debuggin', function() {

  beforeEach(function() {
    mkdirp.sync(path.join('src'));
  });

  afterEach(function() {
    fs.removeSync(path.join('src'));
  });

  it('javascript reducers included when user provides path', function () {
    helper.patchReducer('basic');

    return rollup({
      input: 'samples/basic/main.js',
      plugins: [
        glimmerRedux()
      ]
    }).then((bundle) => {
      return bundle.generate({ format: 'es' });
    }).then(({ code }) => {
      let result = fs.readFileSync(path.join(__dirname, 'samples', 'basic', 'result.js'), 'utf8');
      assert.strictEqual(result, code);
    });
  });

});
