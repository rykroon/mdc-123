module.exports = {
  props: {
    icon: String,
    extended: Boolean,
    trailingIcon: String,
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

      <template
        v-if="extended">

        <md-icon
          v-if="icon"
          extraClass="mdc-fab__icon">
          {{icon}}
        </md-icon>

        <span
          class="mdc-fab__label">
          <slot/>
        </span>

        <md-icon
          v-if="trailingIcon"
          extraClass="mdc-fab__icon">
          {{trailingIcon}}
        </md-icon>
      </template>

      <md-icon
        v-else
        extraClass="mdc-fab__icon">
        {{icon}}
      </md-icon>

    </button>`
})
