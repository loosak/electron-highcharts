// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log( "Start node: " + new Date() );

//Load the modules:
const Highcharts = require('highcharts');
//require('./node_modules/highcharts/highcharts-more.js')(Highcharts);
//require('./node_modules/highcharts/modules/exporting.js')(Highcharts);

function printTime() {
	var dateTime = new Date();
	//console.log(dateTime);
	return dateTime.toLocaleTimeString();
}

// main
$("#highchartsversion").text(Highcharts.version);

setInterval(function() {
	$("#freeMem").text(process.getSystemMemoryInfo().free + " MiB");
	$("#time").text(printTime());
}, 1000);

/*
let chart = Highcharts.chart('container', {
		series: [{
				data: [1, 3, 2, 4]
		}],
		// ... more options - see http://api.highcharts.com/highcharts
});
*/

let values = [1, 3, 2, 4];
console.log("Plotting values: ", values);

let chartOptions = {
		series: [{
				data: values
		}],
};

//Render charts
$('#container').highcharts(chartOptions);
