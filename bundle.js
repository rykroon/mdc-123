(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//buttons

//import { MDCRipple } from '@material/ripple'

module.exports = {
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
      mdcRipple: undefined,
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
      this.mdcRipple = mdc.ripple.MDCRipple.attachTo(this.$el)
      //this.mdcRipple = MDCRipple.attachTo(this.$el)

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
}

},{}],2:[function(require,module,exports){
//import Button from './compnonents/buttons/button.js'

var button = require('./components/buttons/button.js')

console.log(button)


const myapp = new Vue({
  el:'#myapp',
  data: {

  },
  components: {
    'md-button': button
  }
})

// const myapp = new Vue({
//   el:'#app',
//   data: {
//     message: "Hello World!",
//     alert: function() {
//       alert("hello")
//     },
//     options: [
//       {value: "", text:"",disabled:true, selected:true},
//       {value: 1,text: "apple"},
//       {value: 2, text: "orange"},
//       {value: 3, text: "bananas"}
//     ]
//   },
//   methods: {
//     log: function() {
//       console.log("Hello World!")
//     }
//   },
//   components: {
//     'md-form-field': formField
//   }
// })

},{"./components/buttons/button.js":1}]},{},[2]);
