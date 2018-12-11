//const topAppBar = require('@material/top-app-bar/index');
const drawer = require('@material/drawer');

module.exports = {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    drawer: Boolean
  },
  data: function() {
    return {
      mdcTopAppBar: undefined,
      mdcDrawer: undefined
    }
  },
  computed: {
    classes: function() {
      return {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.collapsed && this.short,
        'mdc-top-app-bar--prominent': this.prominent && !this.short,
        'mdc-top-app-bar--dense': this.dense && !this.short,
        'mdc-top-app-bar--fixed': this.fixed && !this.short
      }
    }
  },
  mounted: function() {
    //this.mdcTopAppBar = new topAppBar.MDCTopAppBar(this.$el);
    this.mdcTopAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(this.$el);

    if (this.drawer) {
      this.mdcDrawer = new drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
      this.mdcTopAppBar.listen('MDCTopAppBar:nav', () => {
        this.mdcDrawer.open = !this.mdcDrawer.open;
      });
    }

    this.mdcDrawer.open = true;
    console.log(this.mdcTopAppBar);
    console.log(this.mdcDrawer);

    if (this.$slots['navigation-icon']) {
      this.$slots['navigation-icon'][0].elm.classList.add('mdc-top-app-bar__navigation-icon');
    }

    if (this.$slots['action-items']) {
      this.$slots['action-items'][0].elm.classList.add('mdc-top-app-bar__action-item');
    }
  },
  template: `
    <header :class="classes">
      <div class='mdc-top-app-bar__row'>

        <section
          v-if="$slots['navigation-icon'] || $slots['default']"
          class="mdc-top-app-bar__section--align-start">

          <slot name="navigation-icon"/>

          <span class="mdc-top-app-bar__title">
            <slot/>
          </span>
        </section>

        <section
          v-if="$slots['action-items']"
          class="mdc-top-app-bar__section--align-end"
          role="toolbar">

          <slot name="action-items"/>
        </section>
      </div>
    </header>
  `
}
