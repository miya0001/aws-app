QUnit.test( "controller.js test", function( assert ) {
  var cloud = new CloudSettings('test.json');
  assert.ok("test.json" == cloud.json, "Passed!");
  assert.ok(2 == cloud.get_settings().length, "Passed!");
});
