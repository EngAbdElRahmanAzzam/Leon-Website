// scroll_button

window.onscroll = function() {
    var scrollButton = document.getElementById("scroll-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.opacity= 1;
    } else {
      scrollButton.style.opacity= 0;
    }
  };

// navbar_menu

var menuBtn = document.querySelector('.button'); 
var flag = true;
    menuBtn.onclick = function(){
        insertInBage('nav')
        flag = !flag;
        if (flag)
        {
            returnBtn()
            menuBtn.classList.remove('move-x')
        }
        else{
            convertBtn()
            menuBtn.classList.add('move-x')
        }
    }
function convertBtn()
{   
    document.querySelector('.btn-c').style.opacity = 0;
    document.querySelector('.btn-c').style.transition="opacity 0s 0s ease-in"; 
    document.querySelector('.btn:nth-child(1)').style.top='8px';
    document.querySelector('.btn:nth-child(3)').style.top="8px";
    document.querySelector('.btn:nth-child(1)').style.rotate= "45deg";
    document.querySelector('.btn:nth-child(3)').style.rotate= "-45deg"; 
}
function returnBtn(){
    document.querySelector('.btn-c').style.opacity = 1;
    document.querySelector('.btn-c').style.transition="opacity .5s 1s ease-in,  width .5s  linear";      
    document.querySelector('.btn:nth-child(1)').style.rotate= "0deg";
    document.querySelector('.btn:nth-child(3)').style.rotate= "0deg"
    document.querySelector('.btn:nth-child(1)').style.top='0px';
    document.querySelector('.btn:nth-child(3)').style.top="16px";
; 
}
// smooth scoll View
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  // toggle switch
function handleToggleSwitch(elmt){
  elmt.firstElementChild.classList.toggle('toggle-switch-txt-active')
  elmt.classList.toggle('toggle-switch-active')
}
function hideElmt(id){
  let elmt = document.getElementById(id);
  elmt.classList.toggle('hide');
}
// night mode
let flag_nigth =false
function night(){
  flag_nigth =! flag_nigth
  let root = document.querySelector(':root');
  console.log(root)
  if(flag_nigth){
      root.style.setProperty('--main', '#0b1f23');
      root.style.setProperty('--main', '#474646');
  }
  else{
      root.style.setProperty('--main', '#e9e9e9');
      root.style.setProperty('--second', 'rgb(240, 233, 224)');
  }

}
function insertInBage(id){
  let elmt = document.getElementById(id);
  elmt.classList.toggle('out');
}

