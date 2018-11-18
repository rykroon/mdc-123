

myapp = new Vue({
  el:'#app',
  data: {
    message: "Hello World!",
    alert: function() {
      alert("hello")
    }
  },
  methods: {
    log: function() {
      console.log("Hello World!")
    }
  }
})
