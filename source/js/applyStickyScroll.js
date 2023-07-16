/**
 * 为网页元素添加滚动悬浮效果
 * @param {*} element 一个网页元素
 * @param {*} initialTop 初始元素到顶部距离
 * @param {*} finalTop 最终元素到顶部距离
 */
export function applyStickyScroll(element, initialTop, finalTop) {
  element.style.position = "sticky"; //确保元素具有 sticky 定位
  const stickyScroll = function () {
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > initialTop - finalTop) {
      element.style.top = finalTop + "px";
    } else {
      element.style.top = initialTop - scrollY + "px";
    }
  };

  stickyScroll(); //初始化位置

  window.addEventListener("scroll", stickyScroll); //滚动时更新位置
}
