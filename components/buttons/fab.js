module.exports = {
  props: {
    extended: Boolean,
    mini: Boolean,
    ripple: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      classes: {
        'mdc-fab': true,
        'mdc-fab--extended': this.extended,
        'mdc-fab--mini': this.mini
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      mdc.ripple.MDCRipple.attachTo(this.$el)
    }
  },
  template: `
    <button
      :class="classes"
      v-bind="$attrs"
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
})
