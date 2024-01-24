export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	const smallNumsArr = [];
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] < 1) {
			smallNumsArr.push(nums[i]);
		};
	};

	return smallNumsArr;
}

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
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	const foundVerbs = [];
	for(let i = 0; i < words.length; i++) {

		if(words[i].startsWith('to ')) {
			foundVerbs.push(words[i]);
		};
	};

	return foundVerbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
}
