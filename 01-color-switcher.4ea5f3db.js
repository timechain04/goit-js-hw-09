let t;const e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),r=document.querySelector("body");e.addEventListener("click",function(){t=setInterval(o,1e3),e.setAttribute("disabled","disabled"),d.removeAttribute("disabled")}),d.addEventListener("click",function(){d.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),clearInterval(t)});const a=()=>`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,o=()=>r.style.backgroundColor=`${a()}`;d.setAttribute("disabled","disabled");
//# sourceMappingURL=01-color-switcher.4ea5f3db.js.map