const Highcharts = require('highcharts');


/*
  let json = {};
  json.series = series1;
  json.title = title;
  json.legend = legend;
  json.xAxis = xAxis;
  json.yAxis = yAxis;
  json.plotOptions = plotOptions;
  Highcharts.chart('container', json);
*/

$(function() {  // Document is ready
  // Generate the chart
  let chart = Highcharts.chart('container', {
      series: [{
          data: [1, 3, 2, 4]
      }],
    	// ... more options - see http://api.highcharts.com/highcharts
  });
}); //$(function())
