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
