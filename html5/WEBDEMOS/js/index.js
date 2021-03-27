$(function () {
    //监听内容是否有输入

    $("body").delegate(".comment", "propertychange input", function () {

        if ($(this).val().length > 0) {
            $(".send").prop("disabled", false);
        } else {
            $(".send").prop("disabled", true);
        }
    });
    $(".send").click(function () {
        var $text = $(".comment").val();
        //
        var $weibo = createEle($text);

        $(".messageList").prepend($weibo);
    });

    function createEle($text) {
        var time = dateFormat();
        var $weibo = $(" <div class=\"info\">\n" +
            "            <p class=\"infoText\">" + $text + "​</p>\n" +
            "            <p class=\"infoOperation\">\n" +
            "                <span class=\"time\">" + time + "</span>\n" +
            "                <span class=\"infoHandle\">\n" +
            "                    <a href=\"javascript:;\">0</a>\n" +
            "                    <a href=\"javascript:;\">0</a>\n" +
            "                    <a href=\"javascript:;\">删除</a>\n" +
            "                </span>\n" +
            "            </p>\n" +
            "        </div>");
        return $weibo;
    }


    function dateFormat() {

        var date = new Date();
        var time = [date.getFullYear() + "-",
            date.getMonth() + 1 + "-",
            date.getDate() + "           ", date.getHours() + ":"
            , date.getMinutes() + ":", date.getSeconds()];
        var time1 = date.getFullYear() + "-"
            + date.getMonth() + 1 + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        return time1;


    }
});