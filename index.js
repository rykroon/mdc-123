const button = require('./components/buttons/button.js');
const fab = require('./components/buttons/fab.js');
const drawer = require('./components/drawer/index.js');
const checkbox = require('./components/inputs-and-controls/checkbox.js');
const formField = require('./components/inputs-and-controls/form-field.js');
const radio = require('./components/inputs-and-controls/radio.js');
const textField = require('./components/inputs-and-controls/text-field/text-field.js');
const textFieldHelperText = require('./components/inputs-and-controls/text-field/text-field-helper-text.js');
const layout = require('./components/layout-grid/index.js');
const list = require('./components/lists/index.js');
const headline = require('./components/typography/headline.js');
const paragraph = require('./components/typography/paragraph.js');
const icon = require('./components/icon.js');
const topAppBar = require('./components/top-app-bar/index.js')

const components = {
  'md-button': button,
  'md-icon': icon,
  'md-fab': fab,
  'md-drawer': drawer.drawer,
  'md-drawer-app-content': drawer.appContent,
  'md-drawer-scrim': drawer.scrim,
  'md-form-field': formField,
  'md-checkbox': checkbox,
  'md-radio': radio,
  'md-text-field': textField,
  'md-text-field-helper-text': textFieldHelperText,
  'md-grid': layout.grid,
  'md-grid-inner': layout.gridInner,
  'md-grid-cell': layout.gridCell,
  'md-list': list.list,
  'md-list-item': list.item,
  'md-list-group': list.group,
  'md-list-divider': list.divider,
  'md-top-app-bar': topAppBar.topAppBar,
  'md-top-app-bar-fixed-adjust': topAppBar.fixedAdjust,
  'md-h': headline,
  'md-p': paragraph
}

const myapp = new Vue({
  el:'#myapp',
  components: components,
  data: {
    isChecked: true,
    vModel: true,
    isIndeterminate: true,
    isDisabled: true
  }
})
