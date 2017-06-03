$(document).ready(function () {
    // options of fullpage
    $("#fullpage").fullpage({
        // sectionsColor: ['#1bbc9b', 'white', 'white', 'white', '#ccddff'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14','page15'],
        controlArrows: false,
        slidesNavigation: true,
        css3: true,
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            //using index
            if (index == 1) {
                $(".section1 .intro").animate({
                    height: "200px"
                }, 500);
            }
            if (index == 2) {
                $(".section2 .main .container .grid figure").animate({
                    opacity: 1,
                    height: "140px"
                }, 1500);
                $('#scrollTopBtn').animate({
                    opacity: 0
                },500);
            }
            if (index == 3) {
                $(".page1 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page1 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
                $('#scrollTopBtn').animate({
                    opacity: 1
                },500);
            }
            if (index == 4) {
                $(".page2 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page2 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 5) {
                $(".page3 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page3 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 6) {
                $(".page4 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page4 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 7) {
                $(".page5 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page5 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 8) {
                $(".page6 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page6 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 9) {
                $(".page7 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page7 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 10) {
                $(".page8 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page8 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 11) {
                $(".page9 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page9 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 12) {
                $(".page10 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page10 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 13) {
                $(".page11 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page11 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }
            if (index == 14) {
                $(".page12 .main .left .summary").animate({
                    opacity: 1,
                    left: "150px"
                }, 1000);
                $(".page12 .main .right p").animate({
                    opacity: 1,
                    right: 0
                }, 1000);
            }

        },
        onLeave: function (index, nextIndex, direction) {
            var leavingSection = $(this);

            if (index == 2) {
                $('#scrollTopBtn').animate({
                    opacity: 1
                },500);
            }
        },
        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 5000);
        },
        fitToSection: true,
        fitToSectionDelay: 1000,
        paddingTop: "100px"
    });
    // options of fullpage end
});
