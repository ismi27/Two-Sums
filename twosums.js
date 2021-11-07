function twoSum(nums, target) {
    if (nums.length < 2) {
      return [];
    }
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }
  var example1 = twoSum([2,7,11,15],13);
  console.log(example1);

  var example2 = twoSum([3,2,4],6);
  console.log(example2);

  var example3 = twoSum([3,3],6);
  console.log(example3);

  var example4 = twoSum([1,4,2,1,7,3],3);
  console.log(example4);