'use strict';

function MyModel(json){
  this.json = json;
  this.package_json = 'package.json';
}

MyModel.prototype.cloud = function(){
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

MyModel.prototype.pkg = function(){
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
