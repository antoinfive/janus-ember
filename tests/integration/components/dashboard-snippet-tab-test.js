import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboard-snippet-tab', 'Integration | Component | dashboard snippet tab', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{dashboard-snippet-tab}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#dashboard-snippet-tab}}
      template block text
    {{/dashboard-snippet-tab}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
