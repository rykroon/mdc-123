const radio = require('@material/radio');

module.exports =  {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  data: function() {
    return {
      mdcRadio: undefined
    }
  },
  watch: {
    checked: function(value) {
      this.mdcRadio.checked = value;
    },
    disabled: function(value) {
      this.mdcRadio.disabled = value
    }
  },
  mounted: function() {
    this.mdcRadio = new radio.MDCRadio(this.$el);
    this.mdcRadio.checked = this.checked;
    this.mdcRadio.disabled = this.disabled;
  },
  template: `
    <div class="mdc-radio">

      <input
        class="mdc-radio__native-control"
        type="radio"
        v-bind="$attrs">

      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>`
}
