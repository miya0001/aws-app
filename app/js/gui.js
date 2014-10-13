(function(){

var nw = require('nw.gui');

// https://github.com/rogerwang/node-webkit/wiki/App
console.log(nw.App.dataPath);

var win = nw.Window.get();
var nativeMenuBar = new nw.Menu({ type: "menubar" });

nativeMenuBar.createMacBuiltin(app.get_pkg().window.title);
win.menu = nativeMenuBar;

})();
