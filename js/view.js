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

})(jQuery);
