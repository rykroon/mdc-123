module.exports = {
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
  mounted: {
    this.mdcFormField = mdc.formField.MDCFormField.attachTo(this.$el);
  },
  template: `
  <div :class="classes">
    <slot/>
  </div>`
}
