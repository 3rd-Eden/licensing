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


Licenses information:

predefine@0.0.x                                  : MIT
eventemitter3@0.1.x                              : MIT
extendable@0.0.x                                 : MIT
load@1.0.x                                       : MIT
forwarded-for@0.0.x                              : MIT

Found a module that is incorrectly or not detected at all but does
have a valid license? Please report this at:

https://github.com/3rd-Eden/licenses/issues/new

So we can improve the parsing algorithm and yield better results.
```

## License

MIT
