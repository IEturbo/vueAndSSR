import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: `<div ref="dddd">hello {{text}}</div>`,
  data: {
    text: 0
  }
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
  app.$data.text += 1
}, 1000)

console.log(app.$options)
console.log(app.$props)
console.log(app.$el)
console.log(app.$root)
console.log(app.$children)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$refs)
console.log(app.$isServer) // 是否服务端渲染
