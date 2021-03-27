function showText() {
    var poem = "你喜欢自己的灵魂吗？\n" +
        "\t\t来看看他们吧...\n红豆生南国,春来发几支\n\t\t愿君多采撷，此物最相思";
    var arrays = poem.split('');
    var index = 0;

    function f() {
        if (index >= arrays.length) {
            var x = Math.random() * 256;
            var y = Math.random() * 256;
            var z = Math.random() * 256;
            x = parseInt(x);
            z = parseInt(z);
            y = parseInt(y);
            document.getElementById("soulText").style.color = "rgb(" + x + "," + y + "," + z + ")"
        } else {
            var x = Math.random() * 256;
            var y = Math.random() * 256;
            var z = Math.random() * 256;
            x = parseInt(x);
            z = parseInt(z);
            y = parseInt(y);
            document.getElementById("soulText").append(arrays[index++]);
            document.getElementById("soulText").style.color = "rgb(" + x + "," + y + "," + z + ")"
        }
    }

    setInterval(f, 100);
}

showText();