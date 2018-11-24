module.exports = {
  props: {
    fullWidth: Boolean,
    textArea: Boolean,
    outlined: Boolean,
    dense: Boolean,
    disabled: Boolean
  },
  inheritAttrs: false,
  data: function() {
    return {
      mdcTextField: undefined,
      classes: {
        'mdc-text-field': true,
        'mdc-text-field--fullwidth': this.fullWidth,
        'mdc-text-field--textarea': this.textArea,
        'mdc-text-field--outlined': this.outlined,
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--dense': this.dense,
        'mdc-text-field--with-leading-icon': this.$slots.leadingIcon,
        'mdc-text-field--with-trailing-icon': this.$slots.trailingIcon
      }
    }
  },
  computed: {
    //line ripple only used with default text-field
    useLineRipple: function() {
      return !this.fullWidth && !this.outlined && !this.textArea
    }
  },
  components: {
    'md-floating-label': floatingLabel,
    'md-notched-outline': notchedOutline,
    'md-line-ripple': lineRipple
  },
  mounted: function() {
    this.mdcTextField = mdc.textField.MDCTextField.attachTo(this.$el);
  },
  template: `
    <div :class="classes">

      <slot name="leadingIcon"/>

      <input
        v-if="!textArea"
        v-bind="$attrs"
        class="mdc-text-field__input"
        :disabled="disabled">

      <textarea
        v-else
        v-bind="$attrs"
        class="mdc-text-field__input"
        :disabled="disabled">
      </textarea>

      <md-floating-label
        v-if="!fullWidth"
        :for="$attrs.id">
        <slot/>
      </md-floating-label>

      <slot name="trailingIcon"/>

      <md-notched-outline v-if="outlined"/>
      <md-line-ripple v-if="useLineRipple"/>
    </div>`
}
