# licensing

This is a small command line utlity to figure out the licensing footprint of
your project or from a given module name.

## Installation

```
npm install -g licensing
```

## Usage

```
  licensing [flags]

  --package [dir]    : The location of the package.json to use
  --registry [url]   : The registry we should use to resolve packages
  --name [name]      : Discover the footprint of a module instead
  --production       : Do not include devDependencies
  --help             : Display this message

example:
  licensing --name primus
```

Example output for the example command above:

```

Resolving dependencies, this might take a while

primus is licensed as: MIT

Licenses information:

predefine@0.0.x                                  : MIT
eventemitter3@0.1.x                              : MIT
forwarded-for@0.0.x                              : MIT
load@1.0.x                                       : MIT
extendable@0.0.x                                 : MIT

Found a module that is incorrectly or not detected at all but does
have a valid license? Please report this at:

https://github.com/3rd-Eden/licenses/issues/new

So we can improve the parsing algorithm and yield better results.

```

If you're just curious about the license impact of your current project, simply
run `licensing` and it will read out your `package.json` and start searching for
licensing information. Here's the license information that got outputted for
this module:

```

Resolving dependencies, this might take a while

Licenses information:

shrinkwrap@0.1.x                                 : MIT
licenses@0.0.x                                   : MIT
argh@0.1.x                                       : MIT
eventemitter3@0.1.x                              : MIT
async@0.2.x                                      : MIT
npm-registry@0.0.x                               : MIT
fusing@0.0.x                                     : MIT
githulk@0.0.x                                    : MIT
semver@2.2.x                                     : BSD 4-Clause
extract-github@0.0.x                             : MIT
mana@0.1.x                                       : MIT
predefine@0.0.x                                  : MIT
assign@0.1.x                                     : MIT
request@2.34.x                                   : Apache, Version 2.0
back@0.1.x                                       : MIT
debug@0.7.x                                      : MIT
json-stringify-safe@~5.0.0                       : BSD 4-Clause
extendable@0.0.x                                 : MIT
form-data@~0.1.0                                 : MIT
tough-cookie@>=0.12.0                            : MIT
ms@0.6.x                                         : MIT
forever-agent@~0.5.0                             : Apache 2.0
async@~0.2.9                                     : MIT
mime@~1.2.9                                      : MIT
mime@~1.2.11                                     : MIT
qs@~0.6.0                                        : MIT
node-uuid@~1.4.0                                 : MIT
http-signature@~0.10.0                           : MIT
aws-sign2@~0.5.0                                 : Apache 2.0
punycode@>=0.2.0                                 : MIT, GPL
combined-stream@~0.0.4                           : MIT
delayed-stream@0.0.5                             : MIT

Found a module that is incorrectly or not detected at all but does
have a valid license? Please report this at:

https://github.com/3rd-Eden/licenses/issues/new

So we can improve the parsing algorithm and yield better results.

```

## License

MIT
