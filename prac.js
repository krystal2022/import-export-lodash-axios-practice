const price = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for (const num of price){
    sum += num
}
const avg = sum / price.length
console.log(sum, avg)