nums = [1,2,3,4,5,6,7,8,9,10]
fives = []
nums.forEach(v => {
  if (v % 5 === 0)
  fives.push(v)
  console.log(fives);
})
