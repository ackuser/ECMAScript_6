evens = [0,1,2,3,4,5]
console.log('----------------evens--------------');
console.log(evens);
console.log('----------------------------------');
odds  = evens.map(v => v + 1)
console.log('----------------odds--------------');
console.log(odds);
console.log('----------------------------------');
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
console.log('----------------pairs--------------');
console.log(pairs);
console.log('----------------------------------');
nums  = evens.map((v, i) => v + i)
console.log('----------------nums--------------');
console.log(nums);
console.log('----------------------------------');
