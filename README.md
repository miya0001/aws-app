# Amimoto Desktop

Launch AWS Amimoto AMI on the Desktop.

[http://amimoto-ami.com/](http://amimoto-ami.com/)

## Required

* MacOSX
* Windows

## How to develop

```
$ git clone git@github.com:miya0001/amimoto-desktop.git
$ cd amimoto-desktop
$ npm install
```

### How to preview

```
$ npm start
```

### How to test

```
$ npm test
```

### How to build

```
$ grunt
```

### Note

If you have an error like below.

```
Fatal error: EMFILE, open ...
```

Run command `ulimit 1025` and `grunt` again.
