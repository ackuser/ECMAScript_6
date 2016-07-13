var a = ['a1','a2']
var b = ['b1','b2']
for ( let i = 0; i < a.length; i++) {
    let x = a[i]
    console.log(x)
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
    console.log(y)
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4
console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)

