module.exports = {
  props: {
    level: {
      type: [Number, String],
      default: 1,
      validator: (value) => value >= 1 && value <= 6
    },
    roboto: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      classes: {
        'mdc-typography': this.roboto,
        'mdc-typography--headline1': this.level == 1,
        'mdc-typography--headline2': this.level == 2,
        'mdc-typography--headline3': this.level == 3,
        'mdc-typography--headline4': this.level == 4,
        'mdc-typography--headline5': this.level == 5,
        'mdc-typography--headline6': this.level == 6
      }
    }
  },
  template: `
    <h1 :class="classes"><slot/></h1>
  `
}
