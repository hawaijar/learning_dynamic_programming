const cache = [0, 1, 1];
const fibo = n => {
    if (cache[n]) {
        return cache[n];
    }
    cache[n] = fibo(n - 1) + fibo(n - 2)
    return cache[n];
}

console.log(fibo(3))
console.log(fibo(4))
console.log(fibo(13))
console.log(fibo(14))
console.log(fibo(100))