import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboard-bookmark-tab', 'Integration | Component | dashboard bookmark tab', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{dashboard-bookmark-tab}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#dashboard-bookmark-tab}}
      template block text
    {{/dashboard-bookmark-tab}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
