// @ts-ignore
import MarkdownIt from "markdown-it";
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
