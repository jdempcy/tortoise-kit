
var Rulers = {
	// Signs
	Aries 		: Mars,
	Taurus 		: Venus,
	Gemini 		: Mercury,
	Cancer 		: Moon,
	Leo 		: Sun,
	Virgo 		: Mercury,
	Libra		: Venus,
	Scorpio 	: Pluto,
	Sagittarius : Jupiter,
	Capricorn 	: Saturn,
	Aquarius 	: [Saturn, Uranus],
	Pisces 		: Neptune,

	// Planets
	Mars		: Aries,
	Venus		: [Taurus, Libra],
	Mercury		: [Gemini, Virgo],
	Moon		: Cancer,
	Sun         : Leo,
    Pluto       : Scorpio,
    Jupiter		: Sagittarius,
    Saturn		: Capricorn,
    Aquarius	: Uranus,
    Neptune		: Pisces
};

var Corulers = {
	// Signs
	Scorpio		: Mars,
	Aquarius	: Saturn,
	Pisces		: Jupiter,

	// Planets
	Mars		: Scorpio,
	Saturn		: Aquarius,
	Jupiter		: Pisces
};

function getRulerForSign(sign) {
	return Rulers[sign];
}

