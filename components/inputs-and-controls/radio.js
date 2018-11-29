const radio = require('@material/radio');

module.exports =  {
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  inheritAttrs: false,
  data: function() {
    return {
      mdcRadio: undefined,
      classes: {
        'mdc-radio': true,
        'mdc-radio--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      this.mdcRadio = new radio.MDCRadio(this.$el);
    }
  },
  template: `
    <div :class="classes">

      <input
        class="mdc-radio__native-control"
        type="radio"
        v-bind="$attrs"
        :disabled="disabled">

      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>`
}
