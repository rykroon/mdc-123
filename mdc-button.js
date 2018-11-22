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
    disabled: Boolean,
    click: {
      type: Function,
      default: function() {
        return
      }
    }
  },
  data: function() {
    return {
      classes: {
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--outlined': this.outlined,
        'mdc-button--dense': this.dense
      },
    }
  },
  mounted: function() {
    if (this.ripple) {
      mdc.ripple.MDCRipple.attachTo(document.getElementById(this.id))
    }
  },
  template: `
    <a
      v-if="href"
      :id="id"
      class="mdc-button"
      :class="classes"
      :href="href"
      :disabled="disabled"
      v-on:click="click">

      <span
        v-if="icon"
        class="material-icons mdc-button__icon">
        {{icon}}
      </span>

      <slot/>
    </a>

    <button
      v-else
      :id="id"
      class="mdc-button"
      :class="classes"
      :disabled="disabled"
      v-on:click="click">

      <span
        v-if="icon"
        class="material-icons mdc-button__icon">
        {{icon}}
      </span>

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
    },
    click: {
      type: Function,
      default: function() {
        return
      }
    }
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
      mdc.ripple.MDCRipple.attachTo(document.getElementById(this.id))
    }
  },
  template: `
    <button
      :id="id"
      class="mdc-fab"
      :class="classes"
      v-on:click="click">

      <template
        v-if="extended">

        <span
          v-if="icon"
          class="material-icons mdc-fab__icon">
          {{icon}}
        </span>

        <span
          class="mdc-fab__label">
          <slot/>
        </span>

        <span
          v-if="trailingIcon"
          class="material-icons mdc-fab__icon">
          {{trailingIcon}}
        </span>
      </template>

      <span
        v-else
        class="material-icons mdc-fab__icon">
        {{icon}}
      </span>

    </button>`
})
