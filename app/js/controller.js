'use strict';

function MyController(){
}

MyController.prototype.set_provider = function(provider, json) {
  this.provider = provider;
  this.json = json;
}

MyController.prototype.init = function(){
  var model = new MyModel(this.json);
  this.cloud = model.cloud();
  this.pkg = model.pkg();
}

MyController.prototype.get_cloud = function(){
  return this.cloud;
};

MyController.prototype.get_pkg = function(){
  return this.pkg;
};
