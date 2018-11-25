//import Button from './compnonents/buttons/button.js'

const button = require('./components/buttons/button.js');
const icon = require('./components/icon.js');
const fab = require('./components/buttons/fab.js');
const formField = require('./components/inputs-and-controls/form-field.js');
const checkbox = require('./components/inputs-and-controls/checkbox.js');
const radio = require('./components/inputs-and-controls/radio.js');
const textField = require('./components/inputs-and-controls/text-field.js');
const textFieldHelperText = require('./components/inputs-and-controls/text-field-helper-text.js');

const components = {
  'md-button': button,
  'md-icon': icon,
  'md-fab': fab,
  'md-form-field': formField,
  'md-checkbox': checkbox,
  'md-radio': radio,
  'md-text-field': textField,
  'md-text-field-helper-text': textFieldHelperText
}


const myapp = new Vue({
  el:'#myapp',
  components: components
})
