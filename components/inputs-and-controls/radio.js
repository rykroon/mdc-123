const radio = require('@material/radio');

module.exports =  {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      mdcRadio: undefined
    }
  },
  computed: {
    classes: function() {
      return {
        'mdc-radio': true,
        'mdc-radio--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    this.mdcRadio = new radio.MDCRadio(this.$el);
  },
  beforeDestroy: function() {
    this.mdcRadio.destroy();
  },
  template: `
    <div :class="classes">

      <input
        class="mdc-radio__native-control"
        type="radio"
        v-bind="$attrs"
        :checked="checked"
        :disabled="disabled"
        v-on:change="$emit('change', $event.target.value)">

      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>`
}
