function threeSum(arr, target) {
  //your code here
	arr.sort((a, b) => a - b);

	let sum = 1000000000;

	for(let i=0; i<arr.length; i++){
		let p1 = i+1; let p2 = arr.length-1;

		while(p1 < p2){
			let currSum = arr[i]+arr[p1]+arr[p2];

			if(target - sum < target - currSum){
				sum = currSum;
			}

			if(currSum > target){
				p2--;
			}else{
				p1++;
			}
		}
	}
	return sum;
}

module.exports = threeSum;
