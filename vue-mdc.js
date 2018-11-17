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
  <div
    class="mdc-form-field">

    <div
      class="mdc-checkbox"
      v-bind:class="{'mdc-checkbox--disabled': isDisabled}">

      <input
        type="checkbox"
        class="mdc-checkbox__native-control"
        v-bind:id="id"
        v-bind:disabled="isDisabled"/>

      <div
        class="mdc-checkbox__background">

        <svg
          class="mdc-checkbox__checkmark"
          viewBox="0 0 24 24">

          <path
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>

        <div
          class="mdc-checkbox__mixedmark">
        </div>
      </div>
    </div>

    <label
      v-bind:for="id">
      {{label}}
    </label>
  </div>`
})

Vue.component('radio', {
  props: ['id', 'name','label','disabled'],
  data: function() {
    return {
      isDisabled: this.disabled != undefined
    }
  },
  template: `
  <div
    class="mdc-form-field">

    <div
      class="mdc-radio"
      v-bind:class="{'mdc-radio--disabled': isDisabled}">

      <input
        class="mdc-radio__native-control"
        type="radio"
        v-bind:id="id"
        v-bind:name="name"
        v-bind:disabled="isDisabled">

      <div
        class="mdc-radio__background">

        <div
          class="mdc-radio__outer-circle">
        </div>

        <div
          class="mdc-radio__inner-circle">
        </div>
      </div>
    </div>

    <label
      v-bind:for="id">
      {{label}}
    </label>
  </div>`
})

Vue.component('switcher', {
  props : ['id','label', 'checked', 'disabled'],
  data: function() {
    return {
      isChecked: this.checked != undefined,
      isDisabled: this.disabled != undefined
    }
  },
  methods: {
    disable: function() {
      this.disabled = ""
    },
    enable: function() {
      this.disabled = undefined
    },
    toggle: function() {
      if (this.isChecked) {
        this.isChecked = false
      } else {
        this.isChecked = true
      }
    },
  },
  template: `
  <div
    class="mdc-form-field">

    <div
      class="mdc-switch"
      v-bind:class="{'mdc-switch--checked': isChecked, 'mdc-switch--disabled': isDisabled}"
      v-on:click="toggle">

      <div
        class="mdc-switch__track">
        </div>

        <div
        class="mdc-switch__thumb-underlay">

        <div
          class="mdc-switch__thumb">

          <input
            type="checkbox"
            v-bind:id="id"
            class="mdc-switch__native-control"
            role="switch"
            v-bind:checked="isChecked"
            v-bind:disabled="isDisabled">
        </div>
      </div>
    </div>

    <label
      v-bind:for="id">
      {{label}}
    </label>
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
