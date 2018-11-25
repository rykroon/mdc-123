const floatingLabel = require('./floating-label.js');
const notchedOutline = require('./notched-outline.js');
const lineRipple = require('./line-ripple.js');
const select = require('@material/select');

module.exports = {
  props: {
    outlined: Boolean,
    options: Array,
    disabled: Boolean
  },
  inheritAttrs: false,
  data: function() {
    return {
      mdcSelect: undefined,
      classes: {
        'mdc-select': true,
        'mdc-select--outlined': this.outlined,
        'mdc-select--disabled': this.disabled
      }
    }
  },
  components: {
    'md-floating-label': floatingLabel,
    'md-line-ripple': lineRipple,
    'md-notched-outline': notchedOutline
  },
  mounted: function() {
    this.mdcSelect = new select.MDCSelect(this.$el);
  },
  template:`
  <div :class="classes">

    <i class="mdc-select__dropdown-icon"></i>
    <select
      v-bind="$attrs"
      class="mdc-select__native-control"
      :disabled="disabled">

      <option
        v-for="option in options"
        :value="option.value"
        :disabled="option.disabled"
        :selected="option.selected">
        {{option.text}}
      </option>
    </select>

    <md-floating-label>
      <slot/>
    </md-floating-label>

    <md-line-ripple v-if="!outlined"/>
    <md-notched-outline v-else/>
  </div>`
}
