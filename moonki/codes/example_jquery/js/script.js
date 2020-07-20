function real_title () {
  var $h1 = jQuery('h1');
  $h1.text('It\'s night');
  var $p = jQuery('p');
  $p.text('x');
  var $h2 = jQuery('h2');
  $h2.text('x');
  var $li = jQuery('li');
  var i = 1;
  $li.each(function(){
    $(this).text('x' + i);
    i++;
  })
}
