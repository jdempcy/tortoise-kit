(function() {
	var report = new Report({
		title: 'All Aspects Report',
		run: function(chart) {
			var output = '';

			var output = '';
			var allAspects = chart.getAllAspects();
			allAspects.forEach(function(aspect) {
			    output += aspect.planet1 + ' ' + Aspects.nouns[aspect.aspect] + ' ' + aspect.planet2 + '\n';
			});

			

			output += '\n';

			// Populate data object
			this.data = {
				output: output,
				allAspects: allAspects
			};

			return output;
		}
	});
	
	ReportController.addReport(report);
})();