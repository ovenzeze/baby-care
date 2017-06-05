$(document).ready(function() {
    // options of fullpage
    $("#fullpage").fullpage({
        // sectionsColor: ['#1bbc9b', 'rgb(240, 240, 240)', 'white', 'white', '#ccddff'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
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
                    right: "100px",
                    opacity: 1
                }, 1500);
                $(".section2 .image-bg").animate({
                    bottom: "0px",
                    opacity: 1
                }, 1500);
            }
            if (index == 3) {
                $(".section3 .left .branch1").animate({
                    right: "-50px",
                    opacity: 1
                }, 200);
                $(".section3 .left .branch2").animate({
                    right: "0px",
                    opacity: 1
                }, 200);
                $(".section3 .left .branch3").animate({
                    right: "-60px",
                    opacity: 1
                }, 200);

                $(".section3 .right .branch1").animate({
                    left: "-90px",
                    opacity: 1
                }, 200);
                $(".section3 .right .branch2").animate({
                    left: "0px",
                    opacity: 1
                }, 200);
                $(".section3 .right .branch3").animate({
                    left: "-60px",
                    opacity: 1
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
        // onLeave: function(index, nextIndex, direction) {
        //     var leavingSection = $(this);
        //
        //     if (index == 1) {
        //         $(".section1 .intro").animate({
        //             height: "0px"
        //         }, 0);
        //     }
        //     if (index == 2) {
        //         $(".section2 .title").animate({
        //             top: "-200px",
        //             opacity: 0
        //         }, 0);
        //         $(".section2 .kinder").animate({
        //             left: "-700px",
        //             opacity: 0
        //         }, 0);
        //         $(".section2 .earlyedu").animate({
        //             right: "-700px",
        //             opacity: 0
        //         }, 0);
        //     }
        //     if (index == 3) {
        //         $(".section3 .left .branch1").animate({
        //             right: "-500px"
        //         }, 0);
        //         $(".section3 .left .branch2").animate({
        //             right: "-300px"
        //         }, 0);
        //         $(".section3 .left .branch3").animate({
        //             right: "-360px"
        //         }, 0);
        //
        //         $(".section3 .right .branch1").animate({
        //             left: "-490px"
        //         }, 0);
        //         $(".section3 .right .branch2").animate({
        //             left: "-400px"
        //         }, 0);
        //         $(".section3 .right .branch3").animate({
        //             left: "-460px"
        //         }, 0);
        //     }
        //     if (index == 4) {
        //         $(".section4 .left").animate({
        //             left: "-700px",
        //             opacity: 0
        //         }, 0);
        //         $(".section4 .center").animate({
        //             bottom: "-700px",
        //             opacity: 0
        //         }, 0);
        //         $(".section4 .right").animate({
        //             right: "-700px",
        //             opacity: 0
        //         }, 0);
        //     }
        // },
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
});
