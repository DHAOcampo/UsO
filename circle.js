var counter = 10;
var endscore = 0;
var rank = "f";
function timeremain() {
if(counter > 10){
    counter = 10;
}
   if(counter>0){
       counter--
    document.getElementById("footer").style.transform =`scaleX(${counter})`;
   }
    if (counter<0){
      counter = 0;
    }

    if(counter == 5){
  document.getElementById("footer").style.backgroundColor = "yellow";
}

if(counter == 3){
  document.getElementById("footer").style.backgroundColor = "red";
}

    if (counter == 0){
                 
      document.getElementById("footer").remove();
        document.getElementById("Unravel").pause();
        var game = document.createElement("div");
   game.setAttribute('class','end');
        document.getElementById("body").appendChild(game);
        var game2 = document.createElement("div");
        game2.setAttribute('class','end2');
             document.getElementById("body").appendChild(game2);
        timeout = setTimeout(endscreen, 1000);
        window.alert(endscore);

        function endscreen(){
                      clearTimeout(no);
  var restart = document.createElement("div");
  restart.setAttribute('class','restart');
  game.appendChild(restart);
  restart.addEventListener("click", restartbutton);
  restart.innerHTML = "RESTART";
  var done = document.createElement("div");
  done.setAttribute('class','gameover');
  game.appendChild(done);
  done.innerHTML = "GAMEOVER";
}

        function restartbutton(){
  document.location.reload(true);
}
    }
}

function WIN(){

  if(endscore<10000){
    rank = "D";
    }
    else if(endscore<20000){
      rank = "C";
    }
    else if(endscore<30000){
      rank = "B";
    }
    else if(endscore<40000){
      rank = "A";
    }
    else if(endscore>=40000){
      rank = "S";
    }
      localStorage.setItem("rank", rank);
        location.href = "congrats.html";
}

function gameBegin(){
     no = setTimeout(WIN, 90000);
document.getElementById("Unravel").play();
document.getElementById("starto").style.display = "none";
setInterval(timeremain, 1000);
          timeout = setTimeout(circle0, 8000);
          timeout = setTimeout(circle1, 8880);
          timeout = setTimeout(circle2, 9760);
          timeout = setTimeout(circle3, 10420);
          timeout = setTimeout(circle4, 11300);
          timeout = setTimeout(circle5, 11740);
          timeout = setTimeout(circle6, 12840);
          timeout = setTimeout(circle7, 13720);
          timeout = setTimeout(circle8, 14820);
          timeout = setTimeout(circle9, 15480);
          timeout = setTimeout(circle10, 16360);
          timeout = setTimeout(circle11, 17460);
          timeout = setTimeout(circle12, 18340);
          timeout = setTimeout(circle13, 19220);
          timeout = setTimeout(circle14, 20100);
          timeout = setTimeout(circle15, 20980);
          timeout = setTimeout(circle16, 21640);
          timeout = setTimeout(circle17, 22520);
          timeout = setTimeout(circle18, 23620);
          timeout = setTimeout(circle19, 24720);
          timeout = setTimeout(circle20, 26920);
          timeout = setTimeout(circle21, 28020);
          timeout = setTimeout(circle22, 28130);
          timeout = setTimeout(circle23, 30440);
          timeout = setTimeout(circle24, 30800);
          timeout = setTimeout(circle25, 32640);
          timeout = setTimeout(circle26, 33520);
          timeout = setTimeout(circle27, 34400);
          timeout = setTimeout(circle28, 35280);
          timeout = setTimeout(circle29, 36160);
          timeout = setTimeout(circle30, 37040);
          timeout = setTimeout(circle31, 38370);
          timeout = setTimeout(circle32, 42190);
          timeout = setTimeout(circle33, 43290);
          timeout = setTimeout(circle34, 44390);
          timeout = setTimeout(circle35, 45270);
          timeout = setTimeout(circle36, 47370);
          timeout = setTimeout(circle37, 48250);
          timeout = setTimeout(circle38, 49130);
          timeout = setTimeout(circle39, 50400);
          timeout = setTimeout(circle40, 51300);
          timeout = setTimeout(circle41, 52330);
          timeout = setTimeout(circle42, 53350);
          timeout = setTimeout(circle43, 53550);
          timeout = setTimeout(circle44, 53750);
          timeout = setTimeout(circle45, 54600);
          timeout = setTimeout(circle46, 55600);
          timeout = setTimeout(circle47, 55900);
          timeout = setTimeout(circle48, 56200);
          timeout = setTimeout(circle49, 56400);
          timeout = setTimeout(circle50, 59000);
          timeout = setTimeout(circle51, 60600);
          timeout = setTimeout(circle52, 61600);
          timeout = setTimeout(circle53, 61900);
          timeout = setTimeout(circle54, 62200);
          timeout = setTimeout(circle55, 62400);
          timeout = setTimeout(circle56, 64000);
          timeout = setTimeout(circle57, 65600);
          timeout = setTimeout(circle58, 66800);
          timeout = setTimeout(circle59, 67000);
          timeout = setTimeout(circle60, 67200);
          timeout = setTimeout(circle61, 67400);

          timeout = setTimeout(circle64, 69400);
          timeout = setTimeout(circle65, 69900);
          timeout = setTimeout(circle66, 70400);
          timeout = setTimeout(circle67, 70900);

          timeout = setTimeout(circle68, 71400);
          timeout = setTimeout(circle69, 71900);
          timeout = setTimeout(circle70, 72400);
          timeout = setTimeout(circle71, 72900);

          timeout = setTimeout(circle72, 73400);
          timeout = setTimeout(circle73, 73900);
          timeout = setTimeout(circle74, 74400);
          timeout = setTimeout(circle75, 74900);

          timeout = setTimeout(circle76, 75400);
          timeout = setTimeout(circle77, 75900);
          timeout = setTimeout(circle78, 76400);
          timeout = setTimeout(circle79, 76900);

          timeout = setTimeout(circle80, 77400);
          timeout = setTimeout(circle81, 77900);

          timeout = setTimeout(circle82, 78200);
          timeout = setTimeout(circle83, 78450);
          timeout = setTimeout(circle84, 78700);
          timeout = setTimeout(circle85, 78950);
          timeout = setTimeout(circle86, 79100);
          timeout = setTimeout(circle87, 80100);

          timeout = setTimeout(circle88, 81100);
          timeout = setTimeout(circle89, 81800);
          timeout = setTimeout(circle90, 82800);
          timeout = setTimeout(circle91, 83500);
          timeout = setTimeout(circle92, 83700);
}


function circle0(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
  element.addEventListener("click",element.remove);
  var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle1(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element1');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle2(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element2');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle3(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element3');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);
  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle4(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element4');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
  element.addEventListener("click",element.remove);
  var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle5(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element5');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle6(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element6');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
  element.addEventListener("click",element.remove);
  var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle7(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element7');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle8(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element8');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle9(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element9');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle10(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element10');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle11(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element11');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle12(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element12');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle13(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element13');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle14(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element14');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle15(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element15');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle16(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element16');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle17(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element17');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle18(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element18');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle19(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element19');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle20(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element20');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle21(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element21');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);
  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle22(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element22');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle23(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element23');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);
  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle24(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element24');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle25(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element25');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);
  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle26(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
          element.setAttribute('id','element26');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle27(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element27');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle28(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element28');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle29(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element29');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle30(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element30');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle31(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element31');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle32(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element32');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}
function circle33(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element33');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle34(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element34');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle35(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element35');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle36(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element36');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle37(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element37');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle38(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element38');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle39(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element39');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle40(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element40');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle41(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element41');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle42(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element42');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle43(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element43');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle44(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element44');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle45(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element45');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
      clearTimeout(yes);
  }
}

function circle46(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element46');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){

    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  clearTimeout(yes);
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle47(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element47');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle48(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element48');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle49(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element49');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle50(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element50');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle51(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element51');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle52(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element52');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle53(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element53');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle54(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element54');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle55(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element55');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle56(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element56');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle57(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element57');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle58(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element58');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle59(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element59');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle60(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element60');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle61(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element61');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle64(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element64');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle65(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element65');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle66(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element66');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle67(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element67');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle68(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element68');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle69(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element69');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle70(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element70');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle71(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element71');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle72(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element72');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle73(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element73');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle74(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element74');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle75(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element75');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle76(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element76');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle77(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element77');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle78(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element78');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle79(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element79');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle80(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element64');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle80(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element80');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle81(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element81');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle82(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element82');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle83(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element83');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle84(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element84');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle85(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element85');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle86(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element86');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle87(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element87');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle88(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element88');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle89(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element89');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle90(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element90');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle91(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element91');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}

function circle92(){

  var element = document.createElement("div");
  var ring = document.createElement("div");
  ring.setAttribute('class','ring');
        element.setAttribute('id','element92');
          element.setAttribute('class','circle');
          document.getElementById("body").appendChild(element);
          element.appendChild(ring);
        element.addEventListener("click", scoregood);
        var timeout = setTimeout(score_perfect, 1000);
        element.addEventListener("click",element.remove);
        var yes = setTimeout(boxdeath, 1500);

  function score_perfect(){
  element.removeEventListener("click", scoregood);
  element.addEventListener("click", scoreperfect);
  }

  function boxdeath(){
      element.remove();
  head.innerHTML = "BAD";
  head.classList.remove('animation');
  void head.offsetWidth;
  head.classList.add('animation');
  counter = counter - 3;
  endscore -= 100;
  }

  var head =  document.getElementById("header");
  function scoregood(){
    clearTimeout(yes);
    head.innerHTML = "GOOD";
    head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
  counter = counter + 5;
  endscore += 300;
  }
  function scoreperfect(){
    clearTimeout(yes);
      head.innerHTML = "PERFECT";
  head.classList.remove('animation');
    void head.offsetWidth;
    head.classList.add('animation');
      counter = counter + 10;
      endscore += 500;
  }
}


