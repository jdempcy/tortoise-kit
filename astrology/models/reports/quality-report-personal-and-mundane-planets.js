(function() {
	var report = new Report({
		title: 'Quality Report: Personal and Mundane Planets',
		run: function(chart) {
			var output = '';

			var scores = {
				Cardinal: 0,
				Fixed: 0,
				Mutable: 0
			};

			// 2 points for quality of sign of Sun and Moon
			[Sun, Moon].forEach(function(planet) {
				scores[getQualityForSign(chart[planet].sign)]++;
				scores[getQualityForSign(chart[planet].sign)]++;
			});

			// 1 point for quality of sign of AC, MC, Mercury, Venus, Mars, Jupiter, Saturn
			[Ascendant, Midheaven, Mercury, Venus, Mars, Jupiter, Saturn].forEach(function(planet) {
				scores[getQualityForSign(chart[planet].sign)]++;
			});

			// 1 point for quality of sign of chart ruler
			var chartRulerPlanet = getRulerForSign(chart[Ascendant].sign);
			scores[getQualityForSign(chart[chartRulerPlanet].sign)]++;

			// 1 point for quality of sign of MC ruler
			var mcRulerPlanet = getRulerForSign(chart[Midheaven].sign);
			scores[getQualityForSign(chart[mcRulerPlanet].sign)]++;

			// Add scores to output
			for (var quality in scores) {
				output += quality + ': ' + scores[quality] + '\n';
			}
			output += '\n';

			// Add reports to output
			var assessments = {}, assessment = '';
			for (var quality in scores) {				
				if (scores[quality] > 6) {
					assessment = quality + 'Person';
					output += quality + ' person.\n';
				} else if (scores[quality] > 4) {
					assessment = 'AboveAverage' + quality;
					output += 'Above average ' + quality + '.\n';
				} else if (scores[quality] > 2) {
					assessment = 'Average' + quality;
					output += 'Average ' + quality + '.\n';
				} else if (scores[quality] > 0) {
					assessment = 'BelowAverage' + quality;
					output += 'Below average ' + quality + '.\n';
				} else {
					assessment = quality + 'Lacking';
					output += quality + ' lacking.\n';
				}
				assessments[quality] = assessment;
				assessments[assessment] = true;

			}

			// Populate data object
			this.data = {
				output: output,
				assessments: assessments,
				scores: scores
			};

			return output;
		}
	});
	
	ReportController.addReport(report);
})();