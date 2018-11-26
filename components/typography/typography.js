module.exports = {
  props: {
    headline: {
      type: Number,
      validator: (value) => value >= 1 && value <= 6
    },
    subtitle: {
      type: Number,
      validator: (value) => value >= 1 && value <= 2
    },
    body: {
      type: Number,
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
        'mdc-typography--headline1': this.headline === 1,
        'mdc-typography--headline2': this.headline === 2,
        'mdc-typography--headline3': this.headline === 3,
        'mdc-typography--headline4': this.headline === 4,
        'mdc-typography--headline5': this.headline === 5,
        'mdc-typography--headline6': this.headline === 6,
        'mdc-typography--subtitle1': this.subtitle === 1,
        'mdc-typography--subtitle2': this.subtitle === 2,
        'mdc-typography--body1': this.body === 1,
        'mdc-typography--body2': this.body === 2,
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
