var formField = {
  props: ['id'],
  template: `
  <div
    :id="id"
    class='mdc-form-field'>
    <slot></slot>
  </div>`
}

var lineRipple = {
  template: `<div class="mdc-line-ripple"></div>`
}

var floatingLabel = {
  props: {
    'id':String,
    'inputId':String,
  },
  template: `
  <label
    :id="id"
    class="mdc-floating-label"
    :for="inputId">
    <slot></slot>
  </label>`
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
    'id': String,
    'label': String,
    'ripple': {
      type: Boolean,
      default: true
    },
    'disabled': Boolean
  },
  data: function() {
    return {
      inputId: this.id + "-input"
    }
  },
  components: {
    'form-field': formField
  },
  mounted: function() {
    if (this.ripple) {
      id = '#' + this.id
      mdc.checkbox.MDCCheckbox.attachTo(document.querySelector(id));
    }
  },
  template: `
  <form-field>

    <div
      :id="id"
      class="mdc-checkbox"
      v-bind:class="{'mdc-checkbox--disabled': disabled}">

      <input
        :id="inputId"
        type="checkbox"
        class="mdc-checkbox__native-control"
        :disabled="disabled"/>

      <div
        class="mdc-checkbox__background">

        <svg
          class="mdc-checkbox__checkmark"
          viewBox="0 0 24 24">

          <path
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>

        <div
          class="mdc-checkbox__mixedmark">
        </div>
      </div>
    </div>

    <label
      v-bind:for="inputId">
      {{label}}
    </label>
  </form-field>`
})

Vue.component('radio', {
  props: {
    'id':String,
    'group':String,
    'label': String,
    'ripple': {
      type: Boolean,
      default: true
    },
    'disabled': Boolean
  },
  data: function() {
    return {
      inputId: this.id + '-input'
    }
  },
  components: {
    'form-field': formField
  },
  mounted: function() {
    if (this.ripple) {
      id = '#' + this.id
      mdc.radio.MDCRadio.attachTo(document.querySelector(id));
    }
  },
  template: `
  <form-field>

    <div
      :id="id"
      class="mdc-radio"
      :class="{'mdc-radio--disabled': disabled}">

      <input
        :id="inputId"
        class="mdc-radio__native-control"
        type="radio"
        :name="group"
        :disabled="disabled">

      <div
        class="mdc-radio__background">

        <div
          class="mdc-radio__outer-circle">
        </div>

        <div
          class="mdc-radio__inner-circle">
        </div>
      </div>
    </div>

    <label
      v-bind:for="inputId">
      {{label}}
    </label>
  </form-field>`
})

Vue.component('switcher', {
  props : ['id','label', 'checked', 'disabled'],
  data: function() {
    return {
      isDisabled: this.disabled != undefined
    }
  },
  methods: {
    disable: function() {
      this.disabled = ""
    },
    enable: function() {
      this.disabled = undefined
    },
  },
  mounted: function() {
    id = '#' + this.id
    //mdc.switch.MDCSwitch.attachTo(document.querySelector(id));
  },
  template: `
  <div
    class="mdc-form-field">

    <div
      v-bind:id="id"
      class="mdc-switch"
      v-bind:class="{'mdc-switch--disabled': isDisabled}">

      <div
        class="mdc-switch__track">
        </div>

        <div
        class="mdc-switch__thumb-underlay">

        <div
          class="mdc-switch__thumb">

          <input
            v-bind:id="id"
            type="checkbox"
            class="mdc-switch__native-control"
            role="switch"
            v-bind:disabled="isDisabled">
        </div>
      </div>
    </div>

    <label
      v-bind:for="id">
      {{label}}
    </label>
  </div>`
})

Vue.component('text-field', {
  props: {
    id: String,
    label: String,
    variant: String,
    disabled: Boolean,
    dense: Boolean
  },
  data: function() {
    return {
      fullWidth: this.variant === "fullwidth",
      textArea: this.variant === "textarea",
      outlined: this.variant === "outlined",
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
    id = '#' + this.id
    mdc.textField.MDCTextField.attachTo(document.querySelector(id));
  },
  template: `
  <div
    :id="id"
    class="mdc-text-field"
    :class="{
      'mdc-text-field--fullwidth': fullWidth,
      'mdc-text-field--outlined': outlined,
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--dense': dense
    }">

    <input
      :id="id"
      type="text"
      class="mdc-text-field__input"
      :placeholder="placeholder"
      :disabled="disabled">

    <floating-label
      v-if="!fullWidth"
      :inputId="id">
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
