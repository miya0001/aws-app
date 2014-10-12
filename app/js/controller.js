'use strict';

function MyController(){
}

MyController.prototype.set_provider = function(provider) {
  this.provider = provider.name;
  this.json = provider.json;
}

MyController.prototype.init = function(){
  var model = new MyModel(this.json);
  this.cloud = model.get_cloud();
  this.pkg = model.get_pkg();
  this.config = model.get_config();
}

MyController.prototype.get_config = function(key){
  if (key) {
    if (typeof this.config[key] === "undefined") {
      return '';
    } else {
      return this.config[key];
    }
  } else {
    return this.config;
  }
};

MyController.prototype.get_cloud = function(){
  return this.cloud;
};

MyController.prototype.get_pkg = function(){
  return this.pkg;
};

MyController.prototype.fatal_error = function(message){
  $('#fatal-error').modal({'backdrop': 'static'});
  $('#fatal-error .message').text(message);
};


/*
 * Detect variable type
 * @param  {string} type Variable type as String, Number, Boolean, Date, Error, Array, Function, RegExp, Object
 * @param  {mixed}  obj  Variable for check object type.
 * @return {bool}
 */
MyController.prototype.is = function(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}


/*
 * Simple path join and dirname functions for generic javascript
 * @param  {string} path path you want to join
 * @return {string}      path
 */
MyController.prototype.join = function(/* path segments */) {
  // Split the inputs into a list of path commands.
  var parts = [];
  for (var i = 0, l = arguments.length; i < l; i++) {
    parts = parts.concat(arguments[i].split("/"));
  }
  // Interpret the path commands to get the new resolved path.
  var newParts = [];
  for (i = 0, l = parts.length; i < l; i++) {
    var part = parts[i];
    // Remove leading and trailing slashes
    // Also remove "." segments
    if (!part || part === ".") continue;
    // Interpret ".." to pop the last segment
    if (part === "..") newParts.pop();
    // Push new path segments.
    else newParts.push(part);
  }
  // Preserve the initial slash if there was one.
  if (parts[0] === "") newParts.unshift("");
  // Turn back into a single string path.
  return newParts.join("/") || (newParts.length ? "/" : ".");
}
