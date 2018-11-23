var floatingLabel = {
  template: `
  <label
    class="mdc-floating-label"
    v-bind="$attrs">
    <slot/>
  </label>`
}

var formField = {
  props: {
    alignEnd: Boolean
  },
  data: function() {
    return {
      mdcFormField: undefined,
      classes: {
        'mdc-form-field': true,
        'mdc-form-field--align-end': this.alignEnd
      }
    }
  },
  template: `
  <div
    :class="classes">
    <slot/>
  </div>`
}

var lineRipple = {
  template: `<div class="mdc-line-ripple"></div>`
}

var notchedOutline = {
  template: `
  <div>
    <div class="mdc-notched-outline">
      <svg>
        <path class="mdc-notched-outline__path"/>
      </svg>
    </div>
    <div class="mdc-notched-outline__idle"></div>
  </div>`
}


Vue.component('md-checkbox', {
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    alignEnd: Boolean
  },
  inheritAttrs: false,
  data: function() {
    return {
      mdcFormField: undefined,
      mdcCheckbox: undefined,
      classes: {
          'mdc-checkbox': true,
          'mdc-checkbox--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      this.mdcFormField = mdc.formField.MDCFormField.attachTo(this.$el)
      this.mdcCheckbox = mdc.checkbox.MDCCheckbox.attachTo(this.$el.children[0])
      this.mdcFormField.input = this.mdcCheckbox
    }
  },
  components: {
    'md-form-field': formField
  },
  template: `
  <md-form-field :alignEnd="alignEnd">
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
    </div>

    <label :for="$attrs['id']">
      <slot/>
    </label>
  </md-form-field>`
})

Vue.component('md-radio', {
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    alignEnd: Boolean
  },
  inheritAttrs: false,
  data: function() {
    return {
      mdcFormField: undefined,
      mdcRadio: undefined,
      classes: {
        'mdc-radio': true,
        'mdc-radio--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      this.mdcFormField = mdc.formField.MDCFormField.attachTo(this.$el)
      this.mdcRadio = mdc.radio.MDCRadio.attachTo(this.$el.children[0])
      this.mdcFormField.input = this.mdcRadio
    }
  },
  components: {
    'md-form-field': formField
  },
  template: `
  <md-form-field :alignEnd="alignEnd">

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
    </div>

    <label
      :for="$attrs['id']">
      <slot/>
    </label>

  </md-form-field>`
})

var textFieldHelperText = {
  props: {
    persistent: Boolean,
    validationMsg: Boolean
  },
  data: function() {
    return {
      mdcHelperText: undefined,
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.persistent,
        'mdc-text-field-helper-text--validation-msg': this.validationMsg
      }
    }
  },
  mounted: function() {
    //this.mdcHelperText = mdc.textField.MDCTextFieldHelperText.attachTo(this.$el);
  },
  template: `
    <p :class="classes">
      <slot/>
    </p>`
}

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

Vue.component('md-select', {
  props: {
    outlined: Boolean,
    options: Array,
    disabled:Boolean
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
    this.mdcSelect = mdc.select.MDCSelect.attachTo(this.$el)
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
})
