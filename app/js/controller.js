'use strict'

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

MyController.prototype.get_app = function(parent, name){
  var app;
  for (var i=0; i<this.cloud.length; i++) {
    if (this.cloud[i].name == parent) {
      for (var j=0; j<this.cloud[i].submenu.length; j++) {
        if (this.cloud[i].submenu[j].name == name) {
          app = this.cloud[i].submenu[j];
        }
      }
    }
  }
  return app;
};

MyController.prototype.get_parent = function(parent){
  var app;
  for (var i=0; i<this.cloud.length; i++) {
    if (this.cloud[i].name == parent) {
      app = this.cloud[i];
    }
  }
  return app;
};
