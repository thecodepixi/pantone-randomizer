const COLORS = [   {"hex": "#9BD3DD", "name": "629 C" },
{"hex": "#E0E27C", "name": "586 C" },
{"hex": "#D1350F", "name": "2349 XGC"},
{"hex": "#FFA06A", "name": "1565 C" },
{"hex": "#FCE300", "name": "102 C" },
{"hex": "#FF6D70", "name": "16-1663 TSX"},
{"hex": "#52D2BC", "name": "929 U"},
{"hex": "#29504D", "name": "2466 C" },
{"hex": "#13322B", "name": "627 C" },
{"hex": "#86C8BC", "name": "564 C" },
{"hex": "#6558B1", "name": "2102 C" },
{"hex": "#21366E", "name": "3597 CP"},
{"hex": "#B6B8DC", "name": "7444 C" },
{"hex": "#E93CAC", "name": "232 C" },
{"hex": "#5BC500", "name": "2287 C" },
{"hex": "#DBE442", "name": "380 C" },
{"hex": "#F93822", "name": "Bright Red C" },
{"hex": "#FE5000", "name": "Orange 021 C" },
{"hex": "#DA6253", "name": "2448 C" },
{"hex": "#8A2A2B", "name": "7623 C" },
{"hex": "#7C4D3A", "name": "4705 C" },
{"hex": "#F9423A", "name": "Warm Red C" },
{"hex": "#3E332E", "name": "2479 C"},
{"hex": "#F06400", "name": "3564 C" },
{"hex": "#FF6900", "name": "1505 C" },
{"hex": "#FF8A3D", "name": "2025 C" },
{"hex": "#FFA300", "name": "137 C" },
{"hex": "#EFC06E", "name": "2008 C" },
{"hex": "#FEAD77", "name": "7410 C" },
{"hex": "#BE4D00", "name": "718 C" },
{"hex": "#FFD700", "name": "Yellow 012 C" },
{"hex": "#F6EB61", "name": "100 C" },
{"hex": "#FED880", "name": "2005 C" },
{"hex": "#BABC16", "name": "7744 C" },
{"hex": "#F3E500", "name": "3945 C" },
{"hex": "#F4DA40", "name": "7404 C" },
{"hex": "#F3DD6D", "name": "127 C" },
{"hex": "#E1E000", "name": "396 C" },
{"hex": "#008330", "name": "3522 C" },
{"hex": "#56C271", "name": "2256 C" },
{"hex": "#497B55", "name": "2408 C" },
{"hex": "#79D97C", "name": "2268 C" },
{"hex": "#A2E4B8", "name": "351 C" },
{"hex": "#6CC24A", "name": "360 C" },
{"hex": "#97D700", "name": "375 C" },
{"hex": "#92BCB3", "name": "2455 C" },
{"hex": "#55AF92", "name": "2459 C" },
{"hex": "#A1D6CA", "name": "565 C" },
{"hex": "#7F9C90", "name": "5565 C" },
{"hex": "#B1E4E3", "name": "317 C" },
{"hex": "#249E6B", "name": "2417 C" },
{"hex": "#77C19A", "name": "2247 C" },
{"hex": "#00B388", "name": "339 C" },
{"hex": "#154734", "name": "3435 C" },
{"hex": "#3CDBC0", "name": "333 C" },
{"hex": "#00573F", "name": "7484 C" },
{"hex": "#007DBA", "name": "7461 C" },
{"hex": "#68D2DF", "name": "3105 C" },
{"hex": "#2C9199", "name": "2236 C" },
{"hex": "#005670", "name": "7708 C" },
{"hex": "#072B31", "name": "546 C" },
]

const BUTTON = document.getElementById('button');
const COLORWINDOW = document.getElementById('color-window');
const COLORNAME = document.getElementById('color-name')

function changeColor(){
BUTTON.addEventListener("click", function(){
    var randomColor = COLORS[Math.round(Math.random()*COLORS.length)];
 
    COLORWINDOW.style.backgroundColor = randomColor["hex"];
    COLORNAME.innerText = `PANTONE ${randomColor["name"]}`;

 })
}

changeColor();
