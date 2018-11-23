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
