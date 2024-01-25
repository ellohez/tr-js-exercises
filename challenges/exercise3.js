export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	const smallNumsArr = [];
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] < 1) {
			smallNumsArr.push(nums[i]);
		};
	};

	return smallNumsArr;
};

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	
	const foundNames = [];
	for(let i = 0; i < names.length; i++) {
		if(names[i][0] === char) {
			foundNames.push(names[i]);
		};
	};

	return foundNames;
};

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	const foundVerbs = [];
	for(let i = 0; i < words.length; i++) {

		if(words[i].startsWith('to ')) {
			foundVerbs.push(words[i]);
		};
	};

	return foundVerbs;
};

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');

	const integers = [];
	for(let i = 0; i < nums.length; i++) {
		if((nums[i] % 1) === 0) {
			integers.push(nums[i]);
		};
	};

	return integers;
};

export function getCities(users) {
	if (!users) throw new Error('users is required');
	
	const cityArray = [];
	for(let i = 0; i < users.length; i++) {
		cityArray.push(users[i].data.city.displayName);
	};

	return cityArray;
};

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	
	const squareRoots = [];
	for(let i = 0; i < nums.length; i++) {
		let square = Math.sqrt(nums[i]);
		square = Math.round(square * 100) / 100;
		squareRoots.push(square);
	};

	return squareRoots;
};

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	
	const resultSentences = [];
	for(let i = 0; i < sentences.length; i++) {
		if(sentences[i].toLowerCase().indexOf(str) !== -1) {
			resultSentences.push(sentences[i]);
		};
	};
	
	return resultSentences;
};

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here!
};
