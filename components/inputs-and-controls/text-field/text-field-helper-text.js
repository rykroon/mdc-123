//const helperText = require('@material/textfield/helper-text');

module.exports =  {
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
    this.mdcHelperText = mdc.textField.MDCTextFieldHelperText.attachTo(this.$el);
    //this.mdcHelperText = new helperText.MDCTextFieldHelperText(this.$el);
  },
  template: `
    <p :class="classes">
      <slot/>
    </p>`
}
