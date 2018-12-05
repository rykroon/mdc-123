module.exports = {
  props: {
    align: {
      type: String,
      validator: (value) => ['start','end'].indexOf(value) > -1,
      default: "start"
    }
  },
  computed: {
    classes: function() {
      return {
        'mdc-top-app-bar__section': true,
        'mdc-top-app-bar__section--align-${this.align}': true
      }
    }
  },
  template: `
    <section :class="classes">
      <slot/>
    </section>
  `
}
