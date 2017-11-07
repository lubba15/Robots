var color = document.querySelectorAll('.light')
var changeColor = document.querySelector('#input')

changeColor.addEventListener('change', function () {
  var time = changeColor.value;
  console.log(time);
  color[0].classList.remove('off');
  color[1].classList.remove('off');
  color[2].classList.remove('off');

  if(time <=10){
    color[0].classList.add('off');
    color[1].classList.add('off');
  }
  else if(time > 10 && time <=20){
    color[1].classList.add('off');
    color[2].classList.add('off');
  }
   else if(time > 20 && time >=30){
    color[0].classList.add('off');
    color[2].classList.add('off');
  }
  else {
    color[0].classList.add('off');
    color[1].classList.add('off');
    color[2].classList.add('off');
  }
    document.getElementById("text").value = "";
});
