(function() {
	var report = new Report({
		title: 'Best and Worst Aspects Report',
		run: function(chart) {
			var output = '';

			var score = 0;

			var bestAspects = {};
			Planets.all.forEach(function(planet) {
				bestAspects[planet] = {};
				Planets.all.forEach(function(secondPlanet) {
					bestAspects[planet][secondPlanet] = {};
				});
			});
		

			var allAspects = chart.getAllAspectsHash();

			// Sun aspects:
			console.log(allAspects)
			// Sun Moon trine, sextile, conjunct 3
			if (allAspects[Sun][Moon][Conjunction]) {
				bestAspects[Sun][Moon][Conjunction] = true;
				score += 3;
			}
			if (allAspects[Sun][Moon][Trine]) {
				bestAspects[Sun][Moon][Trine] = true;
				score += 3;
			}
			if (allAspects[Sun][Moon][Sextile]) {
				bestAspects[Sun][Moon][Sextile] = true;
				score += 3;
			}


			// Sun conjunct Venus 3
			if (allAspects[Sun][Venus][Conjunction]) {
				bestAspects[Sun][Venus][Conjunction] = true;
				score += 3;
			}

			// Sun conjunct Jupiter 3
			if (allAspects[Sun][Jupiter][Conjunction]) {
				bestAspects[Sun][Jupiter][Conjunction] = true;
				score += 3;
			}

			// Jupiter conjunct Uranus 3
			if (allAspects[Jupiter][Uranus][Conjunction]) {
				bestAspects[Jupiter][Uranus][Conjunction] = true;
				score += 3;
			}

			
			console.log(bestAspects);

			Planets.all.forEach(function(planet) {
				Planets.all.forEach(function(secondPlanet) {
					if (Object.keys(bestAspects[planet][secondPlanet]).length > 0) {
						for (var aspect in bestAspects[planet][secondPlanet]) {
							output += planet + ' ' + Aspects.nouns[aspect] + ' ' + secondPlanet + '\n';
						}

					}
				});
			});

			output += '\nScore: ' + score;

			// Report end





			output += '\n';

			// Populate data object
			this.data = {
				output: output,
				allAspects: allAspects,
				bestAspects: bestAspects,
				score: score
			};

			return output;
		}
	});
	
	ReportController.addReport(report);
})();