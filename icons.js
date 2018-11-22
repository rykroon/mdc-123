Vue.component("md-icon", {
  props: {
    extraClass: String
  },
  template: `
    <span
      class="material-icons"
      :class="extraClass">
      <slot/>
    </span>`
})
