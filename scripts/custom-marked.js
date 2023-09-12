// const marked = require('marked');

// hexo.extend.filter.register('marked:renderer', function(renderer) {
//   // 扩展 text 方法
//   renderer.text = function(text) {
//     // 自定义渲染逻辑
//     if (text.startsWith('@') && text.endsWith('@')) {
//       const string = text.slice(1, -1);
//       return `<span class="chord">${string}</span>`;
//     }
//     if (text.startsWith("+") && text.endsWith("+")) {
//       const string = text.slice(1, -1);
//       return `<span class="fog">${string}</span>`;
//     }

//     // 使用默认的渲染方式
//     return text;
//   };
// });

const marked = require("marked");

hexo.extend.filter.register("marked:parse", function (parser) {
  const tokens = parser.tokens;

  // 遍历所有解析后的token
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === "text") {
      // 自定义渲染逻辑
      const text = token.text;

      if (text.includes("@")) {
        const replacedText = text.replace(
          /@([^@]+)@/g,
          '<span class="chord">$1</span>'
        );
        token.type = "html"; // 修改token类型为html
        token.text = replacedText; // 设置修改后的HTML内容
      }
    }
  }

  return parser;
});

