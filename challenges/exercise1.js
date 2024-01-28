export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	return person.city.toLowerCase() === "manchester";
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	const capacity = 40;
	return Math.ceil(people / capacity);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	let sheepCount = 0;
	for(const item of arr) {
		if(item.toLowerCase() === "sheep") {
			++sheepCount;
		}
	}

	return sheepCount;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Test if 2nd character is a letter or a number.
	const noExtraLetters = !Number.isNaN(parseInt(person.address.postCode[1]));
	// Return true if the postcode starts with only one letter at the start === 'M'
	let isMPostCode = ((person.address.postCode[0].toLowerCase() === 'm') && (noExtraLetters))
	
	return isMPostCode;
}
