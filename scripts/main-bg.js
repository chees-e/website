$(function() {
    var num = 40;

    for (var j = 1; j < 3; j++) {
        var text_shadow = ""
        for (var i = 0; i < num; i++) {
            var x = Math.floor(Math.random()*1000-400);
            var y = -Math.floor(Math.random()*1500-500);
            var size = Math.floor(Math.random() * 225 + 75);

            // var hue = Math.floor(Math.random() * 360)
            var hue = Math.floor(Math.random() * 80+120)
            var satuation = 100;
            var lightness = Math.floor(Math.random() * 30 + 50)
            var alpha = 0.9;

            text_shadow = text_shadow + `${x}px ${y}px ${size}px hsla(${hue},${satuation}%,${lightness}%,${alpha})`
            if (i < num - 1) {
                text_shadow = text_shadow + ", "
            }
        }

        $(`#animation-dot-${j}`).css({'text-shadow': text_shadow});
    }
});



