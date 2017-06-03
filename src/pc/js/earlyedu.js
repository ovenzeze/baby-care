/**
 * Created by oven.zhang on 5/25/2017.
 */
/**
 * Created by oven.zhang on 5/25/2017.
 */
$(document).ready(function() {
    // options of fullpage
    $("#fullpage").fullpage({
        sectionsColor: ['rgb(162, 225, 226)', 'rgba(224, 236, 253, 0.3)', 'white'],
        afterLoad: function(anchorLink, index) {
            //using index
            if(index == 1) {
                $('.section1 .main .slogn').animate({
                    opacity: 1,
                    left: "150px"
                },1500);
            }
            if (index == 2) {
                $('.section2 .main ul').animate({
                    opacity: 1
                },1500);
                $('.section2 .main .item-content').animate({
                    opacity: 1,
                    bottom: 0
                },1500);
            }
            // if (index == 3) {
            //     $('.section3 .main .img-bg').animate({
            //         opacity: 1,
            //         width: "100%",
            //         height: "100%"
            //     },1500);
            //     $('.section3 .main .img-text').animate({
            //         opacity: 1,
            //         left: "120px",
            //         top: "120px"
            //     },1500);
            //     $('.section3 .main .img-girl').animate({
            //         opacity: 1,
            //         bottom: "0px"
            //     },2000);
            // }
            if (index == 3) {
                $('.section4 .main .img-left').animate({
                    opacity: 1,
                    left: "50px"
                },2000);
                $('.section4 .main .img-right').animate({
                    opacity: 1,
                    right: "0px"
                },2000);
                $('.section4 .main .img-middle').animate({
                    opacity: 1,
                    top: "50px"
                },1500);
            }
        },
        fitToSection: false,
        autoScrolling: false,
        paddingTop: "100px"
    });
    // options of fullpage end
    // section2 switch list
    var listData = {
        0: ["三代教育理念","自主研发专业教材","针对性教育方案"],
        1: ["早教与托班结合", "不限课时学习", "自由、灵活选择学习时间"],
        2: ["多陪护人制度", "父母、老人、朋友均可参与", "让孩子充分接触到不同的大人"],
        3: ["24小时响应，随时解决育儿问题", "随堂课程反馈","专为宝宝研发的启智游戏，锻炼宝宝各项能力"]
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
