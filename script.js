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
  },
  blueberry: {
    '--imageAreaImg': 'url(imgs/blueberry-soda.png)',
    '--titlesColors': 'rgb(74, 111, 165)',
    '--introTextAreaColor': 'rgb(86, 53, 144)',
    '--buyNowBtn':  'rgb(64, 93, 162)',
    '--buyNowBtnHover': 'rgb(33, 52, 99)',
    '--flavourBg': 'rgb(236, 230, 250)',
    '--aboutUsBg': 'rgb(225, 215, 245)',
    '--textAreaShadow': 'rgb(100, 80, 150)',
    '--textArea': 'rgb(245, 240, 255)',
    '--navHover': 'rgb(210, 195, 240)',
    '--navHoverShadow': 'rgb(185, 165, 220)',
    '--navActive': 'rgb(160, 130, 200)',
    '--aboutBoxBorer': 'rgb(130, 100, 170)',
    '--aboutBoxBg': 'rgb(240, 235, 250)',
    '--aboutBoxTitles': 'rgb(100, 80, 140)',
  },
  pineapple: {
    '--imageAreaImg': 'url(imgs/pineapple-soda.png)',
    '--titlesColors': 'rgb(240, 180, 40)',
    '--introTextAreaColor': 'rgb(255, 213, 10)',
    '--buyNowBtn': 'rgb(255, 225, 130)',
    '--buyNowBtnHover': 'rgb(240, 188, 57)',
    '--flavourBg': 'rgb(255, 248, 210)',
    '--aboutUsBg': 'rgb(255, 243, 200)',
    '--textAreaShadow': 'rgb(200, 160, 60)',
    '--textArea': 'rgb(255, 245, 210)',
    '--navHover': 'rgb(255, 235, 170)',
    '--navHoverShadow': 'rgb(235, 205, 120)',
    '--navActive': 'rgb(240, 200, 80)',
    '--aboutBoxBorer': 'rgb(190, 150, 50)',
    '--aboutBoxBg': 'rgb(255, 248, 220)',
    '--aboutBoxTitles': 'rgb(150, 120, 60)',
  },
  peach: {
    '--imageAreaImg': 'url(imgs/peach-soda.png)',
    '--titlesColors': 'rgb(255, 170, 130)',
    '--introTextAreaColor': 'rgb(255, 156, 71)',
    '--buyNowBtn': 'rgb(255, 160, 120)',
    '--buyNowBtnHover': 'rgb(230, 130, 90)',
    '--flavourBg': 'rgb(255, 240, 230)',
    '--aboutUsBg': 'rgb(255, 230, 215)',
    '--textAreaShadow': 'rgb(200, 150, 130)',
    '--textArea': 'rgb(255, 245, 235)',
    '--navHover': 'rgb(250, 206, 184)',
    '--navHoverShadow': 'rgb(235, 190, 170)',
    '--navActive': 'rgb(245, 180, 150)',
    '--aboutBoxBorer': 'rgb(210, 160, 140)',
    '--aboutBoxBg': 'rgb(255, 245, 240)',
    '--aboutBoxTitles': 'rgb(170, 130, 110)',
  },
};

function changeThemes(theme) {
  const root = document.documentElement;
  const settings = themes[theme];

  for (const [variable, value] of Object.entries(settings)) {
    root.style.setProperty(variable, value);
  }
  window.scrollTo({ top: 0, behavior: "smooth" })
}
function randomTheme(){
  const random = ["lemon" , "strawberry" , "blueberry" , "pineapple" , "peach"];
  const theme = random[Math.floor(Math.random() * random.length )]
  changeThemes(theme)
}