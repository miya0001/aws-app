'use strict';

QUnit.test( "model.js test", function( assert ) {
  var model = new MyModel('app/json/aws.json');
  assert.ok("app/json/aws.json" == model.json, "'app/json/aws.json' == model.json");
  assert.ok(3 == model.get_cloud().length, "3 == model.cloud()");
});

QUnit.test( "controller.js test", function( assert ) {
  var app = new MyController();
  var provider = {
    "name": "aws",
    "json": "app/json/aws.json"
  };
  app.set_provider(provider);
  app.init();
  assert.ok('aws' == app.provider, "'aws' == app.provider");
  assert.ok('app/json/aws.json' == app.json, "'app/json/aws.json' == app.json");
  assert.ok(3 == app.get_cloud().length, "3 == controller.get_cloud()");
  assert.ok('this is dummy for test' == app.get_config().test, "'this is dummy for test' == app.get_config().test");
  assert.ok('this is dummy for test' == app.get_config('test'), "'this is dummy for test' == app.get_config('test')");
  assert.ok('' == app.get_config('hoge'), "'' == app.get_config('hoge')");
  assert.ok(app.is('String', 'hoge'), "app.is('String', 'hoge')");
  assert.ok(!app.is('String', ['a']), "!app.is('String', ['a'])");
  assert.ok(app.is('Array', ['a']), "app.is('Array', ['a'])");
  assert.ok('a/b' == app.join('a', 'b'), "'a/b' == app.join('a', 'b')");
  assert.ok('a/b' == app.join('a/', 'b/'), "'a/b' == app.join('a/', 'b')");
});

QUnit.test( "UI test", function( assert ) {
  assert.ok('AWS Dashboard' == document.title, "'AWS Dashboard' == document.title");
});
