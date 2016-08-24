(function() {
	var report = new Report({
		title: 'Aspect 360 Degree Report',
		run: function(chart) {
			var output = '';

			
			// Iterate over array of all 360 degrees and get aspects for each one
			Signs.all.forEach(function(sign) {
				var aspects = [];
				for (var degree = 0; degree < 30; degree++) {
					aspectsForDegree = chart.getAspectsForPoint(sign, degree, 0, 0);
					aspects.push(aspectsForDegree);

					if (aspectsForDegree.length > 0) {					
						output += sign + ' ' + degree + ' (' + aspectsForDegree.length + ' aspects found)\n';
						aspectsForDegree.forEach(function(aspect) {
							output += Aspects.nouns[aspect.aspect] + ' ' + aspect.planet2 + '\n';
						});
						output += '\n'
					} else {
						output += 'No aspects found for ' + getFormattedPoint(sign, degree, 0, 0) + '\n\n';
					}

				}
			});

			output += '\n';

			// Populate data object
			this.data = {
				output: output
			};

			return output;
		}
	});
	
	ReportController.addReport(report);
})();