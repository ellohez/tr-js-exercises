export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	// Refactored - as forEach returns undefined and the forEach ternary push is an anti-pattern
	// const smallNumsArr = [];
	// nums.forEach(num => { num < 1 ? smallNumsArr.push(num) : smallNumsArr});
	// return smallNumsArr;

	return nums.filter(num => num < 1);
};

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	
	// Refactored - as forEach returns undefined and the forEach ternary push is an anti-pattern
	// const foundNames = [];
	// names.forEach(name => { name.startsWith(char) ? foundNames.push(name) : foundNames});
	// return foundNames;

	return names.filter(name => name.startsWith(char));
};

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	// Refactored - as forEach returns undefined and the forEach ternary push is an anti-pattern
	// words.forEach(word => { word.startsWith('to ') ? foundVerbs.push(word) : foundVerbs});

	return words.filter(word => word.startsWith('to '));
};

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');

	// Refactored - as forEach returns undefined and the forEach ternary push is an anti-pattern
	// const integers = [];
	// nums.forEach(num => { num % 1 === 0 ? integers.push(num) : integers});
	// return integers;

	return nums.filter(num => num % 1 === 0);
};

export function getCities(users) {
	if (!users) throw new Error('users is required');
	
	// Refactored
	// const cityArray = [];
	// users.forEach(user => { cityArray.push(user.data.city.displayName) });
	// return cityArray;

	return users.map(user => user.data.city.displayName);
};

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');

	return nums.map(num => (Math.round(Math.sqrt(num) * 100) / 100));
};

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	
	return sentences.filter(sentence => sentence.toLowerCase().indexOf(str) !== -1);
};

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');

	// Reduce each set of triangle data to a single value and return
	return triangles.map(triangle => (triangle.reduce((x, y) => (x > y ) ? x : y)));
};
