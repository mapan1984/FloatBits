import Float from './float.js'

let f = new Float()

// 规格化
console.log(f.sign)
console.log(f.exp)
console.log(f.frac)
console.log(f.value)

// 非规格化 0
f.bits = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
]
console.log(f.sign)
console.log(f.exp)
console.log(f.frac)
console.log(f.value)

// 非规格化 -0
f.bits = [
    1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
]
console.log(f.sign)
console.log(f.exp)
console.log(f.frac)
console.log(f.value)

// -Infinity
f.bits = [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
]
console.log(f.sign)
console.log(f.exp)
console.log(f.frac)
console.log(f.value)

// Infinity
f.bits = [
    0, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
]
console.log(f.sign)
console.log(f.exp)
console.log(f.frac)
console.log(f.value)

// NaN
f.bits = [
    0, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1,
]
console.log(f.sign)
console.log(f.exp)
console.log(f.frac)
console.log(f.value)
