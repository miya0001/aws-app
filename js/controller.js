function CloudSettings(){}

CloudSettings.prototype.get_settings = function(){
  var settings;
  jQuery.ajax({
    type: "GET",
    dataType: 'json',
    url: "settings/aws.json",
    async: false,
    success: function(data){
      settings = data;
    }
  });
  return settings;
};

CloudSettings.prototype.get_contents = function(){
  var settings = this.get_settings();
  return settings;
};
