$(document).ready(function() {
    // options of fullpage
    $("#fullpage").fullpage({
        // sectionsColor: ['#1bbc9b', 'white', 'white', 'white', '#ccddff'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        controlArrows: false,
        slidesNavigation: true,
        css3: true,
        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            //using index
            if (index == 1) {
                $(".section1 .intro").animate({
                    height: "300px"
                }, 500);
            }
            if (index == 2) {
                $(".section2 .title").animate({
                    top: 0,
                    opacity: 1
                }, 1000);
                $(".section2 .kinder").animate({
                    left: 0,
                    opacity: 1
                }, 1500);
                $(".section2 .earlyedu").animate({
                    right: 0,
                    opacity: 1
                }, 1500);
            }
            if (index == 3) {
                $(".section3 .left .branch1").animate({
                    right: "-100px"
                }, 200);
                $(".section3 .left .branch2").animate({
                    right: "0px"
                }, 200);
                $(".section3 .left .branch3").animate({
                    right: "-60px"
                }, 200);

                $(".section3 .right .branch1").animate({
                    left: "-90px"
                }, 200);
                $(".section3 .right .branch2").animate({
                    left: "0px"
                }, 200);
                $(".section3 .right .branch3").animate({
                    left: "-60px"
                }, 200);
            }
            if (index == 4) {
                $(".section4 .left").animate({
                    left: "0px",
                    opacity: 1
                }, 1500);
                $(".section4 .center").animate({
                    bottom: "0px",
                    opacity: 1
                }, 1500);
                $(".section4 .right").animate({
                    right: "0px",
                    opacity: 1
                }, 1500);
            }
        },
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);

            if (index == 1) {
                $(".section1 .intro").animate({
                    height: "0px"
                }, 0);
            }
            if (index == 2) {
                $(".section2 .title").animate({
                    top: "-200px",
                    opacity: 0
                }, 0);
                $(".section2 .kinder").animate({
                    left: "-700px",
                    opacity: 0
                }, 0);
                $(".section2 .earlyedu").animate({
                    right: "-700px",
                    opacity: 0
                }, 0);
            }
            if (index == 3) {
                $(".section3 .left .branch1").animate({
                    right: "-500px"
                }, 0);
                $(".section3 .left .branch2").animate({
                    right: "-300px"
                }, 0);
                $(".section3 .left .branch3").animate({
                    right: "-360px"
                }, 0);

                $(".section3 .right .branch1").animate({
                    left: "-490px"
                }, 0);
                $(".section3 .right .branch2").animate({
                    left: "-400px"
                }, 0);
                $(".section3 .right .branch3").animate({
                    left: "-460px"
                }, 0);
            }
            if (index == 4) {
                $(".section4 .left").animate({
                    left: "-700px",
                    opacity: 0
                }, 0);
                $(".section4 .center").animate({
                    bottom: "-700px",
                    opacity: 0
                }, 0);
                $(".section4 .right").animate({
                    right: "-700px",
                    opacity: 0
                }, 0);
            }
        },
        afterRender: function() {
            setInterval(function() {
                $.fn.fullpage.moveSlideRight();
            }, 5000);
        },
        fitToSection: true,
        fitToSectionDelay: 1000,
        paddingTop: "100px"
    });
    // options of fullpage end
    // section5 tag1 更新section5新闻列表 
    var data = {
        data0: [{
            title: "0-6岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }, {
            title: "0-6岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }, {
            title: "0-6岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }],
        data1: [{
            title: "0-7岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/index_5_2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }, {
            title: "0-7岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/index_5_2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }, {
            title: "0-7岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/index_5_2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }],
        data2: [{
            title: "0-8岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }, {
            title: "0-8岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }, {
            title: "0-8岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }],
        data3: [{
            title: "0-9岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }, {
            title: "0-9岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }, {
            title: "0-9岁这样玩，轻松变身记忆小达",
            img: "http://www.babycare.cn/upload/index/img_page4-item2.jpg",
            content: "你们还记得我们之前的微课都讲过什么主题吗？还记得主要内容是什么吗？你还记得你读过什么书？为什么这么问呢，因为我们经历过的事情，思考的问题，体验的情感，都会在大脑中留下不同程度的印记，这就是记忆，也就是我们本次微课要讲的主题"
        }]
    };
    $(".section5 .left ul").on("mouseover", function(event) {
        // event.stopPropagation;
        var index = $(event.target).attr("index");
        var newListLen = 3;
        if (parseInt(index) != index) {
            return;
        }
        for (var i = 0; i < newListLen; i++) {
            $(".section5 .right li:eq(" + i + ") img").attr("src", data["data" + index][i].img);
            $(".section5 .right li:eq(" + i + ") .title").text(data["data" + index][i].title);
            $(".section5 .right li:eq(" + i + ") .intro").text(data["data" + index][i].content);
        }
    });
    // tag1 end
});
