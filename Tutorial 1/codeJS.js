$("#btnColumns").click(function(){
    columns();
});

$("#btnLines").click(function(){
    lines();
});

$("#btnPie").click(function(){
    pie();
});

$("#btnDatabase").click(function(){
    dataDB();
});

$("#btnTest").click(function(){
    $(".modal-header").css("background-color", "#dc3545");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Test graphic");
    $("#modal-1").modal("show");

    test();
});


function columns(){
    Highcharts.chart('graphics-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Column graphics with depp'
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            title: {
                text: 'Number of cellphones per brand'
            },
        },
        series: [{
            name: 'Mobiles',
            colorByPoint: true,
            data: [
                {
                    name: 'Samsung',
                    y: 5,
                    drilldown:'samsung'
                },
                {
                    name: 'Xiaomi',
                    y: 6,
                    drilldown:'xiaomi'
                },
                {
                    name: 'Motorola',
                    y: 4,
                    drilldown:'motorola'
                },
            ]
        }],
        drilldown: {
            series:[
                {
                    id:'samsung',
                    data:[
                        ['Galaxy S10',10],
                        ['Galaxy S10+',3],
                        ['Galaxy S20', 40],
                        ['Galaxy S22fe',1],
                        ['Galaxy A8',2],
                    ]
                },
                {
                    id:'xiaomi',
                    data:[
                        ['mi 10', 30],
                        ['mi 11',4],
                        ['mi 10 lite', 12],
                        ['mi 7',5],
                        ['mi 8',2],
                        ['mi 5',1],
                    ]
                },
                {
                    id:'motorola',
                    data:[
                        ['Moto 6', 40],
                        ['Moto 3',6],
                        ['Moto 1', 1],
                        ['Moto 3',4]                        
                    ]
                }
            ]
        },
    });
}

function lines(){
    Highcharts.chart('graphics-container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Employment growth by areas - Solar Energy'
        },
        xAxis: {
            allowDecimals: false
        },
        yAxis: {
            title: {
                text: 'Numbers of employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                pointStart: 2010
            }
        },
        series:[
            {
                name: 'Installation',
                data: [1000, 2000, 3000, 3500]
            },
            {
                name: 'Manufacturing',
                data: [1880, 2580, 3900, 4500]
            },
            {
                name: 'Sales',
                data: [780, 2000, 3100, 3700]
            }
        
        ],
    });

}

function dataDB(){}

function pie(){
    Highcharts.chart('graphics-container', {
        chart: {
            type: 'pie',
            plotBackground: '#f8f9fa',
            plotBorderWidth: 1,
            plotShadow: false
        },
        title: {
            text: 'Web Browsers. Market Share. January 2018.'
        },
        tootip: {
            pointFormat: '<b>{series.name} : </b> {point.percentage:.2f}%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> {point.percentage:.2f}%'
                },
            }
        },
        series: [{
            name:'Branches',
            colorByPoint: true,
            data: 
            [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            },
            {
                name: 'IE',
                y: 11.84,
            },
            {
                name: 'Edge',
                y: 10.85,
            },
            {
                name: 'Safari',
                y: 4.77,
            },
            {
                name: 'Firefox',
                y: 3.32,
            },
            {
                name: 'Opera',
                y: 2.91,
            },
            {
                name: 'Others',
                y: 7.23,
            }
        ]
        }]
    })
}


//Tutorial with Highcharts

function test(){
    getThirdFormChart();
}

function getFirstFormChart(){
    // First chart
    Highcharts.chart('modal-container', {
        chart: {
            type: 'line'
        },
        title: { 
            text: 'Valores mensuales',
        },
        xAxis:{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [8, 13, 4, 11, 6, 9, 14, 5, 10, 7, 3, 12]
        }],
    });
}

function getSecondFormChart(){
    // Second form
    Highcharts.chart('modal-container', {
        xAxis: {
            minPadding: 0.05,
            maxPadding: 0.05,
        },
        series:[{
            data: [
                [0,   -0.2],
                [1,   0.8],
                [2,   0.6],
                [3,   1.1],
                [4,   0.9],
                [5,   0.5],
                [6,   0.4],
                [7,   0.1],
                [8,   0.2],
                [9,   0.2],
                [10,   0.2],
                [11,   0.6]
            ]
        }],
    });
}

function getThirdFormChart(){
    //Third Form
    Highcharts.chart('modal-container', {
        chart: {
            type: 'column'
        },
        xAxis:{
            categories:['Red', 'Green', 'Black']
        },
        series:[{
            data: [
                {
                    name: 'Color 1',
                    color: '#ff0031',
                    y:10
                },
                {
                    name: 'Color 2',
                    color: '#28a745',
                    y:3
                },
                {
                    name: 'Color 3',
                    color: 'black',
                    y:6
                },
            ],
        }]
    });
}