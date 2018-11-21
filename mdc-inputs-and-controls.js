var floatingLabel = {
  props: {
    id: String,
  },
  template: `
  <label
    class="mdc-floating-label"
    :for="id">
    <slot></slot>
  </label>`
}

Vue.component('md-form-field', {
  props: {
    id: String,
    alignEnd: Boolean
  },
  data: function() {
    return {
      alignEndClass: {'mdc-form-field--align-end': this.alignEnd}
    }
  },
  template: `
  <div
    class='mdc-form-field'
    :class="alignEndClass">
    <slot></slot>
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
    label: String,
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  data: function() {
    return {
      rootId: this.id + "-root",
      disabledClass: {
          'mdc-checkbox--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      id = '#' + this.rootId
      mdc.checkbox.MDCCheckbox.attachTo(document.querySelector(id));
    }
  },
  template: `
  <div
    :id="rootId"
    class="mdc-checkbox"
    v-bind:class="disabledClass">

    <input
      :id="id"
      type="checkbox"
      class="mdc-checkbox__native-control"
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
    group: String,
    label: String,
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  data: function() {
    return {
      rootId: this.id + "-root",
      disabledClass: {
        'mdc-radio--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      id = '#' + this.rootId
      mdc.radio.MDCRadio.attachTo(document.querySelector(id));
    }
  },
  template: `
  <div
    :id="rootId"
    class="mdc-radio"
    :class="disabledClass">

    <input
      :id="id"
      class="mdc-radio__native-control"
      type="radio"
      :name="group"
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
    label: String,
    fullWidth: Boolean,
    outlined: Boolean,
    disabled: Boolean,
    dense: Boolean
  },
  data: function() {
    return {
      rootId: this.id + '-root',
      classes: {
        'mdc-text-field--fullwidth': this.fullWidth,
        'mdc-text-field--outlined': this.outlined,
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--dense': this.dense
      }
    }
  },
  computed: {
    placeholder: function() {
      return this.fullWidth ? this.label : "";
    }
  },
  components: {
    'floating-label': floatingLabel,
    'notched-outline': notchedOutline,
    'line-ripple': lineRipple
  },
  mounted: function() {
    id = '#' + this.rootId
    mdc.textField.MDCTextField.attachTo(document.querySelector(id));
  },
  template: `
  <div
    :id="rootId"
    class="mdc-text-field"
    :class="classes">

    <input
      :id="id"
      type="text"
      class="mdc-text-field__input"
      :placeholder="placeholder"
      :disabled="disabled">

    <floating-label
      v-if="!fullWidth"
      :id="id">
      {{label}}
    </floating-label>

    <notched-outline
      v-if="outlined">
    </notched-outline>

    <line-ripple
      v-if="!fullWidth && !outlined">
    </line-ripple>
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
