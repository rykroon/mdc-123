//buttons

Vue.component('btn', {
  props: ['id','text','variant', 'dense','disabled','noripple','click',],
  data: function() {
    return {
      raised:     this.variant === "raised",
      unelevated: this.variant === "unelevated",
      outlined:   this.variant === "outlined",
      isDense:    this.dense != undefined,
      hasRipple:  this.noripple == undefined
    }
  },
  mounted: function() {
    if (this.hasRipple) {
      id = '#' + this.id
      mdc.ripple.MDCRipple.attachTo(document.querySelector(id))
    }
  },
  template: `
    <button
      v-bind:id="id"
      v-bind:disabled="disabled"
      class="mdc-button"
      v-bind:class="{
        'mdc-button--raised': raised,
        'mdc-button--unelevated': unelevated,
        'mdc-button--outlined': outlined,
        'mdc-button--dense': isDense
      }"
      v-on:click="click">
      {{text}}
    </button>`
})

Vue.component('fab', {
  props: ['id','text','variant','noripple','click'],
  data: function() {
    return {
      extended : this.variant === "extended",
      mini: this.variant === "mini",
      hasRipple: this.noripple == undefined
    }
  },
  mounted: function() {
    if (this.hasRipple) {
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
        v-bind:class="{'mdc-fab__label': extended}">
        {{text}}
      </span>

    </button>`
})
