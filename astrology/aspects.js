var Trines = {
	Aries 		: [Leo, Sagittarius],
	Taurus 		: [Virgo, Capricorn],
	Gemini 		: [Libra, Aquarius],
	Cancer 		: [Scorpio, Pisces],
	Leo 		: [Sagittarius, Aries],
	Virgo 		: [Capricorn, Taurus],
	Libra		: [Aquarius, Gemini],
	Scorpio 	: [Pisces, Cancer],
	Sagittarius : [Aries, Leo],
	Capricorn 	: [Taurus, Virgo],
	Aquarius 	: [Gemini, Libra],
	Pisces 		: [Cancer, Scorpio]	
};

var TrinesHash = {
	Aries 		: {Leo: true, Sagittarius: true},
	Taurus 		: {Virgo: true, Capricorn: true},
	Gemini 		: {Libra: true, Aquarius: true},
	Cancer 		: {Scorpio: true, Pisces: true},
	Leo 		: {Sagittarius: true, Aries: true},
	Virgo 		: {Capricorn: true, Taurus: true},
	Libra		: {Aquarius: true, Gemini: true},
	Scorpio 	: {Pisces: true, Cancer: true},
	Sagittarius : {Aries: true, Leo: true},
	Capricorn 	: {Taurus: true, Virgo: true},
	Aquarius 	: {Gemini: true, Libra: true},
	Pisces 		: {Cancer: true, Scorpio: true}
}

function isTrine(planet1, planet2) {
	return trinesHash[planet1][planet2];
}

var Aspects = {
	all			: [
						Conjunction,
						Opposition,
						Trine,
						Square,
						Quintile,
						Sextile,
						Septile,
						Semisquare,
						Novile
	],

	nouns		: {
						Conjunction: 'conjunct',
						Opposition: 'opposition',
						Trine: 'trine',
						Square: 'square',
						Quintile: 'quintile',
						Sextile: 'sextile',
						Septile: 'septile',
						Semisquare: 'semisquare',
						Novile: 'novile'		
	}
}

function getAbsoluteDegree(degree, minutes, seconds, signOfDegree) {
	for (var i in Signs.all) {
		var sign = Signs.all[i];
		if (sign == signOfDegree) {
			break;
		}
		if (sign != Aries) {
			degree += 30;			
		}
	}
	degree += (minutes * 0.166);
	degree += (seconds * 0.166 * 0.166);
	return degree;
}

function isWithinOrb(x, y, orb) {
	var higherPoint = Math.max(x, y);
	var lowerPoint = Math.min(x, y);
	var distanceBetweenPoints = higherPoint - lowerPoint;
	if (distanceBetweenPoints > 180) {
		var amountPast180 = (distanceBetweenPoints - 180);
		distanceBetweenPoints = (180 - (amountPast180));
	}
	return (distanceBetweenPoints < orb);
}




// Takes two points, returns single aspect that those points make with each other
function getAspectForPoints(sign1, degree1, minutes1, seconds1, sign2, degree2, minutes2, seconds2) {
	var x = getAbsoluteDegree(degree1, minutes1, seconds1, sign1);
	var y = getAbsoluteDegree(degree2, minutes2, seconds2, sign2);
	var higherPoint = Math.max(x, y);
	var lowerPoint = Math.min(x, y);
	var distanceBetweenPoints = higherPoint - lowerPoint;

	if (distanceBetweenPoints > 180) {
		var amountPast180 = (distanceBetweenPoints - 180);
		distanceBetweenPoints = (180 - (amountPast180));
	}

	
	// console.log('Distance between ' + sign1 + degree1 + 'deg' + minutes1 + '\'' + seconds1 + '" and ' +
										// sign2 + degree2 + 'deg' + minutes2 + '\'' + seconds2 + '" is: ' + 
										// distanceBetweenPoints);
 //	Aspects.all.forEach(function(aspect) {	});

	if (isWithinOrb(distanceBetweenPoints, 0, Orbs.Conjunction)) {
		return Conjunction;
	} else if (isWithinOrb(distanceBetweenPoints, 180, Orbs.Opposition)) {
		return Opposition;
	} else if (isWithinOrb(distanceBetweenPoints, 120, Orbs.Trine) ||
			   isWithinOrb(distanceBetweenPoints, 240, Orbs.Trine)) {
		return Trine;
	} else if (isWithinOrb(distanceBetweenPoints, 90, Orbs.Square) ||
			   isWithinOrb(distanceBetweenPoints, 270, Orbs.Square)) {
		return Square;
	} else if (isWithinOrb(distanceBetweenPoints, 60, Orbs.Sextile) ||
			   isWithinOrb(distanceBetweenPoints, 300, Orbs.Sextile)) {
		return Sextile;
	}



}