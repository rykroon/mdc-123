module.exports = {
  props: {
    fixedColumnWidth: Boolean,
    align: {
      type: String,
      validator: value => ['left','right'].indexOf(value) > -1
    }
  },
  data: function() {
    return {
      classes: {
        'mdc-layout-grid': true,
        'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
        'mdc-layout-grid--align-left': this.align === 'left',
        'mdc-layout-grid--align-right': this.align === 'right'
      }
    }
  },
  template: `
    <div :class="classes"><slot/></div>
  `
}
