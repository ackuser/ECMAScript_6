function quux (strings, ...values) {
    console.log(strings[0])
    strings[0] === "foo\n"
    console.log(strings[1])
    strings[1] === "bar"
    console.log(strings.raw[0])
    strings.raw[0] === "foo\\n"
    console.log(strings.raw[1])
    strings.raw[1] === "bar"
    console.log(values[0])
    values[0] === 42
}
quux `foo\n${ 42 }bar`

console.log(String.raw `foo\n${ 42 }bar`)
console.log(String.raw `foo\n${ 42 }bar` === "foo\n42bar")
console.log(String.raw `foo\n${ 42 }bar` === "foo\\n42bar")
