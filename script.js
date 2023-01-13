function threeSum(arr, target) {
  //your code here
	arr.sort((a, b) => a - b);

	let sum = 1000000000;

	for(let i=0; i<arr.length-2; i++){
		let p1 = i+1; let p2 = arr.length-1;

		while(p1 < p2){
			let currSum = arr[i]+arr[p1]+arr[p2];
            // console.log(Math.abs(target - sum), Math.abs(target - currSum))
            // console.log(sum, currSum);
			if(Math.abs(target - sum) >= Math.abs(target - currSum)){
				sum = currSum;
                // console.log("IN");
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
