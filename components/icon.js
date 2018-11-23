module.exports = {
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
