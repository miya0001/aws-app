(function($){

  $.ajax({
    type: "GET",
    dataType: 'json',
    url: "package.json",
    async: false,
    success: function(data){
      document.title = data.window.title;
      $('.navbar-brand').text(data.window.title);
    }
  });

  var cloud = new CloudSettings('app/json/aws.json');
  var cloud_settings = cloud.get_settings();
  $('#sidemenu').html($('#template-sidemenu').render(cloud_settings));
  $('#app-container').html($('#template-app-container').render(cloud_settings));

  $('#sidemenu .list-group-item').click(function(e){
    $('#sidemenu .list-group-item').removeClass('active');
    $(this).addClass('active');
    var event = new $.Event('app', {parentid: $(this).data('parent'), appid: $(this).data('appid')});
    $(this).trigger(event);
    e.preventDefault();
  });

  $('#sidemenu .list-group-item:first').addClass('active');

})(jQuery);
