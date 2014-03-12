#!/usr/bin/env node
'use strict';

var Shrinkwrap = require('shrinkwrap')
  , argh = require('argh').argv
  , path = require('path')
  , fs = require('fs');

argh.package = argh.package || path.join(process.cwd(), 'package.json');
argh.registry = argh.registry || 'http://registry.npmjs.org/';

//
// Invalid arguments, output help
//
if (!fs.existsSync(argh.package) && !argh.name || argh.help) {
  console.log();
  console.log('  licensing [flags]');
  console.log();
  console.log('  --package [dir]    : The location of the package.json to use');
  console.log('  --registry [url]   : The registry we should use to resolve packages');
  console.log('  --name [name]      : Discover the footprint of a module instead');
  console.log('  --production       : Do not include devDependencies');
  console.log('  --help             : Display this message');
  console.log('');
  console.log('example:');
  console.log('  licensing --name primus');
  console.log();
  process.exit(1);
}

//
// Setup our shrinkwrap module so we can spider all dependencies.
//
var shrinkwrap = new Shrinkwrap({
  registry: argh.registry,
  production: !!argh.production
});

console.log('');
console.log('Resolving dependencies, this might take a while');
console.log('');

if (argh.name) shrinkwrap.get(argh.name, next);
else shrinkwrap.resolve(require(argh.package), next);

/**
 * Output the results.
 *
 * @param {Error}
 */
function next(err, dependencies, dependend) {
  if (err) {
    console.log('');
    console.log('Failed to correctly resolve the licensing information');
    console.log('Received the following error:');
    console.log('');
    console.log('  ', err.message);
    console.log('');
    return process.exit(1);
  }


  console.log('');
  console.log('Licenses information:');
  console.log('');

  //
  // Output licensing information.
  //
  Object.keys(dependend).forEach(function each(key) {
    var pkg = dependend[key]
      , padding = (new Array(50)).join(' ').slice(key.length);

    console.log(key + padding +': '+ (
      dependend[key].licenses
      ?  dependend[key].licenses.join(', ')
      : ''
    ));
  });

  console.log('');
  console.log('Found a module that is incorrectly or not detected at all but does');
  console.log('have a valid license? Please report this at:');
  console.log('');
  console.log('https://github.com/3rd-Eden/licenses/issues/new');
  console.log('');
  console.log('So we can improve the parsing algorithm and yield better results.');
  console.log('');
}
