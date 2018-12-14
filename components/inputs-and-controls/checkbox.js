const checkbox = require('@material/checkbox')

module.exports = {
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    indeterminate: {
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
      mdcCheckbox: undefined
    }
  },
  computed: {
    classes: function() {
      return {
        'mdc-checkbox': true,
        'mdc-checkbox--disabled': this.disabled
      }
    }
    // model: {
    //   get() {
    //     return this.checked;
    //   },
    //   set(value) {
    //     this.$emit('change', value);
    //   }
    // }
  },
  watch: {
    checked: function(value) {
      if (value) {
        this.mdcCheckbox.indeterminate = false;
      }
    },
    indeterminate: function(value) {
      this.mdcCheckbox.indeterminate = value;
    }
  },
  mounted: function() {
    this.mdcCheckbox = new checkbox.MDCCheckbox(this.$el);
    this.mdcCheckbox.indeterminate = this.indeterminate;
  },
  beforeDestroy: function() {
    this.mdcCheckbox.destroy();
  },
  template: `
    <div :class="classes">

      <input
        type="checkbox"
        class="mdc-checkbox__native-control"
        v-bind="$attrs"
        v-on:change="$emit('change', $event.target.checked)"/>

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
