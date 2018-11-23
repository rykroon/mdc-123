Vue.component('md-text-field', {
  props: {
    fullWidth: Boolean,
    textArea: Boolean,
    outlined: Boolean,
    dense: Boolean,
    leadingIcon: String,
    trailingIcon: String,
    helperText: [String, Object],
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
        'mdc-text-field--with-leading-icon': !!this.leadingIcon,
        'mdc-text-field--with-trailing-icon': !!this.trailingIcon
      }
    }
  },
  computed: {
    //line ripple only used with default text-field
    useLineRipple: function() {
      return !this.fullWidth && !this.outlined && !this.textArea
    },
    helperTextId: function() {
      if (this.$attrs.id) {
        return this.$attrs.id + '-helper-text'
      }
    }
  },
  components: {
    'md-floating-label': floatingLabel,
    'md-notched-outline': notchedOutline,
    'md-line-ripple': lineRipple,
    'md-helper-text': textFieldHelperText
  },
  mounted: function() {
    this.mdcTextField = mdc.textField.MDCTextField.attachTo(this.$el.children[0]);
  },
  template: `
    <span>
      <div :class="classes">

        <md-icon
          v-if="leadingIcon"
          extraClass="mdc-text-field__icon">
          {{leadingIcon}}
        </md-icon>

        <textarea
          v-if="textArea"
          v-bind="$attrs"
          class="mdc-text-field__input"
          :disabled="disabled">
        </textarea>

        <input
          v-else
          v-bind="$attrs"
          class="mdc-text-field__input"
          :aria-controls="helperTextId"
          :disabled="disabled">

        <md-floating-label
          v-if="!fullWidth"
          :for="$attrs.id">
          <slot/>
        </md-floating-label>

        <md-icon
          v-if="trailingIcon"
          extraClass="mdc-text-field__icon">
          {{trailingIcon}}
        </md-icon>

        <md-notched-outline v-if="outlined"/>
        <md-line-ripple v-if="useLineRipple"/>
      </div>
      <md-helper-text
        v-if="helperText"
        :id="helperTextId"
        persistent>
        {{helperText}}
      </md-helper-text>
    </span>`
})
