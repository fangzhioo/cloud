// @ts-ignore
import MarkdownIt from "markdown-it";
// @ts-ignore
import markdownItDeflist from "markdown-it-deflist";
// @ts-ignore
import markdownItImplicitFigures from "markdown-it-implicit-figures";
// @ts-ignore
import markdownItTableOfContents from "markdown-it-table-of-contents";
// @ts-ignore
import markdownItRuby from "markdown-it-ruby";
// @ts-ignore
import markdownItImsize from "markdown-it-imsize";

import markdownItMath from "./markdown-it-math";
import markdownItSpan from "./markdown-it-span";
import markdownItLinkfoot from "./markdown-it-linkfoot";
import markdownItImageFlow from "./markdown-it-imageflow";
import markdownItLiReplacer from "./markdown-it-li";
import markdownItRemovepre from './markdown-it-removepre';

import highlightjs from "./langHighlight";

const getElementById = (id: string) => {
  const target = window.document.getElementById(id);
  if (target !== null) {
    return target;
  }
  const newTarget = window.document.createElement('style');
  newTarget.setAttribute('id', id);
  return newTarget;
}

export const replaceStyle = (id: string, css: string) => {
  const style = getElementById(id);
  try {
    style.innerHTML = css;
  } catch (e) {
    console.warn(e);
  }
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
};

// 普通解析器，代码高亮用highlight
export const markdownParser = new MarkdownIt({
  html: true,
  highlight: (str: string, lang: string) => {
    // 加上custom则表示自定义样式，而非微信专属，避免被remove pre
    if (lang && highlightjs.getLanguage(lang)) {
      try {
        const formatted = highlightjs
          .highlight(lang, str, true)
          .value.replace(/\n/g, "<br/>") // 换行用br表示
          .replace(/\s/g, "&nbsp;") // 用nbsp替换空格
          .replace(/span&nbsp;/g, "span "); // span标签修复
        return '<pre class="custom"><code class="hljs">' + formatted + "</code></pre>";
      } catch (e) {
        console.log(e);
      }
    }
    return '<pre class="custom"><code class="hljs">' + markdownParser.utils.escapeHtml(str) + "</code></pre>";
  },
});

markdownParser
  .use(markdownItSpan) // 在标题标签中添加span
  .use(markdownItMath) // 数学公式
  .use(markdownItLinkfoot) // 修改脚注
  .use(markdownItTableOfContents, {
    transformLink: () => "",
    includeLevel: [2, 3],
    markerPattern: /^\[toc\]/im,
  }) // TOC仅支持二级和三级标题
  .use(markdownItRuby) // 注音符号
  .use(markdownItImplicitFigures, {figcaption: true}) // 图示
  .use(markdownItDeflist) // 定义列表
  .use(markdownItLiReplacer) // li 标签中加入 p 标签
  .use(markdownItImageFlow) // 横屏移动插件
  .use(markdownItImsize);


// 专门微信代码高亮的解析器
export const markdownParserWechat = new MarkdownIt({
  html: true,
  highlight: (str: string, lang: string) => {
    const text = str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const lines = text.split("\n");
    const codeLines = [];
    const numbers = [];
    for (let i = 0; i < lines.length - 1; i++) {
      codeLines.push('<code><span class="code-snippet_outer">' + (lines[i] || "<br>") + "</span></code>");
      numbers.push("<li></li>");
    }
    return (
      '<section class="code-snippet__fix code-snippet__js">' +
      '<ul class="code-snippet__line-index code-snippet__js">' +
      numbers.join("") +
      "</ul>" +
      '<pre class="code-snippet__js" data-lang="' +
      lang +
      '">' +
      codeLines.join("") +
      "</pre></section>"
    );
  },
});

markdownParserWechat
  .use(markdownItSpan) // 在标题标签中添加span
  .use(markdownItRemovepre) // 移除代码段中的 pre code
  .use(markdownItMath) // 数学公式
  .use(markdownItLinkfoot) // 修改脚注
  .use(markdownItTableOfContents, {
    transformLink: () => "",
    includeLevel: [2, 3],
    markerPattern: /^\[toc\]/im,
  }) // TOC仅支持二级和三级标题
  .use(markdownItRuby) // 注音符号
  .use(markdownItImplicitFigures, {figcaption: true}) // 图示
  .use(markdownItDeflist) // 定义列表
  .use(markdownItLiReplacer) // li 标签中加入 p 标签
  .use(markdownItImageFlow) // 横屏移动插件
  .use(markdownItImsize);
