$(function(){
  document.querySelectorAll('.gnav__link').forEach(link => {
    if(link.href == window.location.href){
      link.classList.add('gnav__link-current');
    }
  });
  document.querySelectorAll('.spMenu__link').forEach(link => {
    if(link.href == window.location.href){
      link.classList.add('spMenu__link-current');
    }
  });
  $(".spMenu__btn").click(function(){
    $("#spMenu__openMenu").addClass("spMenu__openMenu-active");
  });
  $(".spMenu__close").click(function(){
    $("#spMenu__openMenu").removeClass("spMenu__openMenu-active");
  });
});