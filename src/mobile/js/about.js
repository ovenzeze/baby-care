$(document).ready(function() {
    // options of fullpage
    $("#fullpage").fullpage({
        sectionsColor: ['#e0ecfd', 'white', '#e4e4e3', 'rgb(239, 239, 240)', '#f0f0f0'],
        afterLoad: function(anchorLink, index) {
            //using index
            if (index == 1) {
                $('.section1 .main .intro').animate({
                    opacity: 1,
                    top: 0
                },1500);
            }
            if(index == 2) {
                $(".section2 .main .content ul").animate({
                    opacity: 1,
                    left: "0px"
                },1500);
                $(".section2 .main .content p").animate({
                    opacity: 1,
                    top: "0px"
                },1500);
            }
            if(index == 3) {
                $(".section3 .main img").animate({
                    opacity: 1,
                    width: "716px"
                },1500);
            }
            if(index == 4) {
                $(".section4 .content img").animate({
                    opacity: 1,
                    width: "100%"
                },1500);
                $(".section4 .content .vision").animate({
                    opacity: 1
                },3500);
                $(".section4 .content .mission").animate({
                    opacity: 1
                },3500);
                $(".section4 .content .value").animate({
                    opacity: 1
                },3500);
                $(".section4 .content .edu-idea").animate({
                    opacity: 1
                },3500);
                $(".section4 .content .manage-idea").animate({
                    opacity: 1
                },3500);
            }
        },
        onLeave: function(index, nextIndex, direction) {
            if (index == 1) {
                $('.section1 .main .intro').animate({
                    opacity: 0,
                    top: "-500px"
                },0);
            }

            if(index == 2) {
                $(".section2 .main .content ul").animate({
                    opacity: 0,
                    left: "-500px"
                },0);
                $(".section2 .main .content p").animate({
                    opacity: 0,
                    top: "-200px"
                },1500);
            }
            if(index == 3) {
                $(".section3 .main img").animate({
                    opacity: 0,
                    width: "0px"
                },0);
            }
            if(index == 4) {
                $(".section4 .content img").animate({
                    opacity: 0,
                    width: "0"
                },0);
                $(".section4 .content .vision").animate({
                    opacity: 0
                },0);
                $(".section4 .content .mission").animate({
                    opacity: 0
                },0);
                $(".section4 .content .value").animate({
                    opacity: 0
                },0);
                $(".section4 .content .edu-idea").animate({
                    opacity: 0
                },0);
                $(".section4 .content .manage-idea").animate({
                    opacity: 0
                },0);
            }
        },
        afterRender: function() {
            setInterval(function() {
                $.fn.fullpage.moveSlideRight();
            }, 5000);
        },
        fitToSection: false,
        // fitToSectionDelay: 100,
        paddingTop: "100px",
        autoScrolling: true
    });
    // options of fullpage end
});
