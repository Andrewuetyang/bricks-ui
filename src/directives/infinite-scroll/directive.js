export default {
  // 无限滚动
  bind: function (el, binding, vnode) {
    let cb = binding.value
    let vm = vnode.context
    let disabled = el.getAttribute('infinite-scroll-disabled')
    let distance = Number(el.getAttribute('infinite-scroll-distance'))
    distance = distance ? distance : 0

    // 监听滚动事件
    el.addEventListener('scroll', function (event) {
      let offsetHeight = event.currentTarget.offsetHeight,
        scrollHeight = event.currentTarget.scrollHeight,
        scrollTop = event.currentTarget.scrollTop,
        scrollBottom = offsetHeight + scrollTop

      if (scrollHeight - scrollBottom <= distance) {
        if (!vm[disabled] && typeof cb === 'function') {
          cb()
        }
      }
    })
  }
}