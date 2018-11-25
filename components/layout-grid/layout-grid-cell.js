module.exports = {
  props: {
    columns: {
      type: Number,
      validator: (value) => value >= 1 && value <= 12
    },
    device: {
      type: String,
      validator: (value) => ['desktop','tablet','phone'].indexOf(value) > -1
    }
  },
  computed: {
    classes: function() {
      result = {}
      result['mdc-layout-grid__cell'] = true

      let spanKey = `mdc-layout-grid__cell--span-${this.columns}`;
      spanKey = (this.device ? `${spanKey}-${this.device}` : spanKey);
      const spanValue = !!this.columns
      result[spanKey] = spanValue
      
      return result
    }
  },
  template: `
    <div :class='classes'><slot/></div>
  `
}
