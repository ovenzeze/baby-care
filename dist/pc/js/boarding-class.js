/**
 * Created by oven.zhang on 5/25/2017.
 */
$(document).ready(function() {
    // options of fullpage
    $("#fullpage").fullpage({
        sectionsColor: ['white', 'rgba(224, 236, 253, 0.3)', '#6cc9f9', '#6cc9f9',"#f7d804"],
        afterLoad: function(anchorLink, index) {
            //using index
            if(index == 1) {
                $(".section1 .main .text").animate({
                    opacity: 1,
                    left: "200px"
                },1500);
            }
        if (index == 2) {
            $('.section2 .main .advantage1').animate({
                opacity: 1,
                top: "280px"
            },300);
            $('.section2 .main .advantage2').animate({
                opacity: 1,
                top: "210px"
            },500);
            $('.section2 .main .advantage3').animate({
                opacity: 1,
                top: "300px"
            },700);
            $('.section2 .main .advantage4').animate({
                opacity: 1,
                top: "205px"
            },1000);
            $('.section2 .main .advantage5').animate({
                opacity: 1,
                top: "292px"
            },1200);
            $('.section2 .main .advantage6').animate({
                opacity: 1,
                top: "270px"
            },1400);
        }
            if (index == 3) {
                $('.section3 .main img').animate({
                    opacity: 1,
                    height: "550px"
                },1000,function(){
                    $('.section3 .main .text-1').animate({
                        opacity: 1,
                        right: "350px"
                    },1500);
                    $('.section3 .main .text-2').animate({
                        opacity: 1,
                        left: "240px"
                    },1500);
                    $('.section3 .main .text-3').animate({
                        opacity: 1,
                        right: "350px"
                    },1500);
                    $('.section3 .main .text-4').animate({
                        opacity: 1,
                        left: "260px"
                    },1500);
                    $('.section3 .main .text-5').animate({
                        opacity: 1,
                        right: "360px"
                    },1500);
                });
            }
            if (index == 4) {
                $('.section4 .main .img-text').animate({
                    opacity: 1,
                    left: "140px"
                },1500);
                $('.section4 .main .img-girl').animate({
                    opacity: 1,
                    top: "0px"
                },1500);
            }
            if (index == 5) {
                $('.section5 .main .img-text').animate({
                    opacity: 1,
                    width: "553px",
                    height: "336px"
                },1500);
                $('.section5 .main .img-boy').animate({
                    opacity: 1,
                    right: "120px"
                },1500);
            }
        },
        fitToSection: true,
        paddingTop: "100px",
        autoScrolling: true,
    //     onLeave: function(index, nextIndex, direction) {
    //         if(index == 1) {
    //             $(".section1 .main .text").animate({
    //                 opacity: 0,
    //                 left: "-300px"
    //             },1500);
    //         }
    //         if (index == 2) {
    //             $('.section2 .main ul').animate({
    //                 opacity: 0
    //             }, 1500);
    //             $('.section2 .main .item-content').animate({
    //                 opacity: 0,
    //                 bottom: "-300px"
    //             },1500);
    //         }
    //         if(index == 3) {
    //             $('.section3 .main img').animate({
    //                 opacity: 0,
    //                 width: "1%",
    //                 height: "1%"
    //             },1500);
    //         }
    //         if (index == 4) {
    //             $('.section4 .main .img-text').animate({
    //                 opacity: 0,
    //                 left: "-440px"
    //             },0);
    //             $('.section4 .main .img-girl').animate({
    //                 opacity: 0,
    //                 top: "-500px"
    //             },0);
    //         }
    //         if (index == 5) {
    //             $('.section5 .main .img-text').animate({
    //                 opacity: 0,
    //                 width: "1px",
    //                 height: "1px"
    //             },0);
    //             $('.section5 .main .img-boy').animate({
    //                 opacity: 0,
    //                 right: "-420px"
    //             },0);
    //         }
    //     // }
    });
    // options of fullpage end
    // section2 switch list
    var listData = {
        0: ["6:2 科学师生配比","真正意义的小班授课","更精细到位的看护"],
        1: ["早教与托班结合", "周末免费亲子早教课", "增强亲子关系，安全度过敏感期"],
        2: [],
        3: ["每月享受1-2次主题活动", "节日会、生日会、音乐会锻炼宝宝交流能力","读书会、故事会开阔宝宝视野"],
        4: ["免费绘本借阅","宝宝专用图书角","免费专人指导"],
        5: ["定期测评宝宝各项能力","针对弱项进行重点训练","关注每一个宝宝"],
        6: ["享受皇家贵族式的学前体验", "自幼接受专业化培养","结交高水平玩伴，开拓广阔未来"]
    };
    $('.item-list').on("mouseover",event,function(event) {
        if(event.target.nodeName != "LI"){
            return;
        }
        var index = $(event.target).attr("index"),
            num = listData[index].length,
            listDom = "";
        $('.item-list li').removeClass("actived");
        $(event.target).addClass("actived");
        for(var i = 0; i < num; i++) {
            listDom += "<span>"+listData[index][i]+"</span>";
        }
        $('.item-content').html(listDom);
    });
    // section2 switch list end
});
