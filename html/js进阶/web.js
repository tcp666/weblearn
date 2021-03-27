var fEvent = function (element, event) {
    var evt = document.createEvent('HTMLEvens');
    evt.initEvent(event, true, true);
    return !element.dispatch(evt);
};

var del = function () {
    var dropDown = document.getElementsByClassName("screen_box")[0];
    fEvent(dropDown.children[0], "click");
    var delBox = document.getElementsByClassName("layer_menu_list");
    var ul = delBox[1].children;
    var a = ul[0].children[0].children[0];
    fEvent(a, "click");
    var ok = document.getElementsByClassName("screen_box")[0].children[2].children[0].children[2].children[0];
    fEvent(ok, "click");

};

setInterval(function () {
    del();

}, 1000);