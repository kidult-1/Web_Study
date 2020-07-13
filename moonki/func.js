function Func(this_button){
  var target = document.querySelector('body');
  if(this_button.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    this_button.value = 'day';
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    this_button.value = 'night';
  }
}
function make_loop(){
  var target = document.getElementById('loop_target');
  for(i = 0; i < 10; i++){
    var new_li = document.createElement("li");
    new_li.innerHTML = i;
    target.appendChild(new_li);
  }
}
