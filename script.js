function mainPage() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
function aboutPage() {
	document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
}
window.onscroll = function() {
  var logo = document.getElementById('logo-circle');
  var flavor = document.getElementById('flavorSec');
  if (window.scrollY >= flavor.offsetTop - 50) {
    logo.classList.add('logo-colored');
  } else {
    logo.classList.remove('logo-colored');
  }
};
function flavorPage(){
	document.getElementById("flavorSec").scrollIntoView({behavior:"smooth"})
}
function shopePage(){
	document.getElementById("shopSec").scrollIntoView({behavior:"smooth"})
}


const themes = {
  lemon: {
    '--imageAreaImg' : 'url(imgs/lemon.png)',
    '--titlesColors':'#68a058',
    '--introTextAreaColor':'#a0f58b',
    '--buyNowBtn':'rgb(181, 235, 95)',
    '--buyNowBtnHover':'rgb(141, 192, 60)',
    '--flavourBg':'#f3f8e7',
    '--aboutUsBg':'#f0fcdf',
    '--textAreaShadow':'#6BCF4F',
    '--textArea':'rgb(248, 255, 206)',
    '--navHover':'rgb(242, 255, 205)',
   '--navHoverShadow': 'rgb(190, 206, 152)',
   '--navActive' : 'rgb(201, 238, 98)',
   '--aboutBoxBorer' : 'rgb(150, 172, 100)',
   '--aboutBoxBg':'rgb(249, 252, 238)',
   '--aboutBoxTitles':'rgb(112, 131, 110)',
  },
  strawberry: {
    '--imageAreaImg' : 'url(imgs/strawberry-soda.png)',
    '--titlesColors':'#ef4851',
    '--textArea' : 'rgb(255, 194, 197)',
    '--textAreaShadow':'rgb(179, 125, 127)',
    '--introTextAreaColor':'#d7898d',
    '--buyNowBtn':'rgb(244, 63, 65)',
    '--buyNowBtnHover':'rgb(198, 28, 40)',
    '--flavourBg':'rgb(255, 235, 237)',
    '--aboutUsBg':'rgb(253, 226, 229)',
    '--navHover':'rgb(255, 192, 192)',
    '--navHoverShadow': 'rgb(250, 195, 195)',
    '--navActive' :' rgb(255, 150, 150)',
    '--aboutBoxBorer' :' rgb(172, 100, 100)',
    '--aboutBoxBg':'rgb(252, 238, 238)',
    '--aboutBoxTitles':'rgb(131, 110, 110)',
  }
};

function changeThemes(theme) {
  const root = document.documentElement;
  const settings = themes[theme];

  for (const [variable, value] of Object.entries(settings)) {
    root.style.setProperty(variable, value);
  }
  window.scrollTo({ top: 0, behavior: "smooth" })
}