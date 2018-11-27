module.exports = {
  props: {
    columns: {
      type: [Number, String],
      validator: (value) => value >= 1 && value <= 12
    },
    device: {
      type: String,
      validator: (value) => ['desktop','tablet','phone'].indexOf(value) > -1
    },
    index: {
      type: [Number, String],
      validator: (value) => value >= 1 && value <= 12
    },
    position: {
      type: String,
      validator: (value) => ['top','middle','bottom'].indexOf(value) > -1
    }
  },
  computed: {
    classes: function() {
      result = {}
      result['mdc-layout-grid__cell'] = true

      let spanKey = `mdc-layout-grid__cell--span-${this.columns}`;
      spanKey = (this.device ? `${spanKey}-${this.device}` : spanKey);
      result[spanKey] = !!this.columns;

      let orderKey = `mdc-layout-grid--order-${this.order}`;
      result[orderKey] = !!this.index;

      let alignKey = `mdc-layout-grid__cell--align-${this.position}`;
      result[alignKey] = !!this.position

      return result
    }
  },
  template: `
    <div :class='classes'><slot/></div>
  `
}
