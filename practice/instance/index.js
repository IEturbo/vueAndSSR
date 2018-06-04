import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: `<div ref="dddd">hello {{text}}</div>`,
  data: {
    text: 0,
    obj: {}
  }
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
  // app.$data.text += 1
  // app.obj.a = app.obj.text
  app.$set(app.obj, 'a', 1)
  // app.$forceUpdate()
}, 1000)

// console.log(app.$options)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$root)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer) // 是否服务端渲染
// 下面的代码   当页面有变化的时候会发生变化
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// 方法
// $watch
// app.$watch('text', (newData, oldData) => {
//   console.log(`${newData}` + ':' + `${oldData}`)
// })

// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })

// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

setInterval(() => {
  app.$forceUpdate()
}, 1000)
