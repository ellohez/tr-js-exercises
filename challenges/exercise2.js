export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	if(nums.length === 0) {
		return nums;
	};

	return nums.map(x => x ** 2);
}

export function camelCaseWords(words) {
	// Ensure that we have an array containing at least one word
	if ((words === undefined) || (words.length === 0)) throw new Error('words is required');
	// Ensure first word is simply lowercase
	let camelCaseString = words[0].toLowerCase();

	// Loop through, capitalising words, starting at the second word 
	for(let i = 1; i <  words.length; i++) {
		const capsWord = (words[i][0].toUpperCase() + words[i].substring(1));
		camelCaseString += capsWord; 
	};

	return camelCaseString;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Return the total number of subjects for all the people
	// or zero if no subjects
	let subjectCount = 0;
	for(let person of people) {
		for(let i = 0; i < person.subjects.length; i++) {
			++subjectCount;
		};
	};

	return subjectCount;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Return as soon as we find the ingredient listed
	for(let item of menu) {
		if(item.ingredients.includes(ingredient)) {
			return true;
		}
	};

	// Return false if not found in any menu items
	return false;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
}
