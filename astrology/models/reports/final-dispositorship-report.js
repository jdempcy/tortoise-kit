(function() {
	var report = new Report({
		title: 'Final Dispositorship Report',
		run: function(chart) {
			var output = '';

			var rulershipChains = {
				Ascendant: '',
				Sun: '',
				Moon: '',
				Mercury: '',
				Venus: '',
				Mars: '',
				Jupiter: '',
				Saturn: '',
				Uranus: '',
				Neptune: '',
				Pluto: ''
			}

			Planets.all.forEach(function(planet) {
				var originalPlanet = planet;
				var planetInChart = chart[planet];
				var signRuler = Rulers[planetInChart.sign];
				var planetsIteratedOver = {Ascendant: false, Sun: false, Moon: false, Mercury: false, Venus: false, Mars: false, Jupiter: false, Saturn: false, Uranus: false, Neptune: false, Pluto: false};
				while (signRuler != planet) {
					if (planetsIteratedOver[planet]) {
						rulershipChains[originalPlanet] += 'Mutual reception.';
						break;
					}
					planetsIteratedOver[planet] = true;
					rulershipChains[originalPlanet] += planet + ' ruled by ' + signRuler + '. ';

					planet = signRuler;
					var planetInChart = chart[planet];
					signRuler = Rulers[planetInChart.sign];
				}
				if (signRuler == planet) rulershipChains[originalPlanet] += planet + ' domicile.';

			});

			for (var planet in rulershipChains) {
				output += planet + ': ' + rulershipChains[planet] + '\n';
			}

			this.data = rulershipChains;
			return output;
		}
	});
	
	ReportController.addReport(report);
})();