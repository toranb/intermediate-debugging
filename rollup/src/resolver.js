var Resolver = function() {
  this.cwd = process.cwd();
};

Resolver.prototype.storePath = function() {
  return this.cwd + '/node_modules/debuggin/src/store.js:./';
};

module.exports = Resolver;
