var	Elements	= {
	// Signs
	Aries 		: Fire,
	Taurus 		: Earth,
	Gemini 		: Air,
	Cancer 		: Water,
	Leo 		: Fire,
	Virgo 		: Earth,
	Libra		: Air,
	Scorpio 	: Water,
	Sagittarius : Fire,
	Capricorn 	: Earth,
	Aquarius 	: Air,
	Pisces 		: Water,

	FireSigns	: [Aries, Leo, Sagittarius],
	EarthSigns	: [Taurus, Virgo, Capricorn],
	AirSigns	: [Gemini, Libra, Aquarius],
	WaterSigns	: [Cancer, Scorpio, Pisces], 

	// Planets
	Sun			: Fire,
	Moon		: Water,
	Mercury		: [Air, Earth],
	Mars		: Fire,
	Venus		: [Air, Earth],
	Jupiter		: Fire,
	Saturn		: [Air, Earth],
	Uranus		: Air,
	Neptune		: Water,
	Pluto		: Water,

	FirePlanets	: [Sun, Mars, Jupiter],
	EarthPlanets: [Mercury, Venus, Saturn],
	AirPlanets  : [Mercury, Venus, Uranus],
	WaterPlanets: [Moon, Neptune, Pluto]
};

function getElementForSign(sign) {
	return Elements[sign];
}
function getElementForPlanet(planet) {
	return Elements[planet];
}