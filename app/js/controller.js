function CloudSettings(json){
  this.json = json;
}

CloudSettings.prototype.get_settings = function(){
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
