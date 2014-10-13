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

    var event = new $.Event('app', {
      "provider": provider.name,
      "attr": $(this).data()
    });
    $('#app-container').trigger(event);

    e.preventDefault();
  });

  $('#app-container').bind('app', function(e){
    app.set_current_app(e.attr.app_name);
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

  $('#app-container').bind('app', function(e){
    var tpl = app.get_template();
    var self = this;
    $.get(tpl, function(value) {
      var template = $.templates(value);
      $(self).html(template.render(e));
      var event = new $.Event('after-app-'+e.attr.app_name, {
        'provider': e.provider,
        'attr': e.attr
      });
      $(self).trigger(event);
    }).fail(function(){
      app.fatal_error('<code>' + tpl + '</code> not found.');
    });
  });


  /*
   * initialize
   */
  var first = $('#sidemenu .list-group-item:first');
  $(first).trigger('click');

})(jQuery);
