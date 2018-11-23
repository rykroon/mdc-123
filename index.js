//import Button from './compnonents/buttons/button.js'

var button = require('./components/buttons/button.js')


const myapp = new Vue({
  el:'#myapp',
  data: {

  },
  components: {
    'md-button': button
  }
})

// const myapp = new Vue({
//   el:'#app',
//   data: {
//     message: "Hello World!",
//     alert: function() {
//       alert("hello")
//     },
//     options: [
//       {value: "", text:"",disabled:true, selected:true},
//       {value: 1,text: "apple"},
//       {value: 2, text: "orange"},
//       {value: 3, text: "bananas"}
//     ]
//   },
//   methods: {
//     log: function() {
//       console.log("Hello World!")
//     }
//   },
//   components: {
//     'md-form-field': formField
//   }
// })
