const floatingLabel = require('./floating-label.js');
const notchedOutline = require('./notched-outline.js');
const lineRipple = require('./line-ripple.js');
const select = require('@material/select');

module.exports = {
  components: {
    'md-floating-label': floatingLabel,
    'md-line-ripple': lineRipple,
    'md-notched-outline': notchedOutline
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      mdcSelect: undefined,
    }
  },
  computed: {
    classes: {
      'mdc-select': true,
      'mdc-select--outlined': this.outlined,
      'mdc-select--disabled': this.disabled
    }
  },
  mounted: function() {
    this.mdcSelect = new select.MDCSelect(this.$el);
  },
  beforeDestroy: function() {
    this.mdcSelect.destroy();
  },
  template:`
  <div :class="classes">

    <i class="mdc-select__dropdown-icon"></i>
    <select
      v-bind="$attrs"
      class="mdc-select__native-control"
      :value="value"
      v-on:change="$emit('change', $event.target.value)"
      :disabled="disabled">

      <slot/>
    </select>

    <md-floating-label>
      <slot name="label"/>
    </md-floating-label>

    <md-line-ripple v-if="!outlined"/>
    <md-notched-outline v-else/>
  </div>`
}
