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
	
	const cityArray = [];
	users.forEach(user => { cityArray.push(user.data.city.displayName) });

	return cityArray;
};

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	
	const squareRoots = [];
	// Although this could be done as follows on one line, 
	// for readability reasons, I have used a longer version. 
	// nums.forEach(num => { squareRoots.push(Math.round(Math.sqrt(num) * 100) / 100) })

	nums.forEach(function (num) { 
		let square = Math.sqrt(num);
		square = Math.round(square * 100) / 100;
		squareRoots.push(square);
	});

	return squareRoots;
};

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	
	const resultSentences = [];
	// Case insensitive search for the str in the current sentence
	sentences.forEach(sentence => { sentence.toLowerCase().indexOf(str) !== -1 ? resultSentences.push(sentence) : resultSentences})
	
	return resultSentences;
};

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	
	const longestSides = [];

	triangles.forEach(triangle => { 
		// Reduce each array of sides to the largest (longest) and store the result
		longestSides.push(
			triangle.reduce((x, y) => (x > y ) ? x : y)) });

	return longestSides;
};
