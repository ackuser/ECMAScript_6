function f(x, y, ...a) {
    return (x + y) * a.length
}

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
f(1, 2, ...params) === 9
console.log(f(1, 2, ...params) === 9)

var str = "foo"
console.log(str)
var chars = [ ...str ] // [ "f", "o", "o" ]
console.log(chars)
