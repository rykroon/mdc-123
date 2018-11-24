(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//buttons

module.exports = {
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    dense: Boolean,
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
    }
    if (this.$slots.icon) {
      this.$slots.icon[0].elm.classList.add('mdc-button__icon')
    }
  },
  template: `
    <a
      v-if="href"
      :class="classes"
      :href="href"
      v-bind="$attrs"
      v-on="$listeners">

      <slot name="icon"/>

      <slot/>
    </a>

    <button
      v-else
      :class="classes"
      v-bind="$attrs"
      v-on="$listeners">

      <slot name="icon"/>

      <slot/>
    </button>`
}

},{}],2:[function(require,module,exports){
module.exports = {
  props: {
    extended: Boolean,
    mini: Boolean,
    exited: Boolean,
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
        'mdc-fab--mini': this.mini,
        'mdc-fab--exited': this.exited
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      mdc.ripple.MDCRipple.attachTo(this.$el);
    }
    if (this.$slots.icon) {
      this.$slots.icon[0].elm.classList.add('mdc-fab__icon');
    }
    if (this.$slots.leadingIcon) {
      this.$slots.leadingIcon[0].elm.classList.add('mdc-fab__icon');
    }
    if (this.$slots.trailingIcon) {
      this.$slots.trailingIcon[0].elm.classList.add('mdc-fab__icon');
    }
  },
  template: `
    <button
      :class="classes"
      v-bind="$attrs"
      v-on="$listeners">

      <template v-if="extended">
        <slot name="leadingIcon"/>

        <span class="mdc-fab__label">
          <slot/>
        </span>

        <slot name="trailingIcon"/>
      </template>

      <slot name="icon"/>
    </button>`
}

},{}],3:[function(require,module,exports){
module.exports = {
  template: `
    <span class="material-icons">
      <slot/>
    </span>`
}

},{}],4:[function(require,module,exports){
module.exports = {
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  inheritAttrs: false,
  data: function() {
    return {
      mdcCheckbox: undefined,
      classes: {
          'mdc-checkbox': true,
          'mdc-checkbox--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      this.mdcCheckbox = mdc.checkbox.MDCCheckbox.attachTo(this.$el)
    }
  },
  template: `
    <div :class="classes">

      <input
        type="checkbox"
        class="mdc-checkbox__native-control"
        v-bind="$attrs"
        :disabled="disabled"/>

      <div class="mdc-checkbox__background">

        <svg
          class="mdc-checkbox__checkmark"
          viewBox="0 0 24 24">

          <path
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>

        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>`
}

},{}],5:[function(require,module,exports){
module.exports = {
  props: {
    alignEnd: Boolean
  },
  data: function() {
    return {
      mdcFormField: undefined,
      classes: {
        'mdc-form-field': true,
        'mdc-form-field--align-end': this.alignEnd
      }
    }
  },
  mounted: function() {
    this.mdcFormField = mdc.formField.MDCFormField.attachTo(this.$el);
  },
  template: `
  <div :class="classes">
    <slot/>
  </div>`
}

},{}],6:[function(require,module,exports){
module.exports =  {
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  inheritAttrs: false,
  data: function() {
    return {
      mdcRadio: undefined,
      classes: {
        'mdc-radio': true,
        'mdc-radio--disabled': this.disabled
      }
    }
  },
  mounted: function() {
    if (this.ripple) {
      this.mdcRadio = mdc.radio.MDCRadio.attachTo(this.$el);
    }
  },
  template: `
    <div :class="classes">

      <input
        class="mdc-radio__native-control"
        type="radio"
        v-bind="$attrs"
        :disabled="disabled">

      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>`
}

},{}],7:[function(require,module,exports){
//import Button from './compnonents/buttons/button.js'

const button = require('./components/buttons/button.js');
const icon = require('./components/icon.js');
const fab = require('./components/buttons/fab.js');
const formField = require('./components/inputs-and-controls/form-field.js');
const checkbox = require('./components/inputs-and-controls/checkbox.js');
const radio = require('./components/inputs-and-controls/radio.js');
//const textField = require('./components/text-field.js');

const components = {
  'md-button': button,
  'md-icon': icon,
  'md-fab': fab,
  'md-form-field': formField,
  'md-checkbox': checkbox,
  'md-radio': radio
}


const myapp = new Vue({
  el:'#myapp',
  components: components
})

},{"./components/buttons/button.js":1,"./components/buttons/fab.js":2,"./components/icon.js":3,"./components/inputs-and-controls/checkbox.js":4,"./components/inputs-and-controls/form-field.js":5,"./components/inputs-and-controls/radio.js":6}]},{},[7]);
