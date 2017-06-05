var sources = ['audio/c.mp3','audio/cis.mp3','audio/d.mp3','audio/es.mp3','audio/e.mp3','audio/f.mp3','audio/fis.mp3','audio/g.mp3','audio/gis.mp3','audio/a.mp3','audio/b.mp3','audio/h.mp3','audio/c1.mp3','audio/cis1.mp3','audio/d1.mp3','audio/es1.mp3','audio/e1.mp3','audio/f1.mp3','audio/fis1.mp3','audio/g1.mp3','audio/gis1.mp3','audio/a1.mp3','audio/b1.mp3','audio/h1.mp3','audio/c2.mp3'];

var numberClones = 3; 
var soundClones = [];
for (i = 0; i < numberClones; i ++) 
    soundClones.push([]);


for (i = 0; i < sources.length; i++)
    for (j = 0; j < numberClones; j ++)
        soundClones[j].push(new Audio(sources[i]));

var player = []; 

for (i = 0; i < sources.length; i++)
    player[i] = 0; 

function playKey(key) {
    //visualiser();
    soundClones[player[key]][key].play();
    ++ player[key]; 
    if (player[key] >= numberClones)
        player[key] = 0;
}

//playSong function here

var hbd = [7,7,9,7,12,11,7,7,9,7,14,12,7,7,19,16,12,11,9,17,17,16,12,14,12];
var bombay = [16,17,19,17,16,12,13,12,10,12,13,16,12,13,17,16,17,16,17,16,17,16,17,16,17,19,17,16,13,12,12,16,17,19,17,16,12,13,12,10,12,13,16,12,13,17,16,17,16,17,16,17,16,17,16,17,19,17,16,13,12,12];

var twinkle = [0,0,7,7,9,9,7,5,5,4,4,2,2,0,7,7,5,5,4,4,2,7,7,5,5,4,4,2,0,0,7,7,9,9,7,5,5,4,4,2,2,0];

var ode = [16,16,17,19,19,17,16,14,12,12,14,16,16,14,14,16,16,17,19,19,17,16,14,12,12,14,16,14,12,12,14,14,16,12,14,16,17,16,12,14,16,17,16,14,12,14,7,16,16,17,19,19,17,16,14,12,12,14,16,14,12];

var delayMil = 1000;

function play(key){
       if(key==0){
        document.getElementById("white1 c1").className = "whitechanged";
        setTimeout(function() {
            document.getElementById("white1 c1").className = "white1 c1";}, delayMillis);
        console.log(0);
        playKey(0);
    }
    
    else if(key==1){
    document.getElementById("black1 cs").className = "blackchanged cs";
    setTimeout(function() {
        document.getElementById("black1 cs").className = "black1 cs";}, delayMillis);
        console.log(1);
    playKey(1);}
    
    else if(key==2){
        document.getElementById("white1 d").className = "whitechanged d";
        setTimeout(function() {
            document.getElementById("white1 d").className = "white1 d";}, delayMillis);
        console.log(2);
        playKey(2);}
    
    else if(key==3){
    document.getElementById("black1 ds").className = "blackchanged ds";
    setTimeout(function() {
        document.getElementById("black1 ds").className = "black1 ds";}, delayMillis);
        console.log(3);
    playKey(3);}
    
    else if(key==4){
        document.getElementById("white1 e").className = "whitechanged e";
        setTimeout(function() {
            document.getElementById("white1 e").className = "white1 e";}, delayMillis);
        console.log(4);
        playKey(4);}
    
    else if(key==5){
        document.getElementById("white1 f").className = "whitechanged f";
        setTimeout(function() {
            document.getElementById("white1 f").className = "white1 f";}, delayMillis);
        console.log(5);
        playKey(5);}
    
    else if(key==6){
        document.getElementById("black1 fs").className = "blackchanged fs";
        setTimeout(function() {
            document.getElementById("black1 fs").className = "black1 fs";}, delayMillis);
        console.log(6);
        playKey(6);}
    
    else if(key==7){
        document.getElementById("white1 g").className = "whitechanged g";
        setTimeout(function() {
            document.getElementById("white1 g").className = "white1 g";}, delayMillis);
        console.log(7);
        playKey(7);}
    
    else if(key==8){
        document.getElementById("black1 gs").className = "blackchanged gs";
        setTimeout(function() {
            document.getElementById("black1 gs").className = "black1 gs";}, delayMillis);
        console.log(8);
        playKey(8);}
    
    else if(key==9){
        document.getElementById("white1 a").className = "whitechanged a";
        setTimeout(function() {
            document.getElementById("white1 a").className = "white1 a";}, delayMillis);
        console.log(9);
        playKey(9);}
    
    else if(key==10){
        document.getElementById("black1 as").className = "blackchanged as";
        setTimeout(function() {
            document.getElementById("black1 as").className = "black1 gs";}, delayMillis);
        console.log(10);
        playKey(10);}
    
     else if(key==11){
        document.getElementById("white1 b1").className = "whitechanged b1";
        setTimeout(function() {
            document.getElementById("white1 b1").className = "white1 b1";}, delayMillis);
         console.log(11);
        playKey(11);}
    //k
    else if(key==12){
        document.getElementById("white2 c2").className = "whitechanged2 c2";
        setTimeout(function() {
            document.getElementById("white2 c2").className = "white2 c2";}, delayMillis);
        console.log(12);
        playKey(12);}
    
    else if(key==13){
        document.getElementById("black2 cs").className = "blackchanged2 cs";
        setTimeout(function() {
            document.getElementById("black2 cs").className = "black2 cs";}, delayMillis);
        console.log(13);
        playKey(13);}
    
    else if(key==14){
        document.getElementById("white2 d").className = "whitechanged2 d";
        setTimeout(function() {
            document.getElementById("white2 d").className = "white2 d";}, delayMillis);
        console.log(14);
        playKey(14);}
    
     else if(key==15){
        document.getElementById("black2 ds").className = "blackchanged2 ds";
        setTimeout(function() {
            document.getElementById("black2 ds").className = "black2 ds";}, delayMillis);
         console.log(15);
        playKey(15);}
    
    else if(key==16){
        document.getElementById("white2 e").className = "whitechanged2 e";
        setTimeout(function() {
            document.getElementById("white2 e").className = "white2 e";}, delayMillis);
        console.log(16);
        playKey(16);}
    
    else if(key==17){
        document.getElementById("white2 f").className = "whitechanged2 f";
        setTimeout(function() {
            document.getElementById("white2 f").className = "white2 f";}, delayMillis);
        console.log(17);
        playKey(17);}
    
    else if(key==18){
        document.getElementById("black2 fs").className = "blackchanged2 fs";
        setTimeout(function() {
            document.getElementById("black2 fs").className = "black2 fs";}, delayMillis);
        console.log(18);
        playKey(18);}
    
    
     else if(key==19){
        document.getElementById("white2 g").className = "whitechanged2 g";
        setTimeout(function() {
            document.getElementById("white2 g").className = "white2 g";}, delayMillis);
         console.log(19);
        playKey(19);}
    
    else if(key==20){
        document.getElementById("black2 gs").className = "blackchanged2 gs";
        setTimeout(function() {
            document.getElementById("black2 gs").className = "black2 gs";}, delayMillis);
        console.log(20);
        playKey(20);}
    
     else if(key==21){
        document.getElementById("white2 a").className = "whitechanged2 a";
        setTimeout(function() {
            document.getElementById("white2 a").className = "white2 a";}, delayMillis);
         console.log(21);
        playKey(21);}
    
    else if(key==22){
        document.getElementById("black2 as").className = "blackchanged2 as";
        setTimeout(function() {
            document.getElementById("black2 as").className = "black2 as";}, delayMillis);
        console.log(22);
        playKey(22);}
    
    else if(key==23){
        document.getElementById("white2 b2").className = "whitechanged2 b2";
        setTimeout(function() {
            document.getElementById("white2 b2").className = "white2 b2";}, delayMillis);
        console.log(23);
        playKey(23);}
    
     else if(key==24){
        document.getElementById("white2 c3").className = "whitechanged2 c3";
        setTimeout(function() {
            document.getElementById("white2 c3").className = "white2 c3";}, delayMillis);
         console.log(24);
        playKey(24);}
 }

var i=0;

function playSong(list,time){
    var i=0;
    (function loop() {
    play(list[i]);
    if (++i < list.length) {
        setTimeout(loop, time); 
    }
    })(); 
}
var delayMillis = 100; //1 second

document.addEventListener("keydown", function(event) {
    
    if((event.keyCode==97)||(event.keyCode==65)){
        document.getElementById("white1 c1").className = "whitechanged";
        setTimeout(function() {
            document.getElementById("white1 c1").className = "white1 c1";}, delayMillis);
        console.log(0);
        playKey(0);
    }
    
    else if(event.keyCode==87){
    document.getElementById("black1 cs").className = "blackchanged cs";
    setTimeout(function() {
        document.getElementById("black1 cs").className = "black1 cs";}, delayMillis);
        console.log(1);
    playKey(1);}
    
    else if((event.keyCode==83)){
        document.getElementById("white1 d").className = "whitechanged d";
        setTimeout(function() {
            document.getElementById("white1 d").className = "white1 d";}, delayMillis);
        console.log(2);
        playKey(2);}
    
    else if(event.keyCode==69){
    document.getElementById("black1 ds").className = "blackchanged ds";
    setTimeout(function() {
        document.getElementById("black1 ds").className = "black1 ds";}, delayMillis);
        console.log(3);
    playKey(3);}
    
    else if((event.keyCode==68)){
        document.getElementById("white1 e").className = "whitechanged e";
        setTimeout(function() {
            document.getElementById("white1 e").className = "white1 e";}, delayMillis);
        console.log(4);
        playKey(4);}
    
    else if((event.keyCode==70)){
        document.getElementById("white1 f").className = "whitechanged f";
        setTimeout(function() {
            document.getElementById("white1 f").className = "white1 f";}, delayMillis);
        console.log(5);
        playKey(5);}
    
    else if(event.keyCode==84){
        document.getElementById("black1 fs").className = "blackchanged fs";
        setTimeout(function() {
            document.getElementById("black1 fs").className = "black1 fs";}, delayMillis);
        console.log(6);
        playKey(6);}
    
    else if((event.keyCode==71)){
        document.getElementById("white1 g").className = "whitechanged g";
        setTimeout(function() {
            document.getElementById("white1 g").className = "white1 g";}, delayMillis);
        console.log(7);
        playKey(7);}
    
    else if(event.keyCode==89){
        document.getElementById("black1 gs").className = "blackchanged gs";
        setTimeout(function() {
            document.getElementById("black1 gs").className = "black1 gs";}, delayMillis);
        console.log(8);
        playKey(8);}
    
    else if((event.keyCode==72)){
        document.getElementById("white1 a").className = "whitechanged a";
        setTimeout(function() {
            document.getElementById("white1 a").className = "white1 a";}, delayMillis);
        console.log(9);
        playKey(9);}
    
    else if(event.keyCode==85){
        document.getElementById("black1 as").className = "blackchanged as";
        setTimeout(function() {
            document.getElementById("black1 as").className = "black1 gs";}, delayMillis);
        console.log(10);
        playKey(10);}
    
     else if((event.keyCode==74)){
        document.getElementById("white1 b1").className = "whitechanged b1";
        setTimeout(function() {
            document.getElementById("white1 b1").className = "white1 b1";}, delayMillis);
         console.log(11);
        playKey(11);}
    //k
    else if((event.keyCode==75)){
        document.getElementById("white2 c2").className = "whitechanged2 c2";
        setTimeout(function() {
            document.getElementById("white2 c2").className = "white2 c2";}, delayMillis);
        console.log(12);
        playKey(12);}
    
    else if((event.keyCode==79)){
        document.getElementById("black2 cs").className = "blackchanged2 cs";
        setTimeout(function() {
            document.getElementById("black2 cs").className = "black2 cs";}, delayMillis);
        console.log(13);
        playKey(13);}
    
    else if((event.keyCode==76)){
        document.getElementById("white2 d").className = "whitechanged2 d";
        setTimeout(function() {
            document.getElementById("white2 d").className = "white2 d";}, delayMillis);
        console.log(14);
        playKey(14);}
    
     else if((event.keyCode==80)){
        document.getElementById("black2 ds").className = "blackchanged2 ds";
        setTimeout(function() {
            document.getElementById("black2 ds").className = "black2 ds";}, delayMillis);
         console.log(15);
        playKey(15);}
    
    else if((event.keyCode==186)){
        document.getElementById("white2 e").className = "whitechanged2 e";
        setTimeout(function() {
            document.getElementById("white2 e").className = "white2 e";}, delayMillis);
        console.log(16);
        playKey(16);}
    
    else if((event.keyCode==222)){
        document.getElementById("white2 f").className = "whitechanged2 f";
        setTimeout(function() {
            document.getElementById("white2 f").className = "white2 f";}, delayMillis);
        console.log(17);
        playKey(17);}
    
    else if((event.keyCode==221)){
        document.getElementById("black2 fs").className = "blackchanged2 fs";
        setTimeout(function() {
            document.getElementById("black2 fs").className = "black2 fs";}, delayMillis);
        console.log(18);
        playKey(18);}
    
    
     else if((event.keyCode==13)){
        document.getElementById("white2 g").className = "whitechanged2 g";
        setTimeout(function() {
            document.getElementById("white2 g").className = "white2 g";}, delayMillis);
         console.log(19);
        playKey(19);}
    
    else if((event.keyCode==103)){
        document.getElementById("black2 gs").className = "blackchanged2 gs";
        setTimeout(function() {
            document.getElementById("black2 gs").className = "black2 gs";}, delayMillis);
        console.log(20);
        playKey(20);}
    
     else if((event.keyCode==100)){
        document.getElementById("white2 a").className = "whitechanged2 a";
        setTimeout(function() {
            document.getElementById("white2 a").className = "white2 a";}, delayMillis);
         console.log(21);
        playKey(21);}
    
    else if((event.keyCode==104)){
        document.getElementById("black2 as").className = "blackchanged2 as";
        setTimeout(function() {
            document.getElementById("black2 as").className = "black2 as";}, delayMillis);
        console.log(22);
        playKey(22);}
    
    else if((event.keyCode==101)){
        document.getElementById("white2 b2").className = "whitechanged2 b2";
        setTimeout(function() {
            document.getElementById("white2 b2").className = "white2 b2";}, delayMillis);
        console.log(23);
        playKey(23);}
    
     else if((event.keyCode==102)){
        document.getElementById("white2 c3").className = "whitechanged2 c3";
        setTimeout(function() {
            document.getElementById("white2 c3").className = "white2 c3";}, delayMillis);
         console.log(24);
        playKey(24);}
});

function toggleswitch(name){
    var x = document.getElementsByClassName(name);
    for (i in x){
        if(x[i].style.display=='block'){
        x[i].style.display='none';
        }
        else{
             x[i].style.display='block';
        }
    }
    
}
function toggle(){
    toggleswitch('switch');
}
