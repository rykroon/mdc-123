module.exports = {
  props: {
    subtitle: {
      type: [Number, String],
      validator: (value) => value >= 1 && value <= 2
    },
    body: {
      type: [Number, String],
      validator: (value) => value >= 1 && value <= 2
    },
    caption: Boolean,
    button: Boolean,
    overline: Boolean,
    roboto: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      classes: {
        'mdc-typography': this.roboto,
        'mdc-typography--subtitle1': this.subtitle == 1,
        'mdc-typography--subtitle2': this.subtitle == 2,
        'mdc-typography--body1': this.body == 1,
        'mdc-typography--body2': this.body == 2,
        'mdc-typography--caption': this.caption,
        'mdc-typography--button': this.button,
        'mdc-typography--overline': this.overline
      }
    }
  },
  template: `
    <p :class="classes"><slot/></p>
  `
}
