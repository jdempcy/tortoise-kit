var Domiciles = {
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
	Mars		: [Aries, Scorpio],
	Venus		: [Taurus, Libra],
	Mercury		: [Gemini, Virgo],
	Moon		: Cancer,
	Sun         : Leo,
    Pluto       : Scorpio,
    Jupiter		: Sagittarius,
    Saturn		: Capricorn,
    Uranus		: Aquarius,
    Neptune		: Pisces		
};

var Detriments = {
	// Signs
	Aries 		: Venus,
	Taurus 		: Pluto,
	Gemini 		: Jupiter,
	Cancer 		: Saturn,
	Leo 		: Uranus,
	Virgo 		: [Jupiter, Neptune],
	Libra		: Mars,
	Scorpio 	: Venus,
	Sagittarius : Mercury,
	Capricorn 	: Moon,
	Aquarius 	: Sun,
	Pisces 		: Mercury,

	// Planets
	Mars		: [Taurus, Libra],
	Venus		: [Aries, Scorpio],
	Mercury		: [Sagittarius, Pisces],
	Moon		: Capricorn,
	Sun         : Aquarius,
    Pluto       : Taurus,
    Jupiter		: [Gemini, Virgo],
    Saturn		: [Cancer, Leo],
    Uranus		: Leo,
    Neptune		: Virgo		
};

var Exaltations = {
	// Signs
	Aries 		: Sun,
	Taurus 		: Moon,
	Gemini 		: Uranus,
	Cancer 		: Jupiter,
	Leo 		: Pluto,
	Virgo 		: undefined,
	Libra		: Saturn,
	Scorpio 	: undefined,
	Sagittarius : Neptune,
	Capricorn 	: Mars,
	Aquarius 	: Mercury,
	Pisces 		: Venus,

	// Planets
	Mars		: Capricorn,
	Venus		: Pisces,
	Mercury		: Aquarius,
	Moon		: Taurus,
	Sun         : Aries,
    Pluto       : Leo,
    Jupiter		: Cancer,
    Saturn		: Libra,
    Uranus		: Gemini,
    Neptune		: Sagittarius		
};

var Falls = {
	// Signs
	Aries 		: Saturn,
	Taurus 		: undefined,
	Gemini 		: Neptune,
	Cancer 		: Mars,
	Leo 		: Mercury,
	Virgo 		: Venus,
	Libra		: Sun,
	Scorpio 	: Moon,
	Sagittarius : Uranus,
	Capricorn 	: Jupiter,
	Aquarius 	: Pluto,
	Pisces 		: undefined,

	// Planets
	Mars		: Cancer,
	Venus		: Virgo,
	Mercury		: Leo,
	Moon		: Scorpio,
	Sun         : Libra,
    Pluto       : Aquarius,
    Jupiter		: Capricorn,
    Saturn		: Aries,
    Uranus		: Sagittarius,
    Neptune		: Gemini		
};

