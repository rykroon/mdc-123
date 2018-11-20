//buttons

Vue.component('btn', {
  props: {
    'id': String,
    'variant': String,
    'dense': Boolean,
    'disabled': Boolean,
    'ripple': {
      type: Boolean,
      default: true
    },
    'click': Function
  },
  data: function() {
    return {
      raised:     this.variant === "raised",
      unelevated: this.variant === "unelevated",
      outlined:   this.variant === "outlined",
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
      :class="{
        'mdc-button--raised': raised,
        'mdc-button--unelevated': unelevated,
        'mdc-button--outlined': outlined,
        'mdc-button--dense': dense
      }"
      v-on:click="click">
      <slot></slot>
    </button>`
})

Vue.component('fab', {
  props: {
    'id':String,
    'variant':String,
    'ripple': {
      type: Boolean,
      default:true
    },
    'click': Function
  },
  data: function() {
    return {
      extended : this.variant === "extended",
      mini: this.variant === "mini",
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
      v-bind:id="id"
      class="mdc-fab"
      v-bind:class="{
        'mdc-fab--extended':extended,
        'mdc-fab--mini':mini
      }"
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
