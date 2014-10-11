(function init($){

  'use strict';

  var app = new MyController();
  app.set_provider('aws', 'app/json/aws.json');
  app.init();

  document.title = app.get_pkg().window.title;
  $('#brand .label').text(app.get_pkg().window.title);

  $('#sidemenu').html($('#template-sidemenu').render(app.get_cloud()));

  var first = $('#sidemenu .list-group-item:first');
  first.addClass('active');
  $('#breadcrumb').html($('#template-breadcrumb').render({
    parent_label: first.data('parent_label'),
    app_label: first.data('app_label')
  }));


  /*
   * Events
   */
  $('.app-navigation').click(function(e){
    $('.app-navigation').removeClass('active');
    $(this).addClass('active');
    var event1 = new $.Event('app', {attr: $('.app-navigation.active:first').data()});
    $('#app-container').trigger(event1);
    var event2 = new $.Event('app-'+$(this).data('app_name'), {attr: $('.app-navigation.active:first').data()});
    $('#app-container').trigger(event2);
    e.preventDefault();
  });

  $('#app-container').bind('app', function(e){
    $('#breadcrumb').html($('#template-breadcrumb').render({
      parent_label: e.attr.parent_label,
      app_label: e.attr.app_label
    }));
  });

  $('.dropdown-menu a').click(function(e){
    if ($(this).data('label')) {
      var label = $(this).data('label');
      $('#'+label).text($(this).text());
      e.preventDefault();
    }
  });

})(jQuery);
