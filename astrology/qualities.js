var	Qualities	= {
	Aries 		: Cardinal,
	Taurus 		: Fixed,
	Gemini 		: Mutable,
	Cancer 		: Cardinal,
	Leo 		: Fixed,
	Virgo 		: Mutable,
	Libra		: Cardinal,
	Scorpio 	: Fixed,
	Sagittarius : Mutable,
	Capricorn 	: Cardinal,
	Aquarius 	: Fixed,
	Pisces 		: Mutable		
};

function getQualityForSign(sign) {
	return Qualities[sign];
}