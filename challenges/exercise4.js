export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	
	const foundNIndex = nums.indexOf(n);

	if((foundNIndex === nums.length - 1) || (foundNIndex === -1)) {
		// If the number is not found or is there is no next number
		return null;
	}
	
	return nums[foundNIndex + 1];
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');

	const zerosAndOnes = { 
		0: 0, 
		1: 0,
	};
	for (let i = 0; i < str.length; i++) {
		const num = str[i];
		zerosAndOnes[num] += 1;
	}

	return zerosAndOnes;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	

	if ((n < 10) && (n >= 0)) {
		return n;
	}
	// Convert the number to an array of characters
	// reverse and convert back to an integer
	const stringArray = n.toString().split("");
	const reversedString = stringArray.reverse().join("");

	return parseInt(reversedString);
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	
	const allNums = arrs.flat();
	return allNums.reduce((x, y) => x + y);
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
