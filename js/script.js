var counter = 0;

var elem = document.getElementById('cat-pic');
var counterArea = document.createElement("span");
counterArea.innerHTML = 0;
document.getElementById("log").appendChild(counterArea);

elem.addEventListener('click', function(){
  counter += 1;

  counterArea.innerHTML = counter;
  document.getElementById("log").appendChild(counterArea);

}, false);
