//buttons

Vue.component('md-button', {
  props: {
    id: String,
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    dense: Boolean,
    icon: String,
    href: String,
    ripple: {
      type: Boolean,
      default: true
    },
  },
  data: function() {
    return {
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
      mdc.ripple.MDCRipple.attachTo(this.$el)
    }
  },
  template: `
    <a
      v-if="href"
      :id="id"
      :class="classes"
      :href="href"
      v-bind="$attrs"
      v-on="$listeners">

      <md-icon
        v-if="icon"
        extraClass="mdc-button__icon">
        {{icon}}
      </md-icon>

      <slot/>
    </a>

    <button
      v-else
      :id="id"
      :class="classes"
      v-bind="$attrs"
      v-on="$listeners">

      <md-icon
        v-if="icon"
        extraClass="mdc-button__icon">
        {{icon}}
      </md-icon>

      <slot/>
    </button>`
})
