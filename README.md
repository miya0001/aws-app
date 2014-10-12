# AWS Desktop Management Console

## Required

* MacOSX
* Windows

## How to develop

```
$ git clone git@github.com:miya0001/aws-app.git
$ cd aws-app
$ npm install
$ bower install
```

### How to preview

```
$ npm start
```

### How to test

```
$ npm test
```

or

```
$ grunt test
```

### How to build

```
$ grunt build
```

See `build/` after you run command.

### Note

If you have an error like below, run command `ulimit 1025` and `grunt` again.

```
Fatal error: EMFILE, open ...
```

### License

GPLv2 or later
