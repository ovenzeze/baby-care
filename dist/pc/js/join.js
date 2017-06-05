/**
 * Created by oven.zhang on 5/28/2017.
 */
$(document).ready(function () {
    var flag = false;
    // options of fullpage
    $("#fullpage").fullpage({
        // sectionsColor: ['#1bbc9b', 'white', 'white', 'white', '#ccddff'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        controlArrows: false,
        slidesNavigation: true,
        css3: true,
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            //using index
            if (index == 1) {
                $(".section1 .intro").animate({
                    top: "60px",
                    opacity: 1
                }, 1500);
            }
            if (index == 2) {
                $(".section2 .main img").animate({
                    opacity: 1,
                    width: "720px",
                    height: "480px"
                }, 1500);
            }
            if (index == 3) {
                $(".section3 .main p").animate({
                    opacity: 1,
                    left: "0px"
                }, 1500);
            }
            if (index == 4) {
                $(".section4 .main .boarding-class").animate({
                    opacity: 1,
                    left: "0px"
                }, 1500);
                $(".section4 .main .earlyedu").animate({
                    opacity: 1,
                    bottom: "0px"
                }, 1500);
                $(".section4 .main .multi-dimention").animate({
                    opacity: 1,
                    right: "0px"
                }, 1500);
            }
            if (index == 5) {
                $(".section5 .main .box").animate({
                    opacity: 1,
                    width: "270px"
                }, 1000);
            }
            if (index == 6) {
                $(".section6 .main .box").animate({
                    opacity: 1,
                    height: "380px"
                }, 1000);
            }
            if (index == 7) {
                $(".page4 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page4 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
        },
        // onLeave: function (index, nextIndex, direction) {
        //     var leavingSection = $(this);
        //
        //     if (index == 1) {
        //         $(".section1 .intro").animate({
        //             top: "-160px",
        //             opacity: 0
        //         }, 500);
        //     }
        //     if (index == 2) {
        //         $(".section2 .main img").animate({
        //             opacity: 0,
        //             width: "0px",
        //             height: "0px"
        //         }, 1500);
        //     }
        //     if (index == 3) {
        //         $(".section3 .main p").animate({
        //             opacity: 0,
        //             left: "-1500px"
        //         }, 0);
        //     }
        //     if (index == 4) {
        //         $(".section4 .main .box").animate({
        //             width: "1px",
        //             opacity: 0
        //         }, 1500);
        //     }
        //     if (index == 5) {
        //         $(".section5 .main .box").animate({
        //             height: "1px",
        //             opacity: 0
        //         }, 1500);
        //     }
        // },
        fitToSection: true,
        fitToSectionDelay: 1000,
        paddingTop: "100px",
        autoScroll: false
    });
    // options of fullpage end
    $("#consultTip").on("click",function(){
        if(flag == true){
            $("#fixedDialog").animate({
                height: "400px"
            },500);
            $("#consultTip").animate({
                opacity: 0
            },0);
            $("#minBtn").css("backgroundImage","url(./images/min.svg)");
            flag = false;
            return;
        }
    });
    $("#minBtn").on("click",function() {
        if(flag == true){
            $("#fixedDialog").animate({
                height: "400px"
            },500);
            $("#consultTip").animate({
                opacity: 0
            },0);
            $("#minBtn").css("backgroundImage","url(./images/min.svg)");
            flag = false;
            return;
        }
        if(flag == false){
            $("#fixedDialog").animate({
                height: "40px"
            },500);
            $("#consultTip").animate({
                opacity: 1
            },800);
            $("#minBtn").css("backgroundImage","url(./images/max.svg)");
            flag = true;
            return;
        }
    });
});

