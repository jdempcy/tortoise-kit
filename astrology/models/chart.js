function Chart(options) {
	for (var key in options) {
		this[key] = options[key];
	}
	this.name = options.name;
	
	this.getAspectsForPlanet = function(planetID) {
		var aspectedPlanet = this[planetID];
		var chart = this;
		var aspects = [];
		Planets.all.forEach(function(id) {
			if (planetID == id) return;
			var planet = chart[id];
			var aspect = getAspectForPoints(aspectedPlanet.sign, aspectedPlanet.degree, aspectedPlanet.minutes, aspectedPlanet.seconds,
											planet.sign, planet.degree, planet.minutes, planet.seconds);
			if (aspect) {
				// console.log('Aspect between ' + planetID + ' and ' + id + ': ' + aspect);				
				aspects.push({
					planet1: planetID,
					planet2: id,
					aspect: aspect
				})
			}
		});

		return aspects;
	}

	this.getAllAspects = function() {
		var $this = this;
		var allAspects = [];
		Planets.all.forEach(function(planet) {
			var aspects = $this.getAspectsForPlanet(planet);
			// console.dir(aspects);
			aspects.forEach(function(aspect) {
				// console.dir(aspect);
				allAspects.push(aspect);
			})

		});
		return allAspects;
	}
	this.getAllAspectsHash = function() {
		var $this = this;
		var allAspects = {};
		Planets.all.forEach(function(planet) {
			allAspects[planet] = {};
			Planets.all.forEach(function(secondPlanet) {
				allAspects[planet][secondPlanet] = {};
			});
		
			var aspects = $this.getAspectsForPlanet(planet);
			// console.dir(aspects);
			aspects.forEach(function(aspect) {
				if (allAspects[planet][aspect.planet2] == undefined) {
					allAspects[planet][aspect.planet2] = {};
				} 
				allAspects[planet][aspect.planet2][aspect.aspect] = true;
			})

		});
		return allAspects;
	}

	// Takes one point, returns all aspects in chart for that point
	this.getAspectsForPoint = function(sign, degree, minutes, seconds) {
		var chart = this;
		var planetID = getFormattedPoint(sign, degree, minutes, seconds);
		var aspects = [];
		Planets.all.forEach(function(id) {
			var planet = chart[id];
			var aspect = getAspectForPoints(sign, degree, minutes, seconds,
											planet.sign, planet.degree, planet.minutes, planet.seconds);
			if (aspect) {
				// console.log('Aspect between ' + planetID + ' and ' + id + ': ' + aspect);				
				aspects.push({
					planet1: planetID,
					planet2: id,
					aspect: aspect
				})
			}
		});
		return aspects;
	}

};
