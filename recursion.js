// "Cycles may fasten work of a program. 
// Recursion can fasten work of a progrmmer.
// You choose what is important in your situation!"
const countdown = i => {
    console.log(i)

    if (i <= 0) {
        return
    } else {
        countdown(i - 1)
    }
}

// countdown(4)

const factorial = x => {
    if (x == 1) {
        return 1
    } else {
        return x *factorial(x - 1)
    }
}

// console.log('factorial', factorial(3))

// page 77

const sum = arr => {
    if (arr.length  <= 0) {
        return 0
    } else {
       return arr.shift() + sum(arr)
    }
}

console.log('sum', sum([1, 2, 3, 4]))


// const sum = arr => {
//     let total = 0;

//     if (arr.length  <= 1) {
//         return total += arr[0]
//     } else {
//         total += arr.shift() + sum(arr)
//     }
//     return total
// }

// console.log('sum', sum([1, 2, 3, 4]))

