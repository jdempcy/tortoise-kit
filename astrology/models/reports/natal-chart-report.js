(function() {
	var report = new Report({
		title: 'Natal Chart Report',
		run: function(chart) {
			var output = '';
			output += chart.name + '\n';
			output += chart.birthdate + '\n';
			output += chart.location + ', ' + chart.latitude + ', ' + chart.longitude + '\n';
			this.data = chart;
			return output;
		}
	});
	
	ReportController.addReport(report);
})();