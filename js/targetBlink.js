/**
 * 为网页元素（文字）添加闪烁效果
 * @param {String} elementId 元素的id
 */
function blinkElement(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    // 滚动到目标元素所在的位置
    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

    // 添加闪烁效果
    targetElement.classList.add("blink");

    // 在一段时间后移除闪烁效果
    setTimeout(() => {
      targetElement.classList.remove("blink");
    }, 2000); // 闪烁持续时间，单位：毫秒
  }
}
