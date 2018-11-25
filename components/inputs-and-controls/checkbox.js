const checkbox = require('@material/checkbox')

module.exports = {
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
      mdcCheckbox: undefined,
      classes: {
          'mdc-checkbox': true,
          'mdc-checkbox--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      this.mdcCheckbox = new checkbox.MDCCheckbox(this.$el);
    }
  },
  template: `
    <div :class="classes">

      <input
        type="checkbox"
        class="mdc-checkbox__native-control"
        v-bind="$attrs"
        :disabled="disabled"/>

      <div class="mdc-checkbox__background">

        <svg
          class="mdc-checkbox__checkmark"
          viewBox="0 0 24 24">

          <path
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>

        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>`
}
