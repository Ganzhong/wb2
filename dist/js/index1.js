"use strict";var oBanner=document.getElementById("banner"),aLi=document.querySelectorAll("#banner>ul>li"),oDir=document.querySelector(".direction"),aA=oDir.getElementsByTagName("a"),aBtn=document.querySelector(".btn-lunbo").getElementsByTagName("a"),iNow=0,Next=0,timer=null;function getStyle(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e,!1)[t]}function move(i,o,l){clearInterval(i.timer),i.timer=setInterval(function(){var e=!0;for(var t in o){var a=0;a="opacity"==t?parseInt(100*parseFloat(getStyle(i,t))):parseInt(getStyle(i,t));var n=(o[t]-a)/8;n=0<n?Math.ceil(n):Math.floor(n),a!=o[t]&&(e=!1),"opacity"==t?(i.style.opacity=(a+n)/100,i.style.filter="alpha(opacity"+(a+n)+")"):i.style[t]=a+n+"px"}e&&(clearInterval(i.timer),l&&l())},30)}createwbiao();for(var i=0;i<aBtn.length;i++)aBtn[i].index=i,aBtn[i].onmouseover=function(){for(var e=0;e<aBtn.length;e++)aBtn[e].className="";this.className="active",move(aLi[iNow],{opacity:0}),move(aLi[this.index],{opacity:100}),Next=this.index,iNow=Next};function autoPlay(){timer=setInterval(function(){Next==aLi.length-1?Next=0:Next++,toImg()},1e3)}function toImg(){move(aLi[iNow],{opacity:0}),move(aLi[Next],{opacity:100}),iNow=Next;for(var e=0;e<aBtn.length;e++)aBtn[e].className="";aBtn[Next].className="active"}aA[0].onclick=function(){0==Next?Next=aLi.length-1:Next--,toImg()},aA[1].onclick=function(){Next==aLi.length-1?Next=0:Next++,toImg()},oBanner.onmouseover=function(){clearInterval(timer)},oBanner.onmouseout=function(){autoPlay()},autoPlay();var pinaa=document.querySelectorAll(".main11-c>a"),pindiv=document.querySelectorAll(".main11-div div");for(i=0;i<pinaa.length;i++)pinaa[i].index=i,pinaa[i].onmouseover=function(){console.log(pindiv[i]);for(var e=0;e<pinaa.length;e++)pinaa[e].className="",pindiv[e].style.display="none",console.log(pindiv[e]);this.className="xuanzhong",pindiv[this.index].style.display="block"};