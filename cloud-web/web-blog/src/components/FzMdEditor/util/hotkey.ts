import * as keyEvents from "./editorKeyEvents";
import { isPlatformWindows } from "./util";
import { EDITOR_CONTAINER_CLASS } from "./constant";

const handlePressHotkey = (type: any, markdownEditor: any,onFinish?: (val: any)=>void) => {
  const selection = markdownEditor.getSelection();
  switch (type) {
    case "Bold":
      keyEvents.bold(markdownEditor, selection);
      break;
    case "Del":
      keyEvents.del(markdownEditor, selection);
      break;
    case "Italic":
      keyEvents.italic(markdownEditor, selection);
      break;
    case "Code":
      keyEvents.code(markdownEditor, selection);
      break;
    case "InlineCode":
      keyEvents.inlineCode(markdownEditor, selection);
      break;
    case "H1":
      keyEvents.h1(markdownEditor, selection);
      break;
    case "H2":
      keyEvents.h2(markdownEditor, selection);
      break;
    case "H3":
      keyEvents.h3(markdownEditor, selection);
      break;
    default:
      return;
  }

  const editorContent = markdownEditor.getValue();
  onFinish && onFinish(editorContent)
};

// dispatch 用来控制一些弹窗， 上传图片等
const bindHotkeys = (editor: any, action: any, onFinish?: (val: any)=>void) => {
  // const {getValue} = editor;
  // const content = getValue && getValue() || '';
  return isPlatformWindows
    ? {
      "Ctrl-B": () => {
        handlePressHotkey("Bold", editor,onFinish);
      },
      "Ctrl-U": () => {
        handlePressHotkey("Del", editor,onFinish);
      },
      "Ctrl-I": () => {
        handlePressHotkey("Italic", editor,onFinish);
      },
      "Ctrl-Alt-C": () => {
        handlePressHotkey("Code", editor,onFinish);
      },
      "Ctrl-Alt-V": () => {
        handlePressHotkey("InlineCode", editor,onFinish);
      },
      "Ctrl-Alt-1": () => {
        handlePressHotkey("H1", editor,onFinish);
      },
      "Ctrl-Alt-2": () => {
        handlePressHotkey("H2", editor,onFinish);
      },
      "Ctrl-Alt-3": () => {
        handlePressHotkey("H3", editor,onFinish);
      },
      "Ctrl-K": () => {
        // action.setLinkOpen(true);
      },
      "Ctrl-Alt-I": () => {
        const {setImageOpen} = action;
        setImageOpen && setImageOpen(true);
      },
      "Ctrl-Alt-T": () => {
        // action.setFormOpen(true);
      },
      "Ctrl-Alt-S": () => {
        // Converting between sans serif and serif
      },
      "Ctrl-Alt-L": () => {
        // keyEvents.parseLinkToFoot(content.content, content);
      },
      "Ctrl-Alt-F": () => {
        // keyEvents.formatDoc(content, {});
      },
      "Ctrl-F": () => {
        // dialog.setSearchOpen(!dialog.isSearchOpen);
      },
    }
    : {
      "Cmd-B": () => {
        handlePressHotkey("Bold", editor,onFinish);
      },
      "Cmd-U": () => {
        handlePressHotkey("Del", editor,onFinish);
      },
      "Cmd-I": () => {
        handlePressHotkey("Italic", editor,onFinish);
      },
      "Cmd-Alt-C": () => {
        handlePressHotkey("Code", editor,onFinish);
      },
      "Cmd-Alt-V": () => {
        handlePressHotkey("InlineCode", editor,onFinish);
      },
      "Cmd-Alt-1": () => {
        handlePressHotkey("H1", editor,onFinish);
      },
      "Cmd-Alt-2": () => {
        handlePressHotkey("H2", editor,onFinish);
      },
      "Cmd-Alt-3": () => {
        handlePressHotkey("H3", editor,onFinish);
      },
      "Cmd-K": () => {
        // dialog.setLinkOpen(true);
      },
      "Cmd-Alt-I": () => {
        // dialog.setImageOpen(true);
        const {setImageOpen} = action;
        setImageOpen && setImageOpen(true);
      },
      "Cmd-Alt-T": () => {
        // dialog.setFormOpen(true);
      },
      "Cmd-Alt-S": () => {
        // Converting between sans serif and serif
      },
      "Cmd-Alt-L": () => {
        // keyEvents.parseLinkToFoot(content.content, content);
      },
      "Cmd-Alt-F": () => {
        // keyEvents.formatDoc(content, {});
      },
      "Cmd-F": () => {
        // dialog.setSearchOpen(!dialog.isSearchOpen);
      },
    };
}

export const hotKeys = isPlatformWindows
  ? {
    bold: "Ctrl+B",
    del: "Ctrl+U",
    italic: "Ctrl+I",
    code: "Ctrl+Alt+C",
    inlineCode: "Ctrl+Alt+V",
    link: "Ctrl+K",
    image: "Ctrl+Alt+I",
    form: "Ctrl+Alt+T",
    format: "Ctrl+Alt+F",
    linkToFoot: "Ctrl+Alt+L",
    search: "Ctrl+F",
  }
  : {
    bold: "⌘B",
    del: "⌘U",
    italic: "⌘I",
    code: "⌥⌘C",
    inlineCode: "⌥⌘V",
    link: "⌘K",
    image: "⌥⌘I",
    form: "⌥⌘T",
    format: "⌥⌘F",
    linkToFoot: "⌥⌘L",
    search: "⌘F",
  };

export const betterTab = (cm: any) => {
  if (cm.somethingSelected()) {
    cm.indentSelection("add");
  } else {
    cm.replaceSelection(
      cm.getOption("indentWithTabs") ? "\t" : Array(cm.getOption("indentUnit") + 1).join(" "),
      "end",
      "+input",
    );
  }
};

export const rightClick = (cm: any) => {
  const ele = document.getElementsByClassName(EDITOR_CONTAINER_CLASS);
  if (ele === null) {
    return;
  }
  // @ts-ignore
  ele.oncontextmenu = (e) => {
    const element = document.getElementById("nice-editor-menu");
    if (element === null) {
      return;
    }
    element.style.display = "block";
    // event--ie  ev--其他浏览器
    // @ts-ignore
    const oEvent = window.event || window.ev;
    // documentElement--其他游览器    body--谷歌
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 菜单的style样式跟随鼠标的位置
    element.style.top = oEvent.clientY + scrollTop + "px";
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.style.left = oEvent.clientX + scrollLeft + "px";
    return false;
  };
  window.onclick = (e: any) => {
    const element = document.getElementById("nice-editor-menu");
    if (element === null) {
      return;
    }
    element.style.display = "none";
  };
};


export default bindHotkeys;
