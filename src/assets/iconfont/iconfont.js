(function(window){var svgSprite='<svg><symbol id="el-icon-xy-leftarrow-copy" viewBox="0 0 1024 1024"><path d="M467.18976 540.56960001a81.8176 81.8176 0 0 1 19.47648-53.04320001l191.52896001-225.4848a81.92 81.92 0 1 1 124.86655999 106.0864l-146.47296 172.4416 146.47296 172.44159999a81.92 81.92 0 0 1-124.86656 106.08640002l-191.52896-225.48480001a81.7152 81.7152 0 0 1-19.47648-53.04319999z m-246.23104 53.06367999l191.52896001 225.44384a81.92 81.92 0 1 0 124.84607999-106.0864l-146.47296-172.40064 146.47296-172.48256a81.92 81.92 0 1 0-124.86656-106.04544l-191.52896 225.52576a81.7152 81.7152 0 0 0-19.47648 53.00224c0 18.88256 6.49216 37.76511999 19.49696 53.0432z" fill="#8a8a8a" ></path></symbol><symbol id="el-icon-xy-rightarrow-copy" viewBox="0 0 1024 1024"><path d="M556.81024 483.43039999a81.8176 81.8176 0 0 1-19.47648 53.04320001l-191.52896001 225.4848a81.92 81.92 0 1 1-124.86655999-106.0864l146.47296-172.4416-146.47296-172.44159999a81.92 81.92 0 0 1 124.86656-106.08640002l191.52896 225.48480001a81.7152 81.7152 0 0 1 19.47648 53.04319999z m246.23104-53.06367999l-191.52896001-225.44384a81.92 81.92 0 1 0-124.84607999 106.0864l146.47296 172.40064-146.47296 172.48256a81.92 81.92 0 1 0 124.86656 106.04544l191.52896-225.52576a81.7152 81.7152 0 0 0 19.47648-53.00224c0-18.88256-6.49216-37.76511999-19.49696-53.0432z" fill="#8a8a8a" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)