const list = require('@material/list');
const ripple = require('@material/ripple');

module.exports = {
  props: {
    nonInteractive: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    avatarList: {
      type: Boolean,
      default: false
    },
    twoLine: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      mdcList: undefined,
      listItemRipples: undefined,
      classes : {
        'mdc-list': true,
        'mdc-list--non-interactive': this.nonInteractive,
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatarList,
        'mdc-list--two-line': this.twoLine
      }
    }
  },
  mounted: function() {
    this.mdcList = new list.MDCList(this.$el);
    if (this.ripple) {
      this.listItemRipples = this.mdcList.listElements.map((listItemEl) => new ripple.MDCRipple(listItemEl));
    }
  },
  beforeDestroy: function() {
    this.mdcList.destroy();
  },
  template: `
    <ul :class=classes>
      <slot/>
    </ul>
  `
}
