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

Vue.component('md-fab', {
  props: {
    id: String,
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
      :id="id"
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
