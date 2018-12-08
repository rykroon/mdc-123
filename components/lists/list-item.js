module.exports = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
      return {
        classes: {
          'mdc-list-item': true,
          'mdc-list-item--disabled': this.disabled,
          'mdc-list-item--selected': this.selected
        }
      }
  },
  template: `
    <li :class="classes">
      <span
        v-if="$slots['graphic']"
        class="mdc-list-item__graphic">

        <slot name="graphic"/>
      </span>

      <span class="mdc-list-item__text">
        <span
          v-if="$slots['primary-text']"
          class="mdc-list-item__primary-text">

          <slot name="primary-text"/>
        </span>

        <span
          v-if="$slots['secondary-text']"
          class="mdc-list-item__secondary-text">

          <slot name="secondary-text"/>
        </span>

        <slot/>
      </span>

      <span
        v-if="$slots['meta']"
        class="mdc-list-item__meta">

        <slot name="meta"/>
      </span>
    </li>
  `
}
