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
      mdc.ripple.MDCRipple.attachTo(this.$el);
    }
    if (this.$slots.icon) {
      this.$slots.icon[0].elm.classList.add('mdc-fab__icon');
    }
    if (this.$slots.leadingIcon) {
      this.$slots.leadingIcon[0].elm.classList.add('mdc-fab__icon');
    }
    if (this.$slots.trailingIcon) {
      this.$slots.trailingIcon[0].elm.classList.add('mdc-fab__icon');
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
}
