'use strict';

function MyModel(json){
  this.json = json;
  this.package_json = 'package.json';
  this.config_json = 'app/json/config.json'
}

MyModel.prototype.get_config = function(){
  var config;
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: this.config_json,
    async: false,
    success: function(data){
      config = data;
    }
  });
  return config;
};

MyModel.prototype.get_cloud = function(){
  var settings;
  jQuery.ajax({
    type: "GET",
    dataType: 'json',
    url: this.json,
    async: false,
    success: function(data){
      settings = data;
    }
  });
  return settings;
};

MyModel.prototype.get_pkg = function(){
  var pkg;
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: this.package_json,
    async: false,
    success: function(data){
      pkg = data;
    }
  });
  return pkg;
};
