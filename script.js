{let e,t,l,r,o,n,f,s,a,i,d,u,_,w,h,c,g,v,S,y,V,b,m,x,T,j;f=(n=Object).getPrototypeOf,s=document,i={},d=f(a={isConnected:1}),u=f(f),_=(e,t,l,r)=>(e??(setTimeout(l,r),new Set)).add(t),w=(e,t,r)=>{let o=l;l=t;try{return e(r)}catch(e){return console.error(e),r}finally{l=o}},h=e=>e.filter(e=>e.t?.isConnected),c=t=>o=_(o,t,()=>{for(let e of o)e.l=h(e.l),e.o=h(e.o);o=e},1e3),g={get val(){return l?.add(this),this.i},get oldVal(){return l?.add(this),this.u},set val(l){let r=this;if(l!==r.i){r.i=l;let o=[...r.o=h(r.o)];for(let t of o)V(t.f,t.s,t.t),t.t=e;r.l.length?t=_(t,r,T):r.u=l}}},v=e=>({__proto__:g,i:e,u:e,l:[],o:[]}),S=e=>f(e??0)===g,y=(e,t)=>{let l=new Set,o={f:e},n=r;r=[];let f=w(e,l,t);f=(f??s).nodeType?f:new Text(f);for(let e of l)c(e),e.l.push(o);for(let e of r)e.t=f;return r=n,o.t=f},V=(e,t=v(),l)=>{let o=new Set,n={f:e,s:t};n.t=l??r?.push(n)??a,t.val=w(e,o);for(let e of o)c(e),e.o.push(n);return t},m=t=>new Proxy((l,...r)=>{let[o,...a]=f(r[0]??0)===d?r:[{},...r],_=t?s.createElementNS(t,l):s.createElement(l);for(let[t,r]of n.entries(o)){let o=l=>l?n.getOwnPropertyDescriptor(l,t)??o(f(l)):e,s=l+","+t,a=i[s]??(i[s]=o(f(_))?.set??0),d=a?a.bind(_):_.setAttribute.bind(_,t),w=f(r??0);w===g?y(()=>(d(r.val),_)):w!==u||t.startsWith("on")&&!r.h?d(r):y(()=>(d(r()),_))}return b(_,...a)},{get:(t,l)=>t.bind(e,l)}),x=(e,t)=>t?t!==e&&e.replaceWith(t):e.remove(),T=()=>{let l=[...t].filter(e=>e.i!==e.u);t=e;for(let t of new Set(l.flatMap(e=>e.l=h(e.l))))x(t.t,y(t.f,t.t)),t.t=e;for(let e of l)e.u=e.i},j={add:b=(t,...l)=>{for(let r of l.flat(1/0)){let l=f(r??0),o=l===g?y(()=>r.val):l===u?y(r):r;o!=e&&t.append(o)}return t},_:e=>(e.h=1,e),tags:m(),tagsNS:m,state:v,val:e=>S(e)?e.val:e,oldVal:e=>S(e)?e.oldVal:e,derive:V,hydrate:(e,t)=>x(e,y(t,e))},window.van=j;}
const {div} = van.tags;


const randBet = (min, max) => Math.random() * max + min;
const randStyle = () => {
  const zfont = randBet(2, 30);
  const top = zfont * zfont * 0.07;
  return `font-size: ${zfont }vw; z-index: ${Math.floor(top)}; left: ${randBet(
    -2,
    60
  )}vw; margin-top: ${top}vh; filter:contrast(1.2) brightness(0.5) grayscale(0.95) hue-rotate(90deg) blur(${
    (25 / zfont) * 2
  }px)   `;
};

const randomCharacter = () => {
  let sN = [
    "👷🏻‍♂️",
    "👨🏿‍💼",
    "👨🏻‍🔧",
    "👨🏾‍⚕️",
    "👨🏼‍🌾",
    "👨🏽‍⚖️",
    "👨🏾‍🔬",
    "👮🏽‍♂️",
    "👩🏽‍🍳",
    "🧕🏼",
    "👨🏾‍🚒",
    "👩🏽‍🎓",
    "👩🏼‍🏭",
    "👩🏻‍💼",
  ];

  const sample = (arr) => {
    const len = arr == null ? 0 : arr.length;
    return len ? arr[Math.floor(Math.random() * len)] : undefined;
  };

  (stMod = ["\u{1f3fb}", "\u{1f3fc}", "\u{1f3fd}", "\u{1f3fe}", "\u{1f3ff}"]),
    (gMod = ["👩", "👨"]);
  (gMod2 = ["♂️", "♀️"]),
    (fsn = new RegExp("\ud83c[\udffb-\udfff]", "g")),
    (fg = new RegExp(gMod.join("|"), "g")),
    (fg2 = new RegExp(gMod2.join("|"), "g")),
    (rst = (string) => string.replace(fsn, sample(stMod))),
    (randGender = (string) =>
      string.replace(fg, sample(gMod)).replace(fg2, sample(gMod2)));
  return sample(sN.map((f) => rst(f)).map((f) => randGender(f)));
};

const townys = [...new Array(13)].map(a => ({ icon: randomCharacter()}));


van.add(
  document.body,
  div({ class: "town" }, townys.map((a, i) =>
    div(
      { class: "face", style: randStyle() },
      div({ class: `character` }, a.icon)
    )
  ))

);

setInterval(() => {
  const face = [...document.getElementsByClassName("face")].sort(
    () => Math.random() - 0.5
  )[0].children[0];

  face.style.transform = "rotate(-3deg)";
  setTimeout(() => {
    face.style.transform = "rotate(0deg)";

    setTimeout(() => {
      face.style.transform = "rotate(3deg)";

      setTimeout(() => {
        face.style.transform = "rotate(0deg)";
        setTimeout(() => {
          face.style.transform = "rotate(-3deg)";
        }, 1500);
      }, 1500);
    }, 1500);
  }, 1500);
}, 80);

const reposition = () => {
  [...document.getElementsByClassName("face")].forEach((face) => {
    face.style = randStyle();
  });

  setTimeout(() => {
    [...document.getElementsByClassName("face")].forEach((face) => {
      face.style = randStyle();
    });
  }, 1000);
  
}

setInterval( reposition, 150000);



/* board */
van.add(document.body, div({class: "board"},
  div({class: "div1 grid__item"}
  ),
  div({class: "div2 grid__item"}, "hello"
  ),
  div({class: "div3 grid__item"}
  ),
))