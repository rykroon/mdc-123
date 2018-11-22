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
    id: {
      type: String,
      required: true
    },
    checked: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
  },
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
  computed: {
    alignEnd: function() {
      return this.$attrs['align-end'] !== undefined
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
  <md-form-field
    :alignEnd="alignEnd">

    <div :class="classes">

      <input
        :id="id"
        type="checkbox"
        class="mdc-checkbox__native-control"
        v-bind="$attrs"
        :checked="checked"
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

    <label :for="id">
      <slot/>
    </label>
  </md-form-field>`
})

Vue.component('md-radio', {
  props: {
    id: {
      type: String,
      required: true
    },
    checked: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
  },
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
  computed: {
    alignEnd: function() {
      return this.$attrs['align-end'] !== undefined
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
  <md-form-field
    :alignEnd="alignEnd">

    <div :class="classes">

      <input
        :id="id"
        class="mdc-radio__native-control"
        type="radio"
        v-bind="$attrs"
        :checked="checked"
        :disabled="disabled">

      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>

    <label
      :for="this.id">
      <slot/>
    </label>

  </md-form-field>`
})

Vue.component('text-field', {
  props: {
    fullWidth: Boolean,
    textArea: Boolean,
    outlined: Boolean,
    leadingIcon: String,
    trailingIcon: String,
    dense: Boolean,
    disabled: Boolean
  },
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
        'mdc-text-field--with-leading-icon': this.leadingIcon !== undefined,
        'mdc-text-field--with-trailing-icon': this.trailingIcon !== undefined
      }
    }
  },
  computed: {
    //line ripple only used with default text-field
    useLineRipple: function() {
      return !this.fullWidth && !this.outlined && !this.textArea
    },
    useIcon: function() {
      //icons can only be used with standard and outlined text-fields
      return !this.fullWidth && !this.textArea
    }
  },
  components: {
    'floating-label': floatingLabel,
    'notched-outline': notchedOutline,
    'line-ripple': lineRipple
  },
  mounted: function() {
    this.mdcTextField = mdc.textField.MDCTextField.attachTo(this.$el);
  },
  template: `
  <div :class="classes">

    <md-icon
      v-if="useIcon && leadingIcon"
      extraClass="mdc-text-field__icon">
      {{leadingIcon}}
    </md-icon>

    <textarea
      v-if="textArea"
      v-bind="$attrs"
      class="mdc-text-field__input">
    </textarea>

    <input
      v-else
      v-bind="$attrs"
      class="mdc-text-field__input"
      :disabled="disabled">

    <floating-label
      v-if="!fullWidth"
      :for="$attrs.id">
      <slot/>
    </floating-label>

    <md-icon
      v-if="useIcon && trailingIcon"
      extraClass="mdc-text-field__icon">
      {{trailingIcon}}
    </md-icon>

    <notched-outline v-if="outlined"/>
    <line-ripple v-if="useLineRipple"/>
  </div>`
})

Vue.component('md-select', {
  props: {
    id: String,
    label: String,
    options: Array
  },
  components: {
    'md-floating-label': floatingLabel,
    'md-line-ripple': lineRipple
  },
  mounted: function() {
    mdc.select.MDCSelect.attachTo(this.$el)
  },
  template:`
  <div class="mdc-select">

    <i class="mdc-select__dropdown-icon"></i>
    <select class="mdc-select__native-control">

      <option
        v-for="option in options"
        :value="option.value">
        {{option.text}}
      </option>
    </select>

    <md-floating-label>{{label}}</md-floating-label>
    <md-line-ripple></md-line-ripple>
  </div>`
})
