module.exports = {
  props: {
    padded: {
      type: Boolean,
      default: false
    },
    inset: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      classes: {
        'mdc-list-divider': true,
        'mdc-list-divider--padded': this.padded,
        'mdc-list-divider--inset': this.inset
      }
    }
  },
  template: `
    <li
      role="separator"
      :class="classes">
    </li>
  `
}
