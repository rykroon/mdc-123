const ripple = require('@material/ripple')

module.exports = {
  props: {
    extended: Boolean,
    mini: Boolean,
    exited: Boolean,
    ripple: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      mdcRipple: undefined,
      classes: {
        'mdc-fab': true,
        'mdc-fab--extended': this.extended,
        'mdc-fab--mini': this.mini,
        'mdc-fab--exited': this.exited
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      this.mdcRipple = new ripple.MDCRipple(this.$el)
    }

    for (const entry of Object.entries(this.$slots)) {
      if (entry[0] !== "default") {
        entry[1][0].elm.classList.add('mdc-fab__icon');
      }
    }
  },
  beforeDestroy: function() {
    if (this.mdcRipple) {
      this.mdcRipple.destroy();
    }
  },
  template: `
    <button
      :class="classes"
      v-on="$listeners">

      <template v-if="extended">
        <slot name="leadingIcon"/>

        <span class="mdc-fab__label">
          <slot/>
        </span>

        <slot name="trailingIcon"/>
      </template>

      <slot name="icon"/>
    </button>`
}
