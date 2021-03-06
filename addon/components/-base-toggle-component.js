import Ember from 'ember';
import BaseToplevelComponent from './-base-toplevel-component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-checkbox';

const { computed } = Ember;

export default BaseToplevelComponent.extend(RippleSupport, {
  tagName: 'label',
  layout,
  value: false,
  attributeBindings: ['_inputId:for'],
  _inputId: computed('elementId', function() {
    return `${this.get('elementId')}-input`;
  })
});
