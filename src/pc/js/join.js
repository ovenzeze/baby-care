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
                // 基于准备好的dom，初始化echarts图表
                var myChart = echarts.init(document.getElementById('chartBox'));

                var colors = ['#5793f3','rgba(234, 177, 69, 0.7)'];

                var option = {
                    color: colors,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {type: 'cross'}
                    },
                    grid: {
                        right: '20%'
                    },
                    legend: {
                        data:['母婴行业市场规模','增长率']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            data: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017F','2018F']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '母婴行业市场规模',
                            min: 0,
                            max: 35000,
                            position: 'right',
                            axisLine: {
                                lineStyle: {
                                    color: colors[0]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} 万元'
                            }
                        },
                        {
                            type: 'value',
                            name: '增长率',
                            min: 0,
                            max: 20,
                            position: 'left',
                            axisLine: {
                                lineStyle: {
                                    color: colors[1]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'母婴行业市场规模',
                            type:'bar',
                            data:[6900, 7895, 9876, 11986, 12356, 13678, 14567, 16234, 19334, 22554, 25919, 30196]
                        },
                        {
                            name:'增长率',
                            type:'line',
                            yAxisIndex: 1,
                            data:[10.0, 11, 12, 13.5, 14.3, 15.2, 16.0, 16.4, 17.0, 17.5, 18.5, 19]
                        }
                    ]
                };
                // 为echarts对象加载数据
                myChart.setOption(option);
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
                    right: "0px",
                    opacity: 1
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

