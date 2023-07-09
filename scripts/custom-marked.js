const marked = require('marked');

hexo.extend.filter.register('marked:renderer', function(renderer) {
  // 扩展 text 方法
  renderer.text = function(text) {
    // 自定义渲染逻辑
    if (text.startsWith('@') && text.endsWith('@')) {
      const string = text.slice(1, -1);
      return `<span class="Opus Chords Sans Std">${string}</span>`;
    }

    // 使用默认的渲染方式
    return text;
  };
});