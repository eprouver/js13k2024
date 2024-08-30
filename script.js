{let e,t,l,r,o,n,f,s,a,i,d,u,_,w,h,c,g,v,S,y,V,b,m,x,T,j;f=(n=Object).getPrototypeOf,s=document,i={},d=f(a={isConnected:1}),u=f(f),_=(e,t,l,r)=>(e??(setTimeout(l,r),new Set)).add(t),w=(e,t,r)=>{let o=l;l=t;try{return e(r)}catch(e){return console.error(e),r}finally{l=o}},h=e=>e.filter(e=>e.t?.isConnected),c=t=>o=_(o,t,()=>{for(let e of o)e.l=h(e.l),e.o=h(e.o);o=e},1e3),g={get val(){return l?.add(this),this.i},get oldVal(){return l?.add(this),this.u},set val(l){let r=this;if(l!==r.i){r.i=l;let o=[...r.o=h(r.o)];for(let t of o)V(t.f,t.s,t.t),t.t=e;r.l.length?t=_(t,r,T):r.u=l}}},v=e=>({__proto__:g,i:e,u:e,l:[],o:[]}),S=e=>f(e??0)===g,y=(e,t)=>{let l=new Set,o={f:e},n=r;r=[];let f=w(e,l,t);f=(f??s).nodeType?f:new Text(f);for(let e of l)c(e),e.l.push(o);for(let e of r)e.t=f;return r=n,o.t=f},V=(e,t=v(),l)=>{let o=new Set,n={f:e,s:t};n.t=l??r?.push(n)??a,t.val=w(e,o);for(let e of o)c(e),e.o.push(n);return t},m=t=>new Proxy((l,...r)=>{let[o,...a]=f(r[0]??0)===d?r:[{},...r],_=t?s.createElementNS(t,l):s.createElement(l);for(let[t,r]of n.entries(o)){let o=l=>l?n.getOwnPropertyDescriptor(l,t)??o(f(l)):e,s=l+","+t,a=i[s]??(i[s]=o(f(_))?.set??0),d=a?a.bind(_):_.setAttribute.bind(_,t),w=f(r??0);w===g?y(()=>(d(r.val),_)):w!==u||t.startsWith("on")&&!r.h?d(r):y(()=>(d(r()),_))}return b(_,...a)},{get:(t,l)=>t.bind(e,l)}),x=(e,t)=>t?t!==e&&e.replaceWith(t):e.remove(),T=()=>{let l=[...t].filter(e=>e.i!==e.u);t=e;for(let t of new Set(l.flatMap(e=>e.l=h(e.l))))x(t.t,y(t.f,t.t)),t.t=e;for(let e of l)e.u=e.i},j={add:b=(t,...l)=>{for(let r of l.flat(1/0)){let l=f(r??0),o=l===g?y(()=>r.val):l===u?y(r):r;o!=e&&t.append(o)}return t},_:e=>(e.h=1,e),tags:m(),tagsNS:m,state:v,val:e=>S(e)?e.val:e,oldVal:e=>S(e)?e.oldVal:e,derive:V,hydrate:(e,t)=>x(e,y(t,e))},window.van=j;}
let // ZzFXMicro - Zuper Zmall Zound Zynth - v1.3.1 by Frank Force ~ 1000 bytes
zzfxV=.3,               // volume
zzfxX=new AudioContext, // audio context
zzfx=                   // play sound
(p=1,k=.05,b=220,e=0,r=0,t=.1,q=0,D=1,u=0,y=0,v=0,z=0,l=0,E=0,A=0,F=0,c=0,w=1,m=0,B=0
,N=0)=>{let M=Math,d=2*M.PI,R=44100,G=u*=500*d/R/R,C=b*=(1-k+2*k*M.random(k=[]))*d/R,
g=0,H=0,a=0,n=1,I=0,J=0,f=0,h=N<0?-1:1,x=d*h*N*2/R,L=M.cos(x),Z=M.sin,K=Z(x)/4,O=1+K,
X=-2*L/O,Y=(1-K)/O,P=(1+h*L)/2/O,Q=-(h+L)/O,S=P,T=0,U=0,V=0,W=0;e=R*e+9;m*=R;r*=R;t*=
R;c*=R;y*=500*d/R**3;A*=d/R;v*=d/R;z*=R;l=R*l|0;p*=zzfxV;for(h=e+m+r+t+c|0;a<h;k[a++]
=f*p)++J%(100*F|0)||(f=q?1<q?2<q?3<q?Z(g**3):M.max(M.min(M.tan(g),1),-1):1-(2*g/d%2+2)
%2:1-4*M.abs(M.round(g/d)-g/d):Z(g),f=(l?1-B+B*Z(d*a/l):1)*(f<0?-1:1)*M.abs(f)**D*(a<
e?a/e:a<e+m?1-(a-e)/m*(1-w):a<e+m+r?w:a<h-c?(h-a-c)/t*w:0),f=c?f/2+(c>a?0:(a<h-c?1:(h
-a)/c)*k[a-c|0]/2/p):f,N?f=W=S*T+Q*(T=U)+P*(U=f)-Y*V-X*(V=W):0),x=(b+=u+=y)*M.cos(A*
H++),g+=x+x*E*Z(a**5),n&&++n>z&&(b+=v,C+=v,n=0),!l||++I%l||(b=C,u=G,n=n||1);p=zzfxX.
createBuffer(1,h,R);p.getChannelData(0).set(k);b=zzfxX.createBufferSource();
b.buffer=p;b.connect(zzfxX.destination);b.start()}

a=(notes,center,duration,decaystart,decayduration,interval,volume,waveform,i)=>{
  with(A=new AudioContext)
    with(G=createGain())
      for(i of notes){
        with(O=createOscillator()){
          connect(G),
          G.connect(destination),
          start(i[0]*interval),
          frequency.setValueAtTime(center*1.06**(13-i[1]),i[0]*interval),
          type=waveform,
          gain.setValueAtTime(volume/4,i[0]*interval),
          gain.setTargetAtTime(1e-5,i[0]*interval+decaystart,decayduration),
          stop(i[0]*interval+duration);
        }
     }
}

const {div, canvas, span} = van.tags;
let playing = true;
let pacing = 1000;
let timeouts = [];
let round = 0;
let hint = 0;
let appearanceOf13 = 0.1;


const reducePacing = 0.8; /* reduce the total round time */
const increasePacing = 1.2; /* benefit from increase */
const startingMood = 2;
const helpPacing = 1.2; /* pacing change after time is up */

const warningSound = [1.1,,136,.01,.05,.05,3,2.4,-2,-97,,,,,66,,.11,.76,.02,,-682];
const ouchSound = [,,186,,.2,.06,,,-3,8,,,,,,.1,,.63,.04];

(function() {
  // Configuration
  const n = 100; // Time interval in milliseconds

  // Create and setup canvas
  const noise = canvas({ id: 'noise'});
  van.add(document.body, noise);
  const ctx = noise.getContext('2d');

  function resizeCanvas() {
    noise.width = window.innerWidth;
    noise.height = window.innerHeight;
      generateNoise();
  }

  function generateNoise() {
      const width = noise.width;
      const height = noise.height;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
          const color = Math.random() * 200;
          data[i] = color; // Red
          data[i + 1] = color; // Green
          data[i + 2] = color; // Blue
          data[i + 3] = 30; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
  }

  // Initial setup
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Set interval to regenerate noise
  setInterval(generateNoise, n);
})();

const bgst = [];
const bgs = () => {
  const clicks = () => {
  const total = 1200 + Math.random() * 1000;
  for (let i = 0; i < 14; i++) {
    setTimeout(() => {
      zzfx(
        ...[
          (1 - i / 14) * 0.2,
          0.5,
          1000,
          ,
          ,
          0.01,
          4,
          2,
          2,
          ,
          ,
          ,
          ,
          ,
          ,
          0.1,
          ,
          ,
          ,
        ]
      );
    }, total * Math.sin(i / 10));
  }

  bgst.push(setTimeout(clicks, Math.random() * 10000));
  bgst.push(setTimeout(() => {
    zzfx(...[0.5, 0, 1503, 0.01, 0.2, 0.09, , , , , , , , , 0.2, , 0.52, 0.74]);
  }, Math.random() * 10000));
};

  clicks();

  zzfx(
  ...[
    0.75,
    0.1,
    250,
    0.03,
    3,
    2,
    ,
    1.2,
    ,
    ,
    50,
    0.5,
    ,
    0.3,
    ,
    ,
    0.17,
    0.21,
    1,
    ,
    -1265
  ]
);

let note = 0;
const notes = [350, 370, 410, 390];

const a = () => {
  const up = Math.random() > 0.5 ? 1 : -1;
  zzfx(
    ...[
      0.35,
      0,
      notes[note],
      0.03,
      3,
      2,
      ,
      1.2,
      ,
      ,
      20 * up,
      0.5,
      ,
      0.3,
      ,
      ,
      0.17,
      0.21,
      1,
      ,
      -1265
    ]
  );
  note += 1;
  if (note > notes.length) note = 0;

  bgst.push(setTimeout(a, 10000));
};

bgst.push(setTimeout(a, 10000));

const b = () => {
  zzfx(...[1.25,0,146,,3,3,4,2.9,,-2,,.72,,,,.1,.03,.02,,,-1468]); 
  bgst.push(setTimeout(b, 9000));
};

bgst.push(setTimeout(b, 9000));
}



/* spells */
let numbers = [
  20, // number of tiles
  15, // color or shape
  10 // people injured
];


function seedRandom(seed) {
let m = 0x80000000,
  a = 1103515245,
  c = 12345,
  state = seed;
return function () {
  state = (a * state + c) % m;
  return state / m;
};
}

let incVoices = window.speechSynthesis.getVoices();
let enVoices = window.speechSynthesis.getVoices();
let voice;

(function tryVoices() {
if (enVoices.length == 0) {
incVoices = window.speechSynthesis.getVoices();
enVoices = window.speechSynthesis.getVoices();
  setTimeout(tryVoices, 200);
  return;
}
incVoices = incVoices.filter((voice) => ["sk-SK"].indexOf(voice.lang) > -1);
enVoices = enVoices.filter((voice) => ["en-IN"].indexOf(voice.lang) > -1);
})();

function speak(text, inc = false) {
  window.speechSynthesis.cancel();
  voice = inc ? incVoices[0]: enVoices[1] || enVoices[0];
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "sk";
  utterance.pitch = 0.05;
  utterance.voice = voice;
  window.speechSynthesis.speak(utterance, true);
  return text;
}

function incantation(text) {
const codes = [...new Array(text.length)].map((t, i) => text.charCodeAt(i)).slice(0,5);
const consonants = [
  "b",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "v",
  "y",
  "z",
  "ch",
  "sh",
  "dj",
  ""
];
const vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "oo"];
const rng = seedRandom(codes[1]);

const numSyllables = ~~(rng() * codes.length) + 2;
let word = "";
for (let i = 0; i < numSyllables; i++) {
  const randomConsonant =
    consonants[~~(rng() * codes[i]) % consonants.length];
  const randomVowel = vowels[~~(rng() * codes[i]) % vowels.length];
  word += randomConsonant + randomVowel;
}
return `${word.trim().charAt(0).toUpperCase()}${word.slice(1)}.`;
}

function generateString(n, rng) {
const randomLetter = (end = 0x1123e) => {
  const start = 0x11200;
  let string = 0x11212;
  while (string === 0x11212) {
    string = Math.floor(rng() * (end - start + 1)) + start;
  }

  if (string > 0x1122e) {
    string = randomLetter(0x11220) + String.fromCodePoint(string);
    return string;
  }
  return String.fromCodePoint(string);
};

let result = randomLetter(0x11220);

for (let i = 0; i < n; i++) {
  result += randomLetter();
  if (rng() > 0.9) {
    result += "  ";
    result += randomLetter(0x11220);
  }
}

return result;
}

function generateTextFromArray(seed) {
const rng = seedRandom(seed);
let paragraphs = div();
let paragraph = "";


// Generate paragraphs
const numParagraphs = ~~(rng() * 2) + 2; // Number of paragraphs

for (let i = 0; i < numParagraphs; i++) {
  const paragraphLength = Math.floor(rng() * 8) + 3;
  paragraph = "";
  for (let j = 0; j < paragraphLength; j++) {
    paragraph += generateString(Math.floor(rng() * 5) + 1, rng) + " ";
  }

  paragraphs.appendChild(div({class: 'para'},  paragraph
    .trim()
    .split(" ")
    .map((word) => span({class: 's-word'}, word))));
}

return paragraphs;
}
/* end spells */


/* Towny custom element */
const scale = ["💀", "😱", "😨", "😞", "😟", "😕", "😐", "🙂", "😇"];

const randBet = (min, max) => Math.random() * max + min;
const randStyle = () => {
  const zfont = randBet(2, 30);
  const top = zfont * zfont * 0.06;
  return `font-size: ${zfont }vw; z-index: ${~~(top)}; left: ${randBet(
    -2,
    60
  )}vw; margin-top: ${top}vh; filter:contrast(1.2) brightness(${top / 150 + 0.2}) grayscale(1) hue-rotate(90deg) blur(${
    (25 / zfont) * 1.5
  }px)`;
  return zfont;
};

const femaleNames = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Charlotte',
  'Amelia',
  'Mia',
  'Alice',
  'Evelyn',
  'Abigail',
  'Ella',
  'Scarlett',
  'Grace',
  'Chloe',
  'Camila',
  'Shirley',
  'Layla',
  'Samantha',
  'Sydney'
];

const maleNames = [
  'Liam',
  'Noah',
  'Oliver',
  'Tim',
  'James',
  'William',
  'Benjamin',
  'Lucas',
  'Henry',
  'Alexander',
  'Kyle',
  'Michael',
  'Ethan',
  'Daniel',
  'Jacob',
  'Logan',
  'Jackson',
  'Sebastian',
  'Aiden',
  'Matthew',
  'Samuel'
];

function getGenericEmoji(emoji) {
  const skinToneRegex = /[\u{1F3FB}-\u{1F3FF}]/u; 
  const genderRegex = /[\u{200D}\u{1F9D9}\u{1F9D7}]/u; 

  return emoji
      .replace(skinToneRegex, '') 
      .replace(genderRegex, '');
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

const townys = [...new Array(13)].map(a => {
  const char = randomCharacter();
  const regex = /♂️|👨/g;
  return {
  icon: char, 
  id: `a_${Math.random().toString(36).substr(2, 4)}`, 
  mood: startingMood + ~~(Math.random() * 3),
  name: regex.test(char) ? maleNames.sort(a => Math.random() > 0.5 ? 1 : -1).pop() : femaleNames.sort(a => Math.random() > 0.5 ? 1 : -1).pop()
}
});

const town = div({ class: "town" });
const townList = div({ class: "town-list" });

van.add(document.body, town);

const makeTownies = () => {
  town.innerHTML = "";
  townList.innerHTML = "";
townys.sort((a,b) => b.mood - a.mood).forEach((a) => {
  van.add(town, div({ id: `${a.id}`, class: `face ${a.mood > 0 ? '' : 'hide'}`, style: randStyle() }, div({ class: `character` }, a.icon)));

  const descrip = () => div({id: "par"},
    div({class: "vis"},
      div(a.mood > 0 ? a.icon: '👤'),
      div({class: "mood"}, scale[a.mood] || '💀'),
    ),
    div( div(
      div({class: a.mood > 0 ? '' : 'strike'}, ` ${a.name} `),
      div({class: "range"}, [...new Array(scale.length - 1)].map((n,i) => a.mood > i ? '⚪️' : '⚫️').join('')),
    )),
  );
  const towny = div({ class: "towny" }, descrip());

  towny.onmouseenter = () => {
    [...document.querySelectorAll(`#${a.id}`)].forEach((el) => {
      el.classList.add("highlight");
    });
  };  
  towny.onmouseleave = () => {
    [...document.querySelectorAll(`#${a.id}`)].forEach((el) => {
      el.classList.remove("highlight");
      el.style.zIndex = null;
    });
  };

  a.heal = () => {
    towny.classList.add('heal');
    a.mood += 1;
    towny.style.background = '#ccc';
    zzfx(...[,,527,,.06,.14,,,,,44,.04,.02,,,,,.58,.01]);
    towny.style.animation = '0.25s linear vibrate-1 3';
    towny.innerHTML = '';
    towny.appendChild(descrip());

    setTimeout(() => {
      towny.classList.remove('heal');
      towny.style.background = "";
      towny.style.animation = '';
    }, 1200)
  }

  a.hurt = () => {
    towny.classList.add('hurt');
    a.mood -= 1;
    setTimeout(() => {
      zzfx(...[,0,5500,.15,,.14,1,4,,-8,-300,,,.8,2,.05,,.81]);
      towny.style.animation = a.mood > 0 ? '0.25s linear vibrate-1 3': '';
      towny.style.background = a.mood > 0 ? "red": '#333';
      towny.style.filter = a.mood === 0 ? 'grayscale(1) brightness(0.75)' : '';
      towny.classList.remove('hurt');
      towny.innerHTML = '';
      towny.appendChild(descrip());

      const extra = ["I'm sorry, rest in peace my friend.", 'We will remember you.', "I'll always remember my friend"];

      setTimeout(() => {
        towny.style.background = a.mood === 1 ? 'red' : a.mood === 0 ? '#333' : '';
        towny.style.animation = '';
        if (a.mood <= 0) {
          speak(`We've lost ${a.name}. R.I.P. ${Math.random() > 0.5 ? extra[~~(Math.random() * extra.length)]: ''}`);
          pacing *= 1.1;
          document.getElementById(a.id).classList.add('hide');
        }

        if (townys.filter(a => a.mood > 0).length === 0) {
          ending();
        } else if (a.mood <= 1) {
          reporterfn();
        }

      }, a.mood <= 0? 2000: 750)
    }, 620);


  }

  a.towny = towny;

  van.add(townList, towny);
}); 

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

};

const reposition = () => {
  [...document.getElementsByClassName("face")].forEach((face) => {
    face.style = randStyle();
  });
}


/* spells */
const spells = div({id: "spells", class: "grid__item"});

const startSpell = (callBack) => {
  reposition();
  spells.innerHTML = "";
  spells.classList.add("active");
  let text = document.createElement("div");
  text.classList.add("fate");
  const seed = collected;
  speak("help " + collected);

  text.appendChild(generateTextFromArray(seed));
  spells.appendChild(text);
  setTimeout(() => {
    const spans = [...text.querySelectorAll("span")]
      .filter((span) => span.innerText.trim().length > 0)
      .sort((a, b) => {
        const str = [...new Array(b.innerText.length)]
          .map((t, i) => a.innerText.charCodeAt(i))
          .reduce((acc, num) => acc + num, 0);

        return seedRandom(str)() - 0.5;
      })
      .slice(0, 4);
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add("spoke");
        speak(incantation(span.innerText), true);
        setTimeout(() => {
          zzfx(...[7,,70,.01,.14,.19,1,1.4,-2,17,,,,,32,,.17,.59,.17,12000,347]);
        }, 20)
      }, 1000 * i);
    });

    [...text.querySelectorAll("span")]
      .sort(() => Math.random() - 0.5)
      .map((span, i) => {
        setTimeout(() => {
          span.classList.add("spoke");
        }, 3300 + 20 * i);
        return span;
      })
      .forEach((span, i, arr) => {
        setTimeout(() => {
          span.style.animation = "none";
          span.style.transition = "all 1s ease";
          setTimeout(() => {
            span.style.transform = `translate3d(${
              (Math.random() > 0.5 ? 1 : -1) * 30
            }vw, ${(Math.random() > 0.5 ? 1 : -1) * 30}vh, 0)`;
          }, 100);
          span.style.opacity = 0;
          span.style.pointerEvents = "none";
        }, arr.length * 20 + 4000);
      });
    
    setTimeout(() => {
      zzfx(...[0.0002,0,298,.13,1,,,.7,,-1,-44,.05,.2,,,,.3,,.01,8000]);
      setTimeout(callBack, 1000)
    }, 4600)
  }, 1000);

  setTimeout(() => {
    spells.classList.remove('active');
  }, 8000);
};

let collected = 0;
const hexHolder = div({class: "gameBoard grid__item"});
const hpHolder = div({id: 'hp', class: "score grid__item", turnsLeft: '13'});

const ending = () => {  
  timeouts.concat(bgst).forEach(a => clearTimeout(a));
  window.speechSynthesis.cancel();
  hexHolder.innerHTML = '';
  hpHolder.innerHTML = '';
  hpHolder.setAttribute('turnsLeft', '');
  const survive = townys.filter(a => a.mood > 0).length;
  document.body.onclick = () => location.reload()

  if (survive === 0) {
    // Sad ending
    town.innerHTML = "";
    const msg = 'The 13 have perished.';
    van.add(hexHolder, div({class: 'ending'},msg));
    speak(msg);
  } else {
    // Happy ending
    const msg = `${survive} survived.`;
    van.add(hexHolder, div({class: 'ending'},msg));
    speak(msg);
    hexHolder.classList.add('ending');

    const twinkle = () => {
      a([[4,19],[5,15],[4,7],[5,3],[6,2],[8,19],[9,15],[8,7],[9,3],[10,2],[16,19],[17,15],[16,7],[17,3],[18,2],[20,19],[21,15],[22,14],[20,7],[21,3],[22,2],[28,19],[29,15],[30,14],[28,7],[29,3],[30,2],[32,19],[33,15],[34,14],[32,7],[33,3],[34,2],[40,19],[41,15],[42,14],[41,3],[44,19],[45,15],[46,14],[45,3],[40,2],[42,7],[44,2],[46,7],[7,15],[19,15],[31,15],[6,14],[18,14],[3,9],[15,9],[27,9],[10,14]],1200,.20,0,.2,.2,.1,'sine');
  a([[0,17],[0,14],[0,10],[4,17],[4,14],[4,9],[8,19],[8,14],[8,10],[12,19],[12,15],[12,12],[7,9],[7,14],[7,17],[3,10],[3,14],[3,17]],800,2,1,.25,.6,.1,'sine');
  };
    twinkle();
    [...document.getElementsByClassName('face')].forEach(face => face.style.filter = 'contrast(1.2) brightness(0.7) grayscale(0.5) blur(1px)');
    setInterval(twinkle, 9600);
  }
}


const makeCards = (holder) => {
  round += 1;
  hint += 1.5;
  appearanceOf13 += 0.02;
  const randos = townys.filter(a => a.mood > 0).sort(() => Math.random() - 0.5).slice(0, collected);
  van.add(holder, div({id: "choices"},
  div({id: "rando", class: "c-cho", onclick: () => {
    /* Rando select help collected number */
    pacing *= reducePacing;
    holder.innerHTML = '';
    hpHolder.innerHTML = '';

    startSpell(() => {
      randos.forEach(a => setTimeout(a.heal, ~~(Math.random() * 1500)));

      setTimeout(() => {
        hpHolder.setAttribute('turnsLeft', 13 - round);
        if (round < 13 && townys.filter(a => a.mood > 0).length > 0) {
          makeBoard(hexHolder);
          makeClock(hexHolder,  pacing);
        } else {
          setTimeout(ending, 2000);
        }
      }, 1000);
    }, 1000);
  }},
    div(
      "Random",
    ),
    div({class: "gig"},
      randos.length,
    ),
    div(
      "People",
    ),
    div({class: 'smudge', style: `filter: url(#disp-${~~(Math.random() * icons.length)}) grayscale(1)`}, "✨")
  ),
  ~~(collected / 2) > 0 ? div({id: "picker", class: "c-cho", onclick: () => {
    /* user select */
    pacing *= reducePacing;
    holder.innerHTML = '';
    hpHolder.innerHTML = '';
    let place = ~~(collected / 2);

    van.add(holder, div({class: 'remain'},[...new Array(place)].map(() => '⚪️').join(' ')));

    townys.filter(a => a.mood > 0).forEach(a => {
      a.towny.onclick = () => {
        speak(a.name);
        a.heal();
        place -= 1;
        holder.innerHTML = '';
        van.add(holder, div({class: 'remain'},[...new Array(place)].map(() => '⚪️').join(' ')));
        if (place === 0) {
          holder.innerHTML = '';
          townys.forEach(a => a.towny.onclick = null);

          setTimeout(() => {
            hpHolder.setAttribute('turnsLeft', 13 - round);
            if (round > 0 && townys.filter(a => a.mood > 0).length > 0) {
              makeBoard(hexHolder);
              makeClock(hexHolder,  pacing);
            } else {
              ending();
            }
          }, 1000);
        }
      };
    });

    
  }},
    div(
      "Select",
    ),
    div({class: "gig"},
      ~~(collected / 2),
    ),
    div(
      "People",
    ),
    div({class: 'smudge', style: `filter: url(#disp-${~~(Math.random() * icons.length)}) grayscale(1)`}, "✨")
  ): '',

  round > 3 && round % 2 == 0 ?  div({id: "rando", class: "c-cho", onclick: () => {
    /* Increase help */
    speak('increase', true);
    hint = 2;
    pacing *= increasePacing;
    appearanceOf13 *= 0.9;
    holder.innerHTML = '';
    hpHolder.innerHTML = '';
    setTimeout(() => {
      hpHolder.setAttribute('turnsLeft', 13 - round);
      zzfx(...[,,1623,.01,,.17,,.5,,1,459,.07,,,,,,.84,.02]); 
      makeBoard(hexHolder);
      makeClock(hexHolder,  pacing);
    }, 1000);
  }},
  div(
    "More Time",
  ),
  div({class: "gig"},
    '&'
  ),
  div("More Help"),
  div({class: 'smudge', style: `filter: url(#disp-${~~(Math.random() * icons.length)}) grayscale(1)`}, "✨")
) : '' )) };

const makeHP = () => {
  const pairs = span({id: 'h-pair'}, collected);
  hpHolder.innerHTML = '';
  if (collected == 2) {
    zzfx(...[,,1623,.01,,.17,,.5,,1,459,.07,,,,,,.84,.02]); 
  }
  hpHolder.appendChild(div({id: 'h-arr', class:  collected >= 2 ? 'ok': '',
    onclick: () => {
      if (collected < 2) {
        return;
      }
      zzfx(...ouchSound);
      hexHolder.innerHTML = '';
      hpHolder.innerHTML = `You collected ${collected} pairs.`;
      playing = false;
      timeouts.forEach(a => clearTimeout(a));

      makeCards(hexHolder);
    },
  },'Healing Pairs: ', pairs
  ));
}

const icons = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⚫', '⚪'];

const makeSmudge = () => {
  const holder = document.getElementById("defs");
  holder.innerHTML = '';
  icons.forEach((a,i) => {
    // Create the <filter> element
    const svgNS = "http://www.w3.org/2000/svg";
    const filter = document.createElementNS(svgNS, "filter");
    filter.setAttribute("id", `disp-${i}`);
    
    // Create the <feTurbulence> element
    const feTurbulence = document.createElementNS(svgNS, "feTurbulence");
    feTurbulence.setAttribute("type", "fractalNoise");
    feTurbulence.setAttribute("baseFrequency", "0.012");
    feTurbulence.setAttribute("numOctaves", "4");
    feTurbulence.setAttribute("seed", ~~(seedRandom(round + 2)() * i * 1000));
    
    // Create the <feDisplacementMap> element
    const feDisplacementMap = document.createElementNS(svgNS, "feDisplacementMap");
    feDisplacementMap.setAttribute("in", "SourceGraphic");
    feDisplacementMap.setAttribute("scale", "100");
    
    // Append <feTurbulence> and <feDisplacementMap> to the <filter> element
    filter.appendChild(feTurbulence);
    filter.appendChild(feDisplacementMap);
    
    holder.appendChild(filter);
      })
};

const makeBoard = (holder) => {
  makeSmudge();
  collected = 0;
  makeHP();
  holder.innerHTML = '';
  let selected;

  const size = [9, 11];

  const removeFlips = () => {
    setTimeout(() => {
      [... document.querySelectorAll('.flip')].forEach(a => a.classList.add('hide'));
      holder.style.pointerEvents = 'auto';
    }, 1000);
  };

  van.add(
    holder,
    div(
      { class: "hex-holder" },
      [...new Array(size[1])].map((a, col) =>
        div(
          { class: "column" },
          [...new Array(Math.min(col % 2 == 1 ? size[0] : size[0] - 1))].map((a, i) => {
            return div({
              class: `hex hide`,
              onclick: (e) => {
                holder.style.pointerEvents = 'none';
                const index = ~~(Math.random() * icons.length);
                let cont = Math.random() < appearanceOf13 && round > 0 ? "13" : icons[index];
                if (e.target.children.length === 0) {
                  e.target.appendChild(
                    div({ class: "cont", style: `opacity: ${(Math.max(0, (6 - hint)/15) )}` }, div({style: cont === '13'? '' : `transform: scale(1); filter: url(#disp-${index})`},cont))
                  );
                } else {
                  cont = e.target.children[0].innerText;
                }

                setTimeout(
                  () => {
                    if (cont === '13') {
                      speak('chekona.', true)
                      setTimeout(() => { 
                        /* ouch */
                        zzfx(...ouchSound);
                        townys.filter(a => a.mood > 0).sort(() => Math.random() - 0.5).slice(0, ~~(Math.random() * 3) + 1).forEach(a => timeouts.push(setTimeout(a.hurt, ~~(Math.random() * 600))));
                        e.target.classList.add('hide');
                        holder.style.pointerEvents = 'auto';
                      }, 700);
                    } else if (!selected) {
                      /* first select */
                      selected = cont;
                      holder.style.pointerEvents = 'auto';
                    } else if (selected === cont) {
                      /* match */
                      speak("match");
                      collected += 1;
                      makeHP();
                      selected = null;
                      removeFlips();

                    } else {
                      /* No match */
                      setTimeout(() => {
                        selected = null;
                        holder.style.pointerEvents = 'auto';
                      [... document.querySelectorAll('.flip')].forEach(a => a.classList.remove('flip'));
                      }, 1000);
                    }

                    zzfx(
                      ...[0.3, 0, 125, , , 0, 1, , , , , , , 0, , , , 0, 0.02]
                    ),
                  500
                  }
                );
                e.target.classList.toggle("flip");
              }
            });
          })
        )
      )
    )
  );

  const hide = size[0] * size[1] * 0.5;
  let hidden = [... document.querySelectorAll('.hex.hide')].sort(() => Math.random() - 0.5);
  for(let i = 0; i < hide; i++){
    setTimeout(() => {
      hidden = hidden.sort(() => Math.random() - 0.5);
      hidden.pop().classList.remove('hide');
    }, i* 50)
  }
};

const makeClock = (holder, pace = 1300) => {
  playing = true;
  let size = 43;
  const turnLength = pace * 2;
  timeouts = [];

  for (let i = 0; i < 3; i++) {
      timeouts.push(setTimeout(() => {
          const bird = div({ class: "ar-bird" });
          const arrow = div({ class: "cl-arrow" }, bird);

          van.add(holder, arrow);
          let arPos = -90;

          const moveBird = () => {
            if (!playing) return;
              setTimeout(() => {
                  bird.style.animation = "vibrate-1 0.35s 1";
              }, turnLength - pace); /* bird starts jittering */

              arPos -= Math.random() * 30;

              bird.style.animation = "none";
              arrow.style.transform = `translate(
                  calc(cos(${arPos}deg) * ${-2 + size}vmin), 
                  calc(sin(${arPos}deg) * ${-5 + size}vmin)
              ) rotate(${arPos}deg)`;

              if (arPos < -400 && arPos > -450) {
                zzfx(...warningSound);
                
              }

              if (arPos < -450) {
                timeouts.forEach(a => clearTimeout(a));
                playing = false;
                hexHolder.innerHTML = '';
                speak('time is up');
                pacing *= helpPacing;
                const hurters = 7 + ~~(Math.random() * 5);
                townys.filter(a => a.mood > 0).sort(() => Math.random() - 0.5).slice(0, hurters).forEach(a => setTimeout(a.hurt, ~~(Math.random() * 600)));
                zzfx(...[0.0002,0,298,.13,1,,,.7,,-1,-44,.05,.2,,,,.3,,.01,8000]);
                [...document.querySelectorAll('.cl-arrow')].forEach(a => a.remove());
                [...document.querySelectorAll('.hex')].forEach(a => {
                  setTimeout(() => {
                    a.classList.add('hide');
                  }, ~~(Math.random() * 1000));
                });

                setTimeout(() => {
                  makeBoard(hexHolder);
                  makeClock(hexHolder,  pacing);
                }, 1500);
              }

              if (playing) {
                timeouts.push(setTimeout(moveBird, Math.random() * turnLength + pace));
              }
          };

          moveBird();
      }, i * pace));
  }
};


const instruction = () => {
  document.body.style.pointerEvents = 'none';
  spells.innerHTML = '';
  spells.classList.add('active');

  const instructions = [
    'Flip the hexagons and make at least two pairs to heal our people.',
    'Finding "13" causes harm.',
    'Click "Healing Pairs" before a 🕷️ makes it back up top.',
    "Survive 13 quick rounds."
  ];

  const divs = instructions.map(text => div({ class: "inst" }, text));
  van.add(spells, ...divs);

  const [oneDiv, twoDiv, threeDiv, fourDiv] = divs;

  const speakAndActivate = (div, text, delay) => {
    setTimeout(() => {
      div.classList.add('active');
      speak(text);
    }, delay);
  };

  speakAndActivate(oneDiv, instructions[0], 0);
  setTimeout(() => makeBoard(hexHolder), 3000);
  speakAndActivate(twoDiv, instructions[1], 4000);
  setTimeout(() => zzfx(...ouchSound), 4600);
  speakAndActivate(threeDiv, instructions[2], 6400);

  [...new Array(3)].forEach((_, i) => {
    setTimeout(() => zzfx(...warningSound), 7000 + i * 400);
  });

  speakAndActivate(fourDiv, instructions[3], 10200);

  setTimeout(() => {
    spells.innerHTML = '';
    spells.classList.remove('active');
    makeClock(hexHolder, pacing);
    zzfx(...[0.0002, 0, 298, .13, 1, , , .7, , -1, -44, .05, .2, , , , .3, , .01, 8000]);
    document.body.style.pointerEvents = 'auto';
  }, 13000);
};



  const houseLine = div({class: "house-line"});
  houseLine.innerHTML = [... new Array(13)].map((a,i) => {
    const y = Math.random() * 20
    return `<svg style="position: absolute; left: 1vw; top: -10vh; transform: translate(${Math.random() * 83}vw, ${y}vh) scale(${0.5 + y/20}); z-index: ${~~(y * 200)}" viewbox="0 0 100 100">
  <path stroke="#222" stroke-width="4" d="m16 44 5-2"/>
  <path fill="#999" stroke="#222" d="M18 72V39l15-18 22 23 35 1-1 27H18z" style="vector-effect:non-scaling-stroke"/>
  <path  stroke="#222" stroke-width="4" d="M33 21 14 44"/><path fill="#4c4c4c" stroke="#303030" stroke-width="3" d="m35 21 21 23 35-1-22-21-34-1z"/>
  <path fill="#303030" d="M29 46h13v26H29zM63 53h10v9H63z"/></svg>`}).join('');
  const sortHouses = [...houseLine.children].sort((a,b) => parseInt(a.style.zIndex) - parseInt(b.style.zIndex));
  houseLine.innerHTML = '';
  sortHouses.forEach(a => houseLine.appendChild(a));
  const land = div({class: "land"});
  land.innerHTML = `<svg viewBox="0 0 1440 320"><path fill="#474747" d="m0 192 60 5c60 6 180 16 300 16s240-10 360-21 240-21 360-21 240 10 300 16l60 5v128H0Z"/></svg>`;

  const starter = div({class: "starter"},
    div({class: "title"}, "The Lonely 13."),
    div({class: "go"}, "Start"),
    land,
    div({class: "img"}, houseLine),
  );

  starter.onclick = () => {
    bgs();
    makeTownies();
    document.body.style.pointerEvents = 'none';
    starter.classList.add('remove');
    setTimeout(() => {
      instruction();
    }, 1600);
  }

  /* board */

van.add(document.body, div({class: "board"},
  hpHolder,

  div({class: "townList grid__item"}, townList
  ),
  hexHolder
  ,
  spells,
), starter);

let accepting;
const reporterfn = () => {
  if (accepting) {
    setTimeout(() => {
      clearTimeout(accepting);
      accepting = null;
    }, 2000);
    return;
  }
  
  accepting = setTimeout(() => {
  const focus = townys.filter(a => a.mood > 0).sort((a, b) => a.mood - b.mood).slice(0, 3).sort(() => Math.random() - 0.5)[0];
  const reporter = document.getElementById(focus.id);
  if (!reporter) return;
  const ostyle = {};
  ostyle.transform = reporter.style.transform;
  ostyle.zIndex = reporter.style.zIndex;
  ostyle.filter = reporter.style.filter;
  ostyle.marginTop = reporter.style.marginTop;
  ostyle.left = reporter.style.left;
  ostyle.fontSize = reporter.style.fontSize;

reporter.style.transform = "translateY(120vh) scale(3.2)";
reporter.style.zIndex = "99999999";
reporter.style.filter = "blur(0px)";
reporter.style.pointerEvents  = 'none';

setTimeout(() => {
  reporter.classList.add('reporter');
  reporter.style = `font-size: 5vw;
    z-index: 9999;
    left: 1.5em;
    margin-top: 0;
    filter: blur(0px);
    transition: all 0.3s ease;
    transform: translateY(78vh) scale(4.2);`;

    reporter.setAttribute('data-speak', `I'm worried about ${focus.name}`);


  setTimeout(() => {
    // every key of ostyle return to the original value
    reporter.setAttribute('speak', '');
    reporter.setAttribute('data-speak', '');
    reporter.classList.remove('reporter');
    reporter.style.transform = ostyle.transform;
    reporter.style.zIndex = ostyle.zIndex;
    reporter.style.filter = ostyle.filter;
    reporter.style.marginTop = ostyle.marginTop;
    reporter.style.left = ostyle.left;
    reporter.style.fontSize = ostyle.fontSize;
  }, 2000);
});
return reporter;
});
}

 const hideStarter = () => {
  document.querySelector('.starter').remove();
 }

 setInterval( reposition, 100000);

