/**
 * 滚动锚点定位
 */

export default {
    bind (el, binding, vnode) {
      el.style.background = "red";
      el.style.color = "red";
      console.log(binding)
    },
    update (el, binding, vnode, oldVnode) {
      el.style.background = "#fff";
      el.style.color = "#000";
      console.log(binding)
    },
    unbind (el, binding) {

    }
};
x
