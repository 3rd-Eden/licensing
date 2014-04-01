# licensing

This is a small command line utlity to figure out the licensing footprint of
your project or from a given module name.

## Installation

```
npm install -g licensing
```

## CLI usage

```
  licensing [flags]

  --package [dir]    : The location of the package.json to use
  --registry [url]   : The registry we should use to resolve packages
  --name [name]      : Discover the footprint of a module instead
  --devDependencies  : Also include all devDependencies
  --help             : Display this message

example:
  licensing --name primus
```

## Debugging

The module and it's submodules that make this license parsing possible are
instrumented with the `debug` logging module. If something doesn't work as expected
you can see some useful output by prefixing the `licensing` command with the
`DEBUG` env variable:

```
DEBUG=* licensing
```

## Github API ratelimit

The module where this CLI application is build upon makes heavy use of Github and
it's API for resolving licenses. The GitHub API is rate limited to only `60`
requests per hour. Which isn't enough for bigger projects that have a lot of
dependencies or if you want to resolve devDependencies. In order to go around this
limitation you can supply a `GITHUB_TOKEN` env variable which contains a personal
OAuth token from your github account. To generate a token:

1. Go to your account page on GitHub: https://github.com/settings/tokens/new
2. Make sure you select `public_repo` and generate a new token.
3. Save the token in `bashrc/.profile/zshrc` or use it directly using:

```
GITHUB_TOKEN="adasfadsfadf08df08afa<your token here if it wasn't obvious>" licensing
```

## Resolving actual dependencies.

Armed with this information we can simply resolve the license footprint of a given
module using the `licenses --name <name>` command. The following output is the
result of that for the `primus` module:

```

Resolving dependencies, this might take a while

primus is licensed as: MIT

Licenses information:

load@1.0.x                                       : MIT
fusing@0.1.x                                     : MIT
eventemitter3@0.1.x                              : MIT
forwarded-for@0.0.x                              : MIT
access-control@0.0.x                             : MIT
predefine@0.0.x                                  : MIT
setheader@0.0.x                                  : MIT
ms@~0.6.2                                        : MIT
extendable@0.0.x                                 : MIT
debug@0.7.x                                      : MIT

Found a module that is incorrectly or not detected at all but does
have a valid license? Please report this at:

https://github.com/3rd-Eden/licenses/issues/new

Which is the library that does the actual parsing and detection of
the license so we can improve it's parsing algorithm and yield
better results.

```

If you're just curious about the license impact of your current project, simply
run `licensing` and it will read out your `package.json` and start searching for
licensing information. Here's the license information that got outputted for
this module:

```
Resolving dependencies, this might take a while

Licenses information:

shrinkwrap@0.3.x                                 : MIT
argh@0.1.x                                       : MIT
licenses@0.0.x                                   : MIT
debug@0.8.x                                      : MIT
eventemitter3@0.1.x                              : MIT
npm-registry@0.1.x                               : MIT
fusing@0.2.x                                     : MIT
async@0.6.x                                      : MIT
githulk@0.0.x                                    : MIT
extract-github@0.0.x                             : MIT
mana@0.1.x                                       : MIT
semver@2.2.x                                     : BSD 4-Clause
predefine@0.0.x                                  : MIT
debug@0.7.x                                      : MIT
assign@0.1.x                                     : MIT
back@0.1.x                                       : MIT
ms@0.6.x                                         : MIT
request@2.34.x                                   : Apache 2.0
extendable@0.0.x                                 : MIT
fusing@0.0.x                                     : MIT
qs@~0.6.0                                        : MIT
json-stringify-safe@~5.0.0                       : BSD 4-Clause
forever-agent@~0.5.0                             : Apache 2.0
node-uuid@~1.4.0                                 : MIT
mime@~1.2.9                                      : MIT
tough-cookie@>=0.12.0                            : MIT
form-data@~0.1.0                                 : MIT
tunnel-agent@~0.3.0                              : Apache 2.0
http-signature@~0.10.0                           : MIT
oauth-sign@~0.3.0                                : Apache 2.0
hawk@~1.0.0                                      : BSD 4-Clause
aws-sign2@~0.5.0                                 : Apache 2.0
punycode@>=0.2.0                                 : MIT, GPL
combined-stream@~0.0.4                           : MIT
mime@~1.2.11                                     : MIT
async@~0.2.9                                     : MIT
assert-plus@0.1.2                                : MIT
asn1@0.1.11                                      : MIT
ctype@0.5.2                                      : MIT
hoek@1.x.x                                       : BSD 4-Clause
boom@2.x.x                                       : BSD 4-Clause
cryptiles@2.x.x                                  : BSD 4-Clause
sntp@1.x.x                                       : BSD 4-Clause
delayed-stream@0.0.5                             : MIT

Found a module that is incorrectly or not detected at all but does
have a valid license? Please report this at:

https://github.com/3rd-Eden/licenses/issues/new

Which is the library that does the actual parsing and detection of
the license so we can improve it's parsing algorithm and yield
better results.

```

## License

MIT
