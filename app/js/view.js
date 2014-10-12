(function init($){

  'use strict';

  var provider = {
    "name": "aws",
    "json": "app/json/aws.json"
  };

  var app = new MyController();
  app.set_provider(provider);
  app.init();

  if (app.get_pkg() && app.get_cloud()) {
    document.title = app.get_pkg().window.title;
    $('#brand .label').text(app.get_pkg().window.title);
    $('#sidemenu').html($('#template-sidemenu').render(app.get_cloud()));
  } else {
    app.fatal_error('Config file not found.');
  }

  /*
   * Bind events
   */
  $('.app-navigation').bind("click", function(e){
    $('.app-navigation').removeClass('active');
    $(this).addClass('active');

    var event1 = new $.Event('app', {
      "provider": provider.name,
      "attr": $('.app-navigation.active:first').data()
    });
    $('#app-container').trigger(event1);

    var event2 = new $.Event('app-'+$(this).data('app_name'), {
      "provider": provider.name,
      "attr": $('.app-navigation.active:first').data()
    });
    $('#app-container').trigger(event2);

    e.preventDefault();
  });

  $('#app-container').bind('app', function(e){
    $('#breadcrumb').html($('#template-breadcrumb').render({
      parent_label: e.attr.parent_label,
      app_label: e.attr.app_label
    }));
  });

  $('.dropdown-menu a').bind("click", function(e){
    if ($(this).data('label')) {
      var label = $(this).data('label');
      $('#'+label).text($(this).text());
      e.preventDefault();
    }
  });

  /*
   * initialize
   */
  var first = $('#sidemenu .list-group-item:first');
  $(first).trigger('click');

})(jQuery);
