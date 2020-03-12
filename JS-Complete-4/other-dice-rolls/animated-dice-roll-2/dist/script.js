var face=1;

var show = function() {
  $('.cube1').attr('class', 'cube cube1 show'+face);
  if(face==6) {
    face=1;
  } else {
    face++; 
  }
};

var show2 = function() {
  $('.cube2').attr('class', 'cube cube2 show'+face);
  if(face==6) {
    face=1;
  } else {
    face++; 
  }
};

$('.cube1').on('click', show);
$('.cube2').on('click', show2);