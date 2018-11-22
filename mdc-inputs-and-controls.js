var floatingLabel = {
  props: {
    id: String,
  },
  template: `
  <label
    class="mdc-floating-label"
    :for="id">
    <slot/>
  </label>`
}

Vue.component('md-form-field', {
  props: {
    alignEnd: Boolean
  },
  data: function() {
    return {
      classes: {
        'mdc-form-field': true,
        'mdc-form-field--align-end': this.alignEnd
      }
    }
  },
  template: `
  <div :class="classes">
    <slot/>
  </div>`
})

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


Vue.component('checkbox', {
  props: {
    id: String,
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  data: function() {
    return {
      classes: {
          'mdc-checkbox': true,
          'mdc-checkbox--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      mdc.checkbox.MDCCheckbox.attachTo(this.$el);
    }
  },
  template: `
  <div :class="classes">

    <input
      type="checkbox"
      class="mdc-checkbox__native-control"
      :id="id"
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
})

Vue.component('radio', {
  props: {
    id: String,
    name: String,
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  data: function() {
    return {
      classes: {
        'mdc-radio': true,
        'mdc-radio--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      mdc.radio.MDCRadio.attachTo(this.$el);
    }
  },
  template: `
  <div :class="classes">

    <input
      class="mdc-radio__native-control"
      type="radio"
      :id="id"
      :name="name"
      :disabled="disabled">

    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>`
})

Vue.component('text-field', {
  props: {
    id: String,
    fullWidth: Boolean,
    textArea: Boolean,
    outlined: Boolean,
    leadingIcon: String,
    trailingIcon: String,
    dense: Boolean,
  },
  data: function() {
    return {
      classes: {
        'mdc-text-field': true,
        'mdc-text-field--fullwidth': this.fullWidth,
        'mdc-text-field--outlined': this.outlined,
        'mdc-text-field--disabled': this.$attrs.disabled !== undefined,
        'mdc-text-field--dense': this.dense,
        'mdc-text-field--with-leading-icon': this.leadingIcon !== undefined,
        'mdc-text-field--with-trailing-icon': this.trailingIcon !== undefined
      }
    }
  },
  components: {
    'floating-label': floatingLabel,
    'notched-outline': notchedOutline,
    'line-ripple': lineRipple
  },
  mounted: function() {
    mdc.textField.MDCTextField.attachTo(this.$el);
  },
  template: `
  <div :class="classes">

    <md-icon
      v-if="leadingIcon"
      extraClass="mdc-text-field__icon">
      {{leadingIcon}}
    </md-icon>

    <input
      v-bind="$attrs"
      :id="id"
      class="mdc-text-field__input">

    <floating-label
      v-if="!fullWidth"
      :id="id">
      <slot/>
    </floating-label>

    <md-icon
      v-if="trailingIcon"
      extraClass="mdc-text-field__icon">
      {{trailingIcon}}
    </md-icon>

    <notched-outline v-if="outlined"/>
    <line-ripple v-if="!fullWidth && !outlined"/>
  </div>`
})

Vue.component('md-select', {
  props: {
    id: String,
    label: String,
    options: Array
  },
  data: function() {
    return {
      rootId: this.id + '-root'
    }
  },
  components: {
    'md-floating-label': floatingLabel,
    'md-line-ripple': lineRipple
  },
  mounted: function() {
    id = '#' + this.rootId
    mdc.select.MDCSelect.attachTo(document.querySelector(id))
  },
  template:`
  <div
    :id="rootId"
    class="mdc-select">

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
