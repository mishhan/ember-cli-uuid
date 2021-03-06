import Application from '@ember/application';
import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import Configuration from 'ember-cli-uuid/configuration';

let application;

module('Unit | Configuration', function(hooks) {
  hooks.beforeEach(function() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  });

  hooks.afterEach(function() {
    Configuration.load({});
  });

  test('Configuration defaultUUID defaults to `true`', function(assert) {
    Configuration.load({});
    assert.equal(Configuration.defaultUUID, true);
  });

  test('Configuration .load sets defaultUUID properly', function(assert) {
    Configuration.load({ defaultUUID: false });
    assert.equal(Configuration.defaultUUID, false);
  });
});
