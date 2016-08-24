(function() {
	var report = new Report({
		title: 'Element Report: Personal and Mundane Planets',
		run: function(chart) {
			var output = '';

			var scores = {
				Fire: 0,
				Earth: 0,
				Air: 0,
				Water: 0
			};

			// 2 points for element of sign of Sun and Moon
			[Sun, Moon].forEach(function(planet) {
				scores[getElementForSign(chart[planet].sign)]++;
				scores[getElementForSign(chart[planet].sign)]++;
			});

			// 1 point for element of sign of AC, MC, Mercury, Venus, Mars, Jupiter, Saturn
			[Ascendant, Midheaven, Mercury, Venus, Mars, Jupiter, Saturn].forEach(function(planet) {
				scores[getElementForSign(chart[planet].sign)]++;
			});

			// 1 point for element of sign of chart ruler
			var chartRulerPlanet = getRulerForSign(chart[Ascendant].sign);
			scores[getElementForSign(chart[chartRulerPlanet].sign)]++;

			// 1 point for element of sign of MC ruler
			var mcRulerPlanet = getRulerForSign(chart[Midheaven].sign);
			scores[getElementForSign(chart[mcRulerPlanet].sign)]++;

			// Add scores to output
			for (var element in scores) {
				output += element + ': ' + scores[element] + '\n';
			}
			output += '\n';

			// Add reports to output
			var assessments = {}, assessment = '';
			for (var element in scores) {				
				if (scores[element] > 6) {
					assessment = (element + 'Person');
					output += element + ' person.\n';
				} else if (scores[element] > 4) {
					assessment = 'AboveAverage' + element;
					output += 'Above average ' + element + '.\n';
				} else if (scores[element] > 2) {
					assessment = 'Average' + element;
					output += 'Average ' + element + '.\n';
				} else if (scores[element] > 0) {
					assessment = 'BelowAverage' + element;
					output += 'Below average ' + element + '.\n';
				} else {
					assessment = element + 'Lacking';
					output += element + ' lacking.\n';
				}
				assessments[element] = assessment;
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