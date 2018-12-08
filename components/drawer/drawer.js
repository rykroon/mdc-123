const drawer = require('@material/drawer');

module.exports = {
  props: {
    dismissible: Boolean,
    model: Boolean
  },
  data: function() {
    return {
      mdcDrawer: undefined,
      classes: {
        'mdc-drawer': true,
        'mdc-drawer--dismissible': this.dismissible,
        'mdc-drawer--modal': this.modal
      }
    }
  },
  mounted: function() {
    this.mdcDrawer = new drawer.MDCDrawer(this.$el);
  },
  template: `
    <aside :class="classes">

      <div
        v-if="$slots['title'] || $slots['subtitle']"
        class="mdc-drawer__header">

        <h3
          v-if="$slots['title']"
          class="mdc-drawer__title">

          <slot name="title"/>
        </h3>

        <h6
          v-if="$slots['subtitle']"
          class="mdc-drawer__subtitle">

          <slot name="subtitle"/>
        </h6>
      </div>

      <div class="mdc-drawer-content">
        <slot/>
      </div>
    </aside>
  `
}
