$(document).ready(function(){
  function changeBg() {
  var navbar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if(scrollValue < 150)  {
  navbar.classList.remove('bgColor');
}else{
  navbar.classList.add('bgColor');
}
}
window.addEventListener('scroll', changeBg);

$('.menubtn').click(function()
{
  $('.navbar .menu').toggleClass("active");
  $('.menubtn i').toggleClass("active");
});
});
//CREATED BY MASOOM PATEL
