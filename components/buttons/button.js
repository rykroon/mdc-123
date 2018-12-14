//buttons

const ripple = require('@material/ripple')

module.exports = {
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    dense: Boolean,
    href: String,
    ripple: {
      type: Boolean,
      default: true
    },
  },
  data: function() {
    return {
      mdcRipple: undefined,
      classes: {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--outlined': this.outlined,
        'mdc-button--dense': this.dense
      },
    }
  },
  mounted: function() {
    if (this.ripple) {
      this.mdcRipple = new ripple.MDCRipple(this.$el)
    }
    if (this.$slots.icon) {
      this.$slots.icon[0].elm.classList.add('mdc-button__icon')
    }
  },
  beforeDestroy: function() {
    if (this.mdcRipple) {
      this.mdcRipple.destroy();
    }
  },
  template: `
    <a
      v-if="href"
      :class="classes"
      :href="href"
      v-on="$listeners">

      <slot name="icon"/>

      <slot/>
    </a>

    <button
      v-else
      :class="classes"
      v-on="$listeners">

      <slot name="icon"/>

      <slot/>
    </button>`
}
