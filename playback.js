const sources = [
  "http://stream.zeno.fm/ffzk298hx38uv", // sinhala
  "http://stream.zeno.fm/fgrwvmd8u18uv", // english
];

const stimages = [
	"assets/css/images/i1.jpg",
	"assets/css/images/i2.jpg",
]

let playingIndex = 0; // current radio
let playing = true; // stream status
let music = null;

setTimeout(function(){
    loadStream(playingIndex);
}, 1);

function loadStream(index){
  if(playing && music !== null){
	destroyStream();
  }
  music = new Audio();
  music.src = sources[index];
  music.load();
  music.play();
  setimg(index);
  pauseIcon();
  playingIndex = index;
  playing = true;
}

function destroyStream(){
  music.pause();
  music.src = "";
  playIcon();
  playing = false;
}

function forward(){
	destroyStream();
	if(playingIndex<1){
		playingIndex += 1
	} else {
		playingIndex = 0
	};
	loadStream(playingIndex);		
}

function backward(){
	destroyStream();
	if(playingIndex>0){
		playingIndex -= 1
	} else {
		playingIndex = 1
	};
	loadStream(playingIndex);		
}	


function setimg(index){
	document.getElementById("imge").src=stimages[index] ;
}

function changePlayback(){
  if(playing){ destroyStream();  }else{  loadStream(playingIndex);  }
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 32:
      changePlayback();
    break;
  }
};

// icons
function pauseIcon(){
  document.getElementById('playbackButton').className = 'icon fa-pause';
}
function playIcon(){
  document.getElementById('playbackButton').className = 'icon fa-play';
}
