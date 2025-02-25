import Marked from "marked";
import hljs from "highlight.js";
import Tocify from "./tocify.js";
import "highlight.js/styles/monokai-sublime.css";

export const initMarked = ({ hasTocify=false }) => {
  const renderer = new Marked.Renderer();
  let tocify;
  if(hasTocify) {
    tocify = new Tocify();
    renderer.heading = function (text, level) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
  }
  Marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: (code) => hljs.highlightAuto(code).value
  });

  return { marked: Marked, tocify }
}

export function gen_text_img(s) {
    let colors = [
        "rgb(239,150,26)", 'rgb(255,58,201)', "rgb(111,75,255)", "rgb(36,174,34)", "rgb(80,80,80)"
    ];
    let cvs = document.createElement("canvas");
    cvs.setAttribute('width', 100);
    cvs.setAttribute('height', 100);
    // cvs.setAttribute('borderRadius', '50%');
    let ctx = cvs.getContext("2d");
    ctx.fillStyle = colors[Math.floor(Math.random() * (colors.length))];
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.font =40 * 0.6 + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(s, 100 / 2, 100 / 2);

    return cvs.toDataURL('image/jpeg', 1);
}