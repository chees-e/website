(()=>{var t=0;function a(){$("#title1").hide(),$("#title2").hide(),$("#down-arrow").hide(),$("#title1").fadeIn(2e3),$("#title2").delay(1500).fadeIn(2500),$("#down-arrow").delay(3e3).fadeIn(2e3),$("title-u").css({opacity:0})}function o(){var a=$("#title p"),o=$(a[0]).css("font-size");$(a[10]).css({"font-size":o}),$(a[29]).css({opacity:0}),a.each((function(){$(this).css({transform:"translate(0px,0px) rotate(0deg)"})})),t=0}function s(){var a=$("#title p"),s=$("#title-float div"),e=$("#title h2").height()+40,r=$(s[2]).height(),i=$(a[13]).width(),n=$(s[2]).width()+$(s[3]).width()+$(s[4]).width(),h=$("#title h1").height()/$(s[0]).height()>1.5,d=$("#title h2").height()/$(s[2]).height()>1.5,c=d?-60:60,l=0,p=8,f=+(d?r:0),x=$(a[11]).css("font-size");if(window.matchMedia("(max-width: 298px)").matches)o();else{window.matchMedia("(max-width: 768px)").matches?(c=d?-30:0,p=0):window.matchMedia("(max-width: 1024px)").matches&&(c=40,p=4);var w=[];for(let t=0;t<30;t++)w.push($(a[t]).width());console.log(c);var m=$(a[10]),g=w[6]+w[7]+w[8]+w[9];g=h?g:g+$(s[0]).width(),m.css({transform:"translate("+-g+"px ,"+(2*e+c+p)+"px) rotate(360deg)","font-size":x}),l+=m.width(),m=$(a[26]),g=w[22]+w[23]+w[24]+w[25],g=d?g:g+n,m.css({transform:"translate("+(-g+l)+"px ,"+(e+c)+"px) rotate(360deg)"}),l+=m.width(),m=$(a[14]),g=w[11]+w[12]+w[13],m.css({transform:"translate("+(-g+l)+"px ,"+(e+c+f)+"px) rotate(360deg)"}),l+=m.width(),m=$(a[23]),g=w[22],g=d?g:g+n,m.css({transform:"translate("+(-g+l)+"px ,"+(e+c)+"px) rotate(360deg)"}),l+=m.width(),l+=i,g=$(s[2]).width(),$(a[18]).css({transform:"translate("+(-g+l)+"px ,"+(e+c+f)+"px) rotate(360deg)"}),$(a[19]).css({transform:"translate("+(-g+l)+"px ,"+(e+c+f)+"px) rotate(360deg)"}),l+=w[18]+w[19],l+=i,d&&(l=0,c+=r),m=$(a[16]),g=w[11]+w[12]+w[13]+w[14]+w[15],m.css({transform:"translate("+(-g+l)+"px ,"+(e+c+f)+"px) rotate(360deg)"}),l+=m.width(),m=$(a[28]),g=w[22]+w[23]+w[24]+w[25]+w[26]+w[27],g=d?g:g+n,m.css({transform:"translate("+(-g+l)+"px ,"+(e+c)+"px) rotate(360deg)"}),l+=m.width(),m=$(a[12]),g=w[11],m.css({transform:"translate("+(-g+l)+"px ,"+(e+c+f)+"px) rotate(360deg)"}),l+=m.width(),m=$(a[27]),g=w[22]+w[23]+w[24]+w[25]+w[26],g=d?g:g+n,m.css({transform:"translate("+(-g+l)+"px ,"+(e+c)+"px) rotate(360deg)"}),l+=m.width(),l+=i,m=$(a[21]),g=w[20]+$(s[2]).width()+$(s[3]).width(),m.css({transform:"translate("+(-g+l)+"px ,"+(e+c+f)+"px) rotate(360deg)"}),l+=m.width(),m=$(a[15]),g=w[11]+w[12]+w[13]+w[14],m.css({transform:"translate("+(-g+l)+"px ,"+(e+c+f)+"px) rotate(360deg)"}),l+=m.width(),m=$(a[29]),g=w[22]+w[23]+w[24]+w[25]+w[26]+w[27]+w[28],g=d?g:g+n,m.css({transform:"translate("+(-g+l)+"px ,"+(e+c)+"px) rotate(360deg)"}),m.css({opacity:1}),[0,1,2,3,4,5,6,7,8,9,11,13,17,20,22,24,25].forEach((function(t){$(a[t]).css({transform:"translate(0px,0px) rotate(0deg)"})})),t=1}}$((function(){var e=0;a(),$("#logo-website").click((function(t){a()})),$(window).scroll((function(t){var a=$(window).scrollTop();a<200?o():a<1200&&s(),a<500?$("#title").css({opacity:1}):a<1200?$("#title").css({opacity:1-(a-500)/700}):$("#title").css({opacity:0}),a<200?$("#down-arrow").fadeIn():a>1200&&$("#down-arrow").fadeOut()})),$("#title p").hover((function(){1!=t&&$(this).css({padding:"0px 3px"})}),(function(){$(this).css({padding:"0px"})})),$("#title").click((function(a){e=0,$("#title p").each((function(){var t=Math.floor(360*Math.random()-180),a=300*Math.random(),o=Math.floor(Math.sin(t)*a),s=Math.floor(Math.cos(t)*a);$(this).css({transform:"rotate("+t+"deg) translate("+o+"px ,"+s+"px)"}),console.log($(this).height())})),t=2})),setInterval((function(){if((e+=1)>3){var t=$(window).scrollTop();t<200?o():t<1200&&s()}}),1e3);for(var r=1;r<3;r++){for(var i="",n=0;n<40;n++)i+=`${Math.floor(1e3*Math.random()-400)}px ${-Math.floor(1500*Math.random()-500)}px ${Math.floor(225*Math.random()+75)}px hsla(${Math.floor(80*Math.random()+120)},100%,${Math.floor(30*Math.random()+50)}%,0.9)`,n<39&&(i+=", ");$(`#animation-dot-${r}`).css({"text-shadow":i})}}))})();