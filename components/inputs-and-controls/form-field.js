const formField = require('@material/form-field');

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
  mounted: function() {
    this.mdcFormField = new formField.MDCFormField(this.$el);
    //check if there is a checkbox or radio in the formField
  },
  template: `
  <div :class="classes">
    <slot/>
  </div>`
}
