module.exports = {
  props: {
    prominent: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      classes: {
        'mdc-top-app-bar--fixed-adjust': true,
        'mdc-top-app-bar--prominent-fixed-adjust': this.prominent && !this.dense,
        'mdc-top-app-bar--dense-fixed-adjust': this.dense && !this.prominent,
        'mdc-top-app-bar--dense-prominent-fixed-adjust': this.dense && this.prominent,
        'mdc-top-app-bar--short-fixed-adjust': this.short
      }
    }
  },
  template: `
    <div :class="classes">
      <slot/>
    </div>
  `
}
