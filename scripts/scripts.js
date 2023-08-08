// cur breakpoints:
//     md: '768px',
//     lg: '1024px',
//     xl: '1440px',

var titleState = 0; // 0 = normal, 1 = alt, 2 = random
var buttonState = 0; // 0 = none, 1 = index, 2 = connection
// for dev only
function scroll() {
    console.log($(window).scrollTop());
}
function fadeInTitle() {
    $("#title1").hide();
    $("#title2").hide();
    $("#down-arrow").hide();
    $("#title1").fadeIn(2000);
    $("#title2").delay(1000).fadeIn(2000);
    $("#down-arrow").delay(2500).fadeIn(2000);
    $("title-u").css({'opacity': 0});
}
function titleDefault() {
    var plist = $("#title p");
    var h1font = $(plist[0]).css('font-size');
    $(plist[10]).css({'font-size': h1font});
    $(plist[29]).css({'opacity': 0});
    plist.css({'transform': 'translate(0px,0px) rotate(0deg)'});
    // todo: wave
    // $(plist[0]).css({'transform': 'translate(0px, -5px) rotate(0deg)'});
    // for (var i = 1; i < 30; i++) {
    //     $(plist[i-1]).css({'transform': 'translate(0px, 0px) rotate(0deg)'});
    //     $(plist[i]).css({'transform': 'translate(0px, -5px) rotate(0deg)'});
    // }
    titleState = 0;
}
function titleRandom() {
    $("#title p").each(function() {
        var degree = Math.floor(Math.random()*360 - 180);
        var dist = Math.random()*300;
        var dist_x = Math.floor(Math.sin(degree) * dist);
        var dist_y = Math.floor(Math.cos(degree) * dist);
        $(this).css({'transform': 'rotate(' + degree + 'deg) translate(' + dist_x + 'px ,' + dist_y +'px)'});
        console.log($(this).height());
    });
    titleState = 2;
}
function titleAlt() {
    var plist = $("#title p"); // list of letters
    var ptestlist = $("#title-size-test p") // list used to test the nOffset
    var divlist = $("#title-float div"); // list of words
    var h = $("#title h2").height() + 40; // height of h2 + padding
    var lineh = $(divlist[2]).height(); // each lines height
    var spacew = $(plist[13]).width(); // space width
    var welcomew = $(divlist[2]).width() + $(divlist[3]).width() + $(divlist[4]).width(); // width of 'welcome to my'
    var h1double = $("#title h1").height() / $(divlist[0]).height() > 1.5; // checks if h1 is two lines
    var h2double = $("#title h2").height() / $(divlist[2]).height() > 1.5; // checks if h2 is two lines
    var lgOffset = h2double ? -60 : 60; // offset for y for different medias
    var leftOffset = 0; // used to offset each individual letter in alt position
    var nOffset = $(ptestlist[0]).offset().top + $(ptestlist[0]).height() - $(ptestlist[1]).offset().top - $(ptestlist[1]).height() ; //offset for n's y specifically
    console.log(nOffset, $(ptestlist[0]).offset().top, $(ptestlist[0]).height(), $(ptestlist[1]).offset().top, $(ptestlist[1]).height())
    var line1Offset = + (h2double ? lineh : 0); //y offset for h2 line 2 
    var h2font = $(plist[11]).css('font-size');
    if (window.matchMedia('(max-width: 298px)').matches) { // too small
        titleDefault();
        return;
    } else if (window.matchMedia('(max-width: 512px)').matches){ // small
        lgOffset = h2double ? -30 : 0;
    } else if (window.matchMedia('(max-width: 1024px)').matches){ // medium
        lgOffset = 40;
    }
    var widths = [];
    for (let i = 0; i < 30; i++) {
        widths.push($(plist[i]).width());
    }
    plist.css({'padding': '0px'}); // reset paddings
    // n
    var cur = $(plist[10]);
    var x = widths[6] + widths[7] + widths[8]  + widths[9];
    x = h1double ? x : x + $(divlist[0]).width();
    cur.css({'font-size' : h2font, 'transform': 'translate(' + -x + 'px ,' + (2 * h + lgOffset + nOffset) +'px) rotate(360deg)'});
    // leftOffset += cur.width();
    leftOffset += $(plist[29]).width();
    // i
    cur = $(plist[26]);
    x = widths[22] + widths[23] + widths[24] + widths[25];
    x = h2double ? x : x + welcomew;
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // c
    cur = $(plist[14]);
    x = widths[11] + widths[12] + widths[13];  
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h+lgOffset + line1Offset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // e
    cur = $(plist[23]);
    x = widths[22]; 
    x = h2double ? x : x + welcomew;
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // space
    leftOffset += spacew;
    // to
    x = $(divlist[2]).width()
    $(plist[18]).css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h+lgOffset + line1Offset) +'px) rotate(360deg)'});
    $(plist[19]).css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h+lgOffset + line1Offset) +'px) rotate(360deg)'});
    leftOffset += widths[18] + widths[19];
    // space
    leftOffset += spacew;
    // check if new line
    if (h2double) {
        leftOffset = 0;
        lgOffset += lineh;
    }
    // m
    cur = $(plist[16]);
    x = widths[11] +  widths[12] +  widths[13] +  widths[14] +  widths[15];
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset + line1Offset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // e
    cur = $(plist[28]);
    x = widths[22] + widths[23] + widths[24] + widths[25] + widths[26] + widths[27];
    x = h2double ? x : x + welcomew;
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // e
    cur = $(plist[12]);
    x = widths[11];
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset + line1Offset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // t
    cur = $(plist[27]);
    x = widths[22] + widths[23] + widths[24] + widths[25] + widths[26];
    x = h2double ? x : x + welcomew;
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // space
    leftOffset += spacew
    // y
    cur = $(plist[21]);
    x = widths[20] + $(divlist[2]).width() + $(divlist[3]).width();
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset + line1Offset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // o
    cur = $(plist[15]);
    x = widths[11] + widths[12] + widths[13] + widths[14];
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset + line1Offset) +'px) rotate(360deg)'});
    leftOffset += cur.width();
    // u
    cur = $(plist[29]);
    x = widths[22] + widths[23] + widths[24] + widths[25] + widths[26] + widths[27] + widths[28];
    x = h2double ? x : x + welcomew;
    cur.css({'transform': 'translate(' + (-x + leftOffset) + 'px ,' + (h + lgOffset) +'px) rotate(360deg)'});
    cur.css({'opacity':1});

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 17, 20, 22, 24, 25].forEach(function (value) {
        $(plist[value]).css({'transform': 'translate(0px,0px) rotate(0deg)'});
    });
    titleState = 1;
}
function updateGradient() {
    var scroll = $(window).scrollTop();
    var isSmall = window.matchMedia('(max-width: 1024px)').matches;
    if (scroll < 700) {
        $("#gradient-header1").css({'background': 'linear-gradient(' + (isSmall ? 180 : 90) + 'deg, rgb(0, 0, 0) 10%, rgba(0, 0, 0, ' + (isSmall ? 0 : 0.4) + ') 100%)'});
    } else if (scroll < 1200) {
        $("#gradient-header1").css({'background': 'linear-gradient(' + 
            (isSmall ? 180 : 90) + 'deg, rgb(0, 0, 0) ' + (10 + (scroll-700)/100) + '%, rgba(0, 0, 0, ' + 
            (isSmall ? ((scroll-700)/1000): (0.4 + (scroll-700)/2500)) + ') 100%)'});
    } else {
        $("#gradient-header1").css({'background': 'linear-gradient(' + (isSmall ? 180 : 90) + 'deg, rgb(0, 0, 0) 15%, rgba(0, 0, 0, ' + (isSmall ? 0.5 : 0.6) + ') 100%)'});
    }
}
function toggleIndexList() {
    $("#index-list").toggleClass("active");
}
function toggleConnectionList() {
    $("#connections-list").toggleClass("active");
}
function toggleGradient2() {
    $("#gradient-header2").toggleClass("active");
}
function hideHeaderElements() {
    $(".header-list-element").removeClass("active");
    buttonState = 0;
}
function setExitZIndex() {
    if (buttonState > 0) {
        $("#exit-region").css({"z-index" : 50});
    } else {
        $("#exit-region").css({"z-index" : 0});
    }
}
function scrollEvent(event) {
    var direction = 1;
    if(event.originalEvent.wheelDelta > 0) {
        direction = -1;
    }

    var scroll = $(window).scrollTop();

    // switch title
    if (scroll < 200) {
        titleDefault();
    } else if (scroll < 1200 && titleState != 1) {
        titleAlt();
    }
    // fade title
    if (scroll < 700) {
        $("#title").css({'opacity': 1});
    } else if (scroll < 1200) {
        $("#title").css({'opacity': 1-(scroll-700)/500});

    } else {
        $("#title").css({'opacity': 0});
    }
    // down arrow
    if (scroll < 200) {
        $("#down-arrow").fadeIn();
    } else if (scroll > 1200) {
        $("#down-arrow").fadeOut();
    }
    // index list items
    var indexList = $("#index-list p");
    indexList.removeClass("active");
    if (scroll < 1300) { // early by 100 for large
    } else if (scroll < 10000) { // todo fix
        $(indexList[0]).addClass("active");
    } 

    // gradient
    updateGradient()

    // fade in body 2
    if (scroll < 900) {
        $("#body2").css({'opacity': 0});
    } else if (scroll < 1400) {
        $("#body2").css({'opacity': (scroll-900)/500});
    } else {
        $("#body2").css({'opacity': 1});
    }

    // body 2 title
    if (window.matchMedia('(min-width: 512px)').matches) { 
        if (scroll < 1450) {
            $("#section-title1").removeClass("active");
        } else {
            $("#section-title1").addClass("active");
        }
    } 

    // body 2 images
    if (window.matchMedia('(min-width: 1600px)').matches) { 
        var body2ImgList = $("#image-album-1 div");
        body2ImgList.removeClass("active");
        if (scroll < 2000) {
            $(body2ImgList[0]).addClass("active");
        } else {
            $(body2ImgList[1]).addClass("active");
        }
    }
            
    // body 2 text
    if (scroll < 500) {
        $("#body2text span").css({"left": "0px", "transform": "rotate(0deg)"})
    } else if (scroll < 2800) {
        var body2spans = $("#body2text span");
        var body2text = $("#body2text");

        body2spans.each( function(index) {
            var displace = Math.max(0, $(this).offset().top - scroll - $(window).height() * 0.75);
            displace = displace * ($(this).offset().left - (body2text.width() * 0.5 + body2text.offset().left)) /body2text.width() 
            $(this).css({"left": displace + "px", "transform": "rotate(" + (-displace/10) + "deg)"});

            // if (index == 0) {
            //     console.log(displace, $(this).offset().top, scroll, $(window).height());
            // }
        });    
    } else {
        $("#body2text span").css({"left": "0px", "transform": "rotate(0deg)"})
    }
}
// if (window.addEventListener) {window.addEventListener('DOMMouseScroll', scrollEvent, false);}
// window.onmousewheel = document.onmousewheel = scrollEvent;
// main function (ready)
$(function() {
    // header
    $("#index-button").click(function (event) {
        $(this).toggleClass("active");
        toggleIndexList();
        if (buttonState != 2) {
            toggleGradient2();
        } else {
            $("#connection-button").toggleClass("active");
            toggleConnectionList();
        }
        buttonState = (buttonState == 1) ? 0 : 1;
        setExitZIndex();
    });
    $("#connection-button").click(function (event) {
        $(this).toggleClass("active");
        toggleConnectionList()
        if (buttonState != 1) {
            toggleGradient2();
        } else {
            $("#index-button").toggleClass("active");
            toggleIndexList();
        }
        buttonState = (buttonState == 2) ? 0 : 2;
        setExitZIndex();
    });
    $("#exit-region").click(function (event) {
        hideHeaderElements();
        setExitZIndex();
    });
    // index links https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
    $("a[href^='#']", document.body ).on("click", function( event ) {
        hideHeaderElements();
        if ($.attr(this, 'href') != "#") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);;
        }
    });

    // todo: dev only!! display info
    $( "*", document.body ).on( "click", function( event ) {
        // to stop: event.stopPropagation();
        debugger;
        var offset = $( this ).offset();
        var height = $(this).height();
        var width = $(this).width();
        console.log(" coords ( " + offset.left + ", " + offset.top + " ), width " + width + " height " + height );
    });

    $( window ).on( "resize", function() {
        updateGradient();
    });

    // title
    var idleTimer = 0;
    fadeInTitle();
    $("#logo-website").click(function (event) {
        fadeInTitle();
    });
    $(window).scroll(function (event) {
        scrollEvent(event);
    });
    // $(window).bind('DOMMouseScroll mousewheel', function(event){
    //     scrollEvent(event);
    // });
    $("#title p").hover(function() {
        if (titleState == 0) {
            $(this).css({'padding': '0px 3px'});
        }
    }, function() {
        $(this).css({'padding': '0px'});
    });

    $("#title").click(function (event) {
        idleTimer = 0;
        titleRandom();
    })
    function increaseTimer() {
        idleTimer += 1;
        
        if (idleTimer > 3) {
            var scroll = $(window).scrollTop();
            if (scroll < 200) {
                titleDefault();
            } else if (scroll < 1200) {
                titleAlt(); //todo disabled for now
            }
        }
    }
    setInterval(increaseTimer, 1000);
    // $(document).mousemove(function(event) {
    //     var title = $("#title");
    //     var deltax = Math.round((event.pageX - (title.offset().left+title.width()/2))/20);
    //     console.log(deltax)

    //     $("#title").css({"transform": "rotateY(" + deltax + "deg)"})
    // });

   

    // bg-animation
    var num = 40;

    for (var j = 1; j < 3; j++) {
        var text_shadow = ""
        for (var i = 0; i < num; i++) {
            var x = Math.floor(Math.random()*1000-400);
            var y = -Math.floor(Math.random()*1500-500);
            var size = Math.floor(Math.random() * 225 + 75);

            // var hue = Math.floor(Math.random() * 360)
            var hue = Math.floor(Math.random() * 80+120);
            var satuation = 100;
            var lightness = Math.floor(Math.random() * 30 + 50)
            var alpha = 0.9;

            text_shadow = text_shadow + `${x}px ${y}px ${size}px hsla(${hue},${satuation}%,${lightness}%,${alpha})`;
            if (i < num - 1) {
                text_shadow = text_shadow + ", ";
            }
        }

        $(`#animation-dot-${j}`).css({'text-shadow': text_shadow});
    }
});