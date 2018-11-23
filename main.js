

myapp = new Vue({
  el:'#app',
  data: {
    message: "Hello World!",
    alert: function() {
      alert("hello")
    },
    options: [
      {value: "", text:"",disabled:true, selected:true},
      {value: 1,text: "apple"},
      {value: 2, text: "orange"},
      {value: 3, text: "bananas"}
    ]
  },
  methods: {
    log: function() {
      console.log("Hello World!")
    }
  }
})
