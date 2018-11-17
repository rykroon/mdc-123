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

Vue.component('card', {
  props: ['id','content','outlined'],
  methods: {
    getOutlineClass: function() {
      console.log(this.outlined)
      if (this.outlined) {
        return 'mdc-card--outlined'
      }
    }
  },
  template: `
    <div
      v-bind:id="id"
      class="mdc-card"
      v-bind:class="getOutlineClass">
      {{content}}
    </div>`
})

Vue.component('checkbox', {
  props: ['id', 'label', 'disabled'],
  data: function() {
    return {
      isDisabled: this.disabled != undefined
    }
  },
  template: `
  <div class="mdc-form-field">
    <div class="mdc-checkbox"
      v-bind:class="{'mdc-checkbox--disabled': isDisabled}">
      <input  type="checkbox"
              class="mdc-checkbox__native-control"
              v-bind:id="id"
              v-bind:disabled="isDisabled"/>
      <div class="mdc-checkbox__background">
        <svg  class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>
    <label v-bind:for="id">{{label}}</label>
  </div>`
})


myapp = new Vue({
  el:'#app',
  data: {
    message: "Hello World!",
    alert: function() {
      alert("hello")
    }
  }
})
