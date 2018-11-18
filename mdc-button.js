//buttons

Vue.component('btn', {
  props: ['id','text','type','disabled','click'],
  methods: {
    getTypeClass: function() {
      if (this.type != undefined) {
        return 'mdc-button--' + this.type
      }
    }
  },
  template: `
    <button
      v-bind:id="id"
      v-bind:disabled="disabled"
      class="mdc-button"
      v-bind:class="getTypeClass()"
      v-on:click="click">
      {{text}}
    </button>`
})

Vue.component('fab', {
  props: ['id','text','type','click'],
  methods: {
    getTypeClass: function() {
      if (this.type != undefined) {
        return 'mdc-fab--' + this.type
      }
    }
  },
  template: `
    <button
      v-bind:id="id"
      class="mdc-fab"
      v-bind:class="getTypeClass()"
      v-on:click="click">
      {{text}}
    </button>`
})
