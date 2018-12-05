//const topAppBar = require('@material/top-app-bar/index');

module.exports = {
  props: {
    fixed: Boolean,
    prominent: Boolean,
    dense: Boolean,
    short: Boolean,
    collapsed: Boolean
  },
  data: function() {
    return {
      mdcTopAppBar: undefined
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
    if (this.$slots['navigation']) {
      this.$slots['navigation'][0].elm.classList.add('mdc-top-app-bar__navigation-icon');
    }
  },
  template: `
    <header :class="classes">
      <slot/>
    </header>
  `
}
