(function() {
	var chart = new Chart({
		name: 'Jonah Dempcy',
		birthdate: 'Sun Sep 25 1983 20:48:00 GMT-0700 (EDT)',
		birthdateInMilliseconds: 433396080000,
		location: 'Malden, MA (US)',
		latitude: '71w04',
		longitude: '42n26',

		Ascendant: {
				sign: Taurus,
				degree: 26,
				minutes: 11,
				seconds: 22
		},
		Midheaven: {
				sign: Aquarius,
				degree: 2,
				minutes: 54,
				seconds: 34
		},
		Sun: {
				sign: Libra,
				degree: 2,
				minutes: 22,
				seconds: 14
		},
		Moon: {
				sign: Taurus,
				degree: 15,
				minutes: 39,
				seconds: 58
		},
		Mercury: {
				sign: Virgo,
				degree: 16,
				minutes: 29,
				seconds: 40
		},
		Venus: {
				sign: Leo,
				degree: 25,
				minutes: 8,
				seconds: 48
		},
		Mars: {
				sign: Leo,
				degree: 27,
				minutes: 31,
				seconds: 26
		},
		Jupiter: {
				sign: Sagittarius,
				degree: 5,
				minutes: 53,
				seconds: 37
		},
		Saturn: {
				sign: Scorpio,
				degree: 3,
				minutes: 7,
				seconds: 19
		},
		Uranus: {
				sign: Sagittarius,
				degree: 5,
				minutes: 50,
				seconds: 26
		},
		Neptune: {
				sign: Sagittarius,
				degree: 26,
				minutes: 32,
				seconds: 53
		},
		Pluto: {
				sign: Libra,
				degree: 28,
				minutes: 23,
				seconds: 11
		},
		NorthNode: {
				sign: Gemini,
				degree: 18,
				
		},
		Chiron: {
				sign: Gemini,
				degree: 2
		}
	});
	
	ChartController.addChart(chart);
})();