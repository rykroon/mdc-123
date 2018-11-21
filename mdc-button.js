//buttons

Vue.component('md-button', {
  props: {
    id: String,
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    dense: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    click: Function
  },
  data: function() {
    return {
      classes: {
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--outlined': this.outlined,
        'mdc-button--dense': this.dense
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      id = '#' + this.id
      mdc.ripple.MDCRipple.attachTo(document.querySelector(id))
    }
  },
  template: `
    <button
      :id="id"
      :disabled="disabled"
      class="mdc-button"
      :class="classes"
      v-on:click="click">
      <slot></slot>
    </button>`
})

Vue.component('md-fab', {
  props: {
    id: String,
    extended: Boolean,
    mini: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    click: Function
  },
  data: function() {
    return {
      classes: {
        'mdc-fab--extended': this.extended,
        'mdc-fab--mini': this.mini
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      id = '#' + this.id
      mdc.ripple.MDCRipple.attachTo(document.querySelector(id))
    }
  },
  template: `
    <button
      :id="id"
      class="mdc-fab"
      :class="classes"
      v-on:click="click">

      <span
        v-if="extended"
        class="mdc-fab__label">
        <slot></slot>
      </span>

      <template
        v-else>
        <slot></slot>
      </template>
    </button>`
})
