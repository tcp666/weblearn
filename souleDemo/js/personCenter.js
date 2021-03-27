/**
 *
 * @author tcp
 * @param user
 */
function toChat(user) {
    console.log(user);
    var userName = user.parentNode.children[1].innerText;
    console.log(userName);
    document.getElementById("toFriend").innerText = userName;
    chatMessage();
}

function addClick() {
    var hedaAll = document.getElementsByClassName("head");
    for (var i = 0, length = hedaAll.length; i < length; i++) {
        var div = hedaAll[i];
        div.onclick = function () {
            toChat(this)
        }
    }
}

addClick();

function chatMessage() {
    var lis = document.getElementsByClassName("chatMessageLeft");
    for (var i = 0, length = lis.length; i < length; i++) {
        lis[i].innerHTML = "<font size=\"5px\">" + document.getElementById("toFriend").innerText + "\n\n</font>123333333"
    }
}

function showFunctions(friends) {
    alert(friends);
}

function addFunctions() {
    var friends = document.getElementsByClassName("friend");
    for (var i = 0, length = friends.length; i < length; i++) {
        var div = friends[i];
        div.onclick = function () {
            showFunctions(this)
        }
    }
}

// addFunctions()
function sendMessage(obj) {
    var message = obj.parentNode.children[0].value;
    var templi = document.createElement("li");
    templi.className = "chatMessageRight";
    templi.innerText = message;
    document.getElementsByClassName("chatMessageList")[0].append(templi);
    message = obj.parentNode.children[0].value = "";


}
