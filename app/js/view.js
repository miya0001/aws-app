(function($){

  'use strict'

  var app = new MyController();
  app.set_provider('aws', 'app/json/aws.json');
  app.init();

  document.title = app.get_pkg().window.title;
  $('.navbar-brand').text(app.get_pkg().window.title);

  $('#sidemenu').html($('#template-sidemenu').render(app.get_cloud()));

  $('#sidemenu .list-group-item').click(function(e){
    $('#sidemenu .list-group-item').removeClass('active');
    $(this).addClass('active');
    var parent_name = $(this).data('parent_name');
    var app_name = $(this).data('app_name');
    var event1 = new $.Event('app', {parent_name: parent_name, app_name: app_name});
    $('#app-container').trigger(event1);
    var event2 = new $.Event('app-'+app_name, {parent_name: parent_name, app_name: app_name});
    $('#app-container').trigger(event2);
    e.preventDefault();
  });

  var first = $('#sidemenu .list-group-item:first');
  first.addClass('active');
  set_breadcrumb(first.data('parent_name'), first.data('app_name'));

  function set_breadcrumb(parent_name, child_name) {
    var parent = app.get_parent(parent_name).label;
    var child = app.get_app(parent_name, child_name).label;
    $('#breadcrumb').html($('#template-breadcrumb').render({parent_name:parent, app_name:child}));
  }

  /*
   * Events
   */
  $('#app-container').bind('app', function(e){
    set_breadcrumb(e.parent_name, e.app_name);
  });

})(jQuery);
