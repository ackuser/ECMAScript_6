function f (x, y, ...a) {
    console.log(a)
    console.log(a.length)
    return (x + y) * a.length
}
console.log(f(1, 2, "hello", true, 7))
console.log(9)
console.log(f(1, 2, "hello", true, 7) === 9)
