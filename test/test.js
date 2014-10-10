'use strict'

QUnit.test( "model.js test", function( assert ) {
  var model = new MyModel('test.json');
  assert.ok("test.json" == model.json, "'test.json' == model.json");
  assert.ok(2 == model.cloud().length, "2 == model.cloud()");
});

QUnit.test( "controller.js test", function( assert ) {
  var app = new MyController();
  app.set_provider('unittest', 'test.json');
  app.init();
  assert.ok('unittest' == app.provider, "'unittest' == app.provider");
  assert.ok('test.json' == app.json, "'test.json' == app.json");
  assert.ok(2 == app.get_cloud().length, "2 == controller.get_cloud()");
  assert.ok('Snapshots' == app.get_app('volumes', 'snapshots').label,
          "'Snapshots' == controller.get_app('volumes', 'snapshots')");
  assert.ok('Bar' == app.get_parent('foo').label, "'Bar' == controller.get_parent('foo')");
});
