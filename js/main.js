!function(){"use strict";function a(e,t){if(!e)return!1;for(var n=0,i=e.length;n<i;n++)if(null!=e[n]&&t(e[n],n))return!0;return!1}class s{element=null;constructor(e){this.element=e}addChild(e){this.element.appendChild(e.element)}addChilds(...e){e.forEach(e=>{Array.isArray(e)?e.forEach(e=>this.addChild(e)):"object"==typeof e&&this.addChild(e)})}insChild(e,t){var n=this.element;"number"==typeof t?0<=t||t<n.childElementCount?n.insertBefore(e.element,n.children[t]):t<0||t>=-n.childElementCount?n.insertBefore(e.element,n.children[n.childElementCount+t]):n.appendChild(e.element):n.insertBefore(e.element,t.element)}childInd(n){var i=-1;return a(this.element.children,(e,t)=>{if(e==n.element)return i=t,!0}),i}remove(){this.element.remove()}removeChilds(e=0,t=1/0){var n=this.element;t>n.childElementCount&&(t=n.childElementCount);for(var i=e;i<t;i++)n.children[e].remove()}setStyle(e,t){this.element.style[e]=t}getStyle(e){if("string"==typeof e)return this.element.style[e]}setStyles(i){a(Object.keys(i),e=>{var t,n=i[e];t=typeof n,a(["number","string"],e=>e==t)&&(this.element.style[e]=i[e])})}setText(e){this.element.innerText=e}setAttrs(t){a(Object.keys(t),e=>{this.element[e]=t[e]})}setDisplay(e){this.setStyle("display",e)}addEventListener(e,t,n){this.element.addEventListener(e,t,n)}removeEventListener(e,t,n){this.element.removeEventListener(e,t,n)}}const t=Symbol("NElement");function l(e){return e[t]||(e[t]=new s(e))}const c={diFull:e=>"calc(100% - "+e+")",rgb:(e,t,n,i=1)=>"rgba("+e+", "+t+", "+n+", "+i+")"};function d(e){return function t(n){var i=l(document.createElement(n.tagName||"div"));return["height","width","position","top","left","right","bottom","display","overflow"].forEach(e=>{n[e]&&i.setStyle(e,n[e])}),n.style&&i.setStyles(n.style),n.text&&i.setText(n.text),n.attr&&i.setAttrs(n.attr),n.classList&&i.element.classList.add(...n.classList),n.event&&Object.keys(n.event).forEach(e=>i.addEventListener(e,n.event[e])),n.child&&n.child.forEach(e=>{e&&(e instanceof s?i.addChild(e):i.addChild(t(e)))}),n.assembly&&n.assembly.forEach(e=>{(e=e(i))&&(i=e)}),i}(function t(n,i){var a={},l={};return Object.keys(i).forEach(e=>a[e]=i[e]),Object.keys(n).forEach(e=>{var t;"child"!=e&&("$"==e[0]?(t=e.slice(1),l[t]=i[t],a[t]=i[t]=n[e]):"$"==e.slice(-1)?(t=e.slice(0,-1),l[t]=i[t],i[t]=n[e]):a[e]=n[e])}),a.left&&a.right&&a.width&&delete a.width,a.top&&a.bottom&&a.height&&delete a.height,n.child&&(a.child=[],n.child.forEach(e=>{e&&(e instanceof s?a.child.push(e):a.child.push(t(e,i)))})),Object.keys(l).forEach(e=>i[e]=l[e]),a}(e,{}))}function o(t){var n=!1;return(...e)=>n?null:(n=!0,t(...e))}function r(e,t){for(var n=0,i=0;128&e[t];)if(n|=(127&e[t++])<<i,32<(i+=7))throw"Unexpected data length";return{num:n|=e[t++]<<i,ind:t}}var h=new class{storageKey="";map=new Map;constructor(e){null!=e&&this.setStorageKey(e)}reread(){this.map=new Map;var e,e=(e=this.storageKey+"-Map",localStorage.getItem(e));if(e){for(var t=function(e){for(var t=e.length,n=new Uint8Array(t),i=0;i<t;i++)n[i]=e.charCodeAt(i);for(var a=Math.floor(7*t/8),l=new Uint8Array(a),s=7,o=0,i=0;i<a;i++)l[i]=(n[o]&(1<<s)-1)<<8-s|n[o+1]>>s-1,o++,--s<=0&&(s=7,o++);return l}(e),n=t.length,i=new TextDecoder("utf-8"),a=0;a<n;a++){var l=0;({ind:a,num:l}=r(t,a));var s=i.decode(t.subarray(a,a+l));a+=l;var o=0;({ind:a,num:o}=r(t,a));l=i.decode(t.subarray(a,a+o));a+=o,this.map.set(s,l)}return!0}return!1}setStorageKey(e){return this.storageKey=e,this.reread()}set(e,t){this.map.set(e,t)}get(e){return this.map.get(e)}delete(e){this.delete(e)}save(){var n=[];this.map.forEach((e,t)=>n.push(t,e));var t=[],i=new TextEncoder,a=0;n.forEach(e=>{e=i.encode(e);a+=5+e.length,t.push(e)});var e,l,s=new Uint8Array(a),o=0;t.forEach(e=>{o=function(e,t,n){for(;e;)t[n++]=127&e,e>>>=7;return n}(e.length,s,o),s.set(e,o),o+=e.length}),e=this.storageKey+"-Map",l=function(e){for(var t=e.length,n=Math.ceil(8*t/7),i=new Uint8Array(n),a=7,l=0,s=0;s<t;s++)i[l]|=e[s]>>8-a,i[l+1]|=(e[s]&(1<<8-a)-1)<<a-1,l++,--a<=0&&(a=7,l++);for(var o="",s=0;s<n;s++)o+=String.fromCharCode(i[s]);return o}(s.subarray(0,o)),localStorage.setItem(e,l)}};var m=l(document.body);m.setStyles({position:"fixed",height:"100%",width:"100%",margin:0,overflow:"hidden hidden",backgroundColor:c.rgb(15,15,15)});var n,e=l(document.createElement("style"));function u(e){e.setStyle("transition","transform 50ms linear, text-shadow 150ms linear"),e.addEventListener("mousedown",()=>{e.setStyle("transform","scale(0.95) translateY(2px)")}),e.addEventListener("mouseup",()=>{e.setStyle("transform","")}),e.addEventListener("mouseenter",()=>{e.setStyle("textShadow",`0 0 0.3em ${c.rgb(255,255,255,.5)}`),e.setStyle("transform","translateY(-1px)")}),e.addEventListener("mouseleave",()=>{e.setStyle("textShadow",""),e.setStyle("transform","")})}function g(n,i,a=!1,...l){return new Promise(e=>{var t=d({width:"100%",height:"100%",$position:"absolute",style:{userSelect:"none",backgroundColor:c.rgb(0,0,0,.7),alignItems:"center",justifyContent:"center",zIndex:"30000"},assembly:[e=>{e.element.animate([{opacity:.1},{opacity:1}],100)}],display:"flex",child:[{style:{border:"1px white solid",backgroundColor:c.rgb(255,255,255,.95),color:c.rgb(0,0,0),alignItems:"center",justifyContent:"center",flexFlow:"column",lineHeight:"45px",minHeight:"190px",minWidth:"280px",maxWidth:"95%"},assembly:[e=>{e.element.animate([{transform:"scale(0.6) translateY(10%)",opacity:0},{opacity:1}],170)}],position$:"static",display:"flex",child:[{text:n},{text:i},...l,{text:"??????",assembly:[u],event:{click:()=>{t.remove(),e(!0)}}},a?{text:"??????",assembly:[u],event:{click:()=>{t.remove(),e(!1)}}}:null]}]});m.addChild(t)})}async function p(e,t,n=!1){var i=d({tagName:"input",assembly:[u],style:{textAlign:"center"}});return await g(e,t,n,i)?i.element.value:null}async function f(e,t,n){var i=d({tagName:"textarea",style:{resize:"none",height:"5em",weight:"20em"},attr:{value:n}});return i.addEventListener("input",()=>{i.element.value=n}),await g(e,t,!1,i)?i.element.value:null}e.element.textContent=`
    input, textarea
    {
        outline: none;
    }
    *::-webkit-scrollbar {
        width: 5px;
        height: 1px;
    }
    *::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.1);
    }
    *::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }
`,m.addChild(e),n=!1,document.addEventListener("touchstart",e=>{n=!0,e.target.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}),document.addEventListener("touchend",e=>{n=!0,e.target.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0}))}),document.addEventListener("mouseenter",e=>{n&&e.stopPropagation()},!0),document.addEventListener("mousemove",()=>{n=!1},!0);var y=d({position:"absolute",right:"0px",style:{userSelect:"none",pointerEvents:"none",zIndex:"30000"}});function x(e,t,n){var i=d({style:{backgroundColor:c.rgb(255,255,255,.95),marginRight:"1em",marginTop:"1em",marginLeft:"1em",float:"right",clear:"both",overflow:"hidden hidden",padding:"1em",boxSizing:"border-box",minWidth:"180px",borderRadius:"0.2em"},position:"relative",child:[{tagName:"i",classList:["fa","fa-info-circle"]},{text:e,style:{fontSize:"1.2em",lineHeight:"1.5em",fontWeight:"bolder"}},{text:t},{text:n,style:{fontSize:"0.9em",float:"right"}},{text:"??",position:"absolute",right:"4px",top:"1px",assembly:[u],style:{fontSize:"25px",lineHeight:"1em"},event:{click:o(()=>{a()})}}]});function a(){i.setStyle("pointerEvents","none"),i.element.animate([{},{transform:"translateX(180%)"}],270),setTimeout(()=>{i.setStyle("visibility","hidden"),i.element.animate([{height:i.element.clientHeight+"px"},{marginTop:0,height:0,padding:0}],150),setTimeout(()=>{i.remove()},150)},270)}y.addChild(i),i.element.animate([{transform:"translateX(180%) translateY(10%) scale(0.6)"},{}],180),setTimeout(()=>{i.setStyle("pointerEvents","auto")},180),setTimeout(()=>{a()},5e3)}function v(e,t,n,i,...a){var l=d({style:{padding:"1em",borderRadius:"0.9em",width:`${t}px`,height:`${n}px`,backgroundColor:c.rgb(255,255,255),color:c.rgb(0,0,0),flexDirection:i?"row":"column",alignItems:"center",justifyContent:"space-around",margin:"1em",boxSizing:"border-box",transition:"transform 50ms linear"},display:"flex",child:a,event:{click:e,mousedown:()=>{l.setStyle("transform","scale(0.97)")},mouseup:()=>{l.setStyle("transform","")},mouseenter:()=>{l.setStyle("outline",`2.5px solid ${c.rgb(255,255,255,.5)}`)},mouseleave:()=>{l.setStyle("outline",""),l.setStyle("transform","")}}});return l.element.animate({transform:["perspective(300px) rotateX(-20deg)","perspective(300px) rotateX(15deg)","perspective(300px) rotateX(-10deg)","perspective(300px) rotateX(5deg)","perspective(300px)"]},550),l}m.addChild(y);var i,b,w,C=[];["stun.l.google.com:19302","stun1.l.google.com:19302","stun2.l.google.com:19302","stun3.l.google.com:19302","stun4.l.google.com:19302","stun.ekiga.net","stun.ideasip.com","stun.rixtelecom.se","stun.schlund.de","stun.stunprotocol.org:3478","stun.voiparound.com","stun.voipbuster.com","stun.voipstunt.com","stun.voxgratia.org"].forEach(e=>C.push({urls:["stun:"+e]}));class S{peerConnection=null;dataChannel=null;ondata=null;constructor(){var e=new RTCPeerConnection({iceServers:C});(this.peerConnection=e).addEventListener("datachannel",e=>{this.dataChannel=e.channel,this.dataChannel.addEventListener("message",e=>{this.ondata&&this.ondata(e.data)})}),e.addEventListener("icecandidate",e=>{e.candidate&&console.log("on icecandidate",e.candidate)})}createDataChannel(){var e=this.peerConnection.createDataChannel("dataChannel");(this.dataChannel=e).addEventListener("open",e=>{console.log("dataChannel on open",e)}),e.addEventListener("close",e=>{console.log("dataChannel on close",e)}),e.addEventListener("message",e=>{this.ondata&&this.ondata(e.data)})}getLocalDescription(){return this.peerConnection.localDescription}async linkAsOffer(){var t=this.peerConnection,e=await t.createOffer();return await t.setLocalDescription(e),async e=>{await t.setRemoteDescription(e)}}async linkAsAnswer(e){var t=this.peerConnection;await t.setRemoteDescription(e);e=await t.createAnswer();return await t.setLocalDescription(e),e}send(e){this.dataChannel.send(e)}}function E(){var t=null,n=[],i=0;function e(e){t.addChild(n[e]),e!=i&&n[e].element.animate([{opacity:.5,transform:"scale(0.97)"},{opacity:1}],100),i=e}var a,l,s,l=d({width:"100%",height:"100%",position:"absolute",style:{userSelect:"none",backgroundColor:c.rgb(0,0,0),alignItems:"stretch",justifyContent:"space-between"},display:"flex",assembly:[e=>{function t(){m.element.clientWidth>m.element.clientHeight?e.setStyle("flexFlow","row"):e.setStyle("flexFlow","column-reverse")}window.addEventListener("resize",t),t()}],child:[{style:{backgroundColor:c.rgb(90,90,90,.5),color:c.rgb(255,255,255),alignItems:"center",justifyContent:"space-around"},display:"flex",assembly:[e=>{function t(){m.element.clientWidth>m.element.clientHeight?e.setStyle("flexFlow","column"):e.setStyle("flexFlow","row")}window.addEventListener("resize",t),t()}],child:[{width:"47px",height:"47px",assembly:[u],style:{textAlign:"center",fontSize:"23px",lineHeight:"47px"},event:{click:()=>{e(0)}},child:[{tagName:"i",classList:["fa-solid","fa-box-open"]}]},{width:"47px",height:"47px",assembly:[u],style:{textAlign:"center",fontSize:"23px",lineHeight:"47px"},event:{click:()=>{e(1)}},child:[{tagName:"i",classList:["fa-solid","fa-link"]}]},{width:"47px",height:"47px",assembly:[u],style:{textAlign:"center",fontSize:"23px",lineHeight:"47px",float:"bottom"},event:{click:()=>{e(2)}},child:[{tagName:"i",classList:["fa-solid","fa-user"]}]}]},{style:{flexGrow:1,alignItems:"stretch",justifyContent:"space-between"},display:"flex",assembly:[e=>{function t(){m.element.clientWidth>m.element.clientHeight?e.setStyle("flexFlow","column-reverse"):e.setStyle("flexFlow","column")}window.addEventListener("resize",t),t()}],child:[{display:"flex",text:"????????????",style:{backgroundColor:c.rgb(75,75,75,.5),color:c.rgb(240,240,240),height:"30px"}},{position:"relative",style:{flexGrow:1},assembly:[e=>{t=e}],child:[(l=e=>{n[1]=e},s=null,l=d({width:"100%",height:"100%",position:"absolute",style:{userSelect:"none",backgroundColor:c.rgb(0,0,0),color:c.rgb(255,255,255),alignItems:"stretch",justifyContent:"flex-start",flexFlow:"column",padding:"20px",boxSizing:"border-box",overflow:"hidden auto"},display:"flex",assembly:[l],child:[{text:"??????",style:{fontSize:"3em",marginBottom:"1em"}},{display:"flex",style:{flexWrap:"wrap",justifyContent:"center"},assembly:[e=>{s=e}]}]}),r("????????????","fa-desktop",()=>{}),r("????????????????????????","fa-link",async()=>{var e=new S;e.ondata=e=>{"ping"==e&&x("????????????","?????????????????????ping??????","qTown")};var t,n=await p("????????????????????????","??????????????????????????????\n??????????????????????????????",!0);null!==n&&(n?(await e.linkAsAnswer(JSON.parse(n)),x("????????????????????????","????????????ice?????????","qTown"),setTimeout(async()=>{await f("??????????????????","?????????????????????????????????:\n",JSON.stringify(e.getLocalDescription())),r("??????????????????",null,()=>{e.send("ping")})},3500)):(e.createDataChannel(),t=await e.linkAsOffer(),x("????????????????????????","????????????ice?????????","qTown"),setTimeout(async()=>{await f("??????????????????","?????????????????????????????????:",JSON.stringify(e.getLocalDescription())),n=await p("??????????????????","?????????????????????????????????",!0),await t(JSON.parse(n)),r("??????????????????",null,()=>{e.send("ping")})},3500)))}),l),d({width:"100%",height:"100%",position:"absolute",style:{userSelect:"none",backgroundColor:c.rgb(0,0,0),color:c.rgb(255,255,255),alignItems:"stretch",justifyContent:"space-between",flexFlow:"column",padding:"20px",boxSizing:"border-box"},display:"flex",assembly:[e=>{n[2]=e}],child:[{text:"??????",style:{fontSize:"3em"}},{child:[{text:"????????????"},{text:`?????????: ${h.get("name")}`},{text:`????????????: ${h.get("name")}`}]}]}),(l=e=>{n[0]=e},a=null,l=d({width:"100%",height:"100%",position:"absolute",style:{userSelect:"none",backgroundColor:c.rgb(0,0,0),color:c.rgb(255,255,255),alignItems:"stretch",justifyContent:"flex-start",flexFlow:"column",padding:"20px",boxSizing:"border-box",overflow:"hidden auto"},display:"flex",assembly:[l],child:[{text:"??????",style:{fontSize:"3em",marginBottom:"1em"}},{display:"flex",style:{flexWrap:"wrap",justifyContent:"center"},assembly:[e=>{a=e}]}]}),o("??????????????????","fa-circle-plus",()=>{o("??????","fa-box-open",()=>{})}),l)]}]}]});function o(e,t,n){a.addChild(v(n,130,190,!1,d({tagName:"i",classList:["fa",t],style:{fontSize:"42px",textShadow:`0.2em 0.2em 10px ${c.rgb(0,0,0,.25)}`}}),d({text:e})))}function r(e,t,n){s.addChild(v(n,530,90,!0,d({tagName:"i",classList:["fa",t],style:{fontSize:"42px",textShadow:`0.2em 0.2em 10px ${c.rgb(0,0,0,.25)}`}}),d({text:e})))}m.addChild(l),l.element.animate([{opacity:0,transform:"scale(0.6) translateY(10%)"},{opacity:1}],100)}b=null,w=d({width:"100%",height:"100%",$position:"absolute",style:{userSelect:"none",backgroundColor:c.rgb(0,0,0),alignItems:"center",justifyContent:"center"},display:"flex",child:[{width:"300px",height:"200px",style:{border:"1px white solid",backgroundColor:c.rgb(255,255,255,.05),color:c.rgb(255,255,255),alignItems:"center",justifyContent:"center",flexFlow:"column",lineHeight:"45px"},position$:"static",display:"flex",child:[{text:"???????????????"},{tagName:"input",assembly:[e=>{b=e},u],style:{textAlign:"center"}},{text:"??????",assembly:[u],event:{click:(i=o(()=>{w.element.animate([{opacity:1},{opacity:0,transform:"scale(0.6) translateY(10%)"}],300),setTimeout(()=>{w.remove(),x("?????????","???????????????????????????","qTown"),E()},300)}),async()=>{var e=b.element.value;e?h.setStorageKey(`character-${e}`)?i():await g("????????????",`????????????????????????\n?????????????????? ( ${e} )`,!0)&&(h.set("name",e),h.save(),i()):x("???????????????","?????????????????????","qTown")})}}]}]}),m.addChild(w),async function(){if("serviceWorker"in navigator)try{var e=await navigator.serviceWorker.register("/sw-test/sw.js",{scope:"/sw-test/"});e.installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active")}catch(e){console.error("Registration failed:",e)}else x("????????????Service worker","?????????????????????????????????Service worker ????????????????????????????????????????????????","qTown")}()}();