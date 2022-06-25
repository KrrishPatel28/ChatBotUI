$(document).ready(function () {
    $(".bot_icon").click(function () {
        $("#chatScreen").show(650);
        $(".close_icon").show(450);
        $(".bot_icon").hide(450);
        setTimeout(() => {
            $(".bot_chatbox_head").fadeIn(1000);
        }, 650)

        setTimeout(() => {
            $(".bot_chatbox_title").fadeIn(1000).css("display", "inline-grid");
            $(".chatbox_icon").fadeIn(1000);
        }, 1650)

        setTimeout(() => {
            $(".bot_chatbox_questions").fadeIn(1000).css("display", "flex");
        }, 2650)

        setTimeout(() => {
            $(".questions_title").fadeIn(1000);
        }, 3650)

        setTimeout(() => {
            $(".questions_box1").fadeIn(1000).css("display", "flex");
        }, 4650)

        setTimeout(() => {
            $(".questions_box2").fadeIn(1000).css("display", "flex");
        }, 5650)

        setTimeout(() => {
            $(".questions_box3").fadeIn(1000).css("display", "flex");
        }, 6650)

        setTimeout(() => {
            $(".questions_box4").fadeIn(1000).css("display", "flex");
        }, 7650)

        setTimeout(() => {
            $(".questions_box").fadeIn(1000).css("display", "flex");
        }, 8650)

    });

    $(".close_icon").click(function () {
        $("#chatScreen").hide(650);
        $(".close_icon").hide(450);
        $(".bot_icon").show(450);
        $(".bot_chatbox_head").hide(650);
        $(".bot_chatbox_title").hide(650);
        $(".chatbox_icon").hide(650);
        $(".bot_chatbox_questions").hide(650);
        $(".questions_title").hide(650);
        $(".questions_box").hide(650);
        $(".questions_box1").hide(650);
        $(".questions_box2").hide(650);
        $(".questions_box3").hide(650);
        $(".questions_box4").hide(650);
    });
});