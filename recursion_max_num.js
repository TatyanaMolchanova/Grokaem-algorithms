const maxNum = arr => {
    // if (arr.length == 2) {
    //     if (arr[0] > arr[1]) {
    //         return arr[0]
    //     } else {
    //         return arr[1]
    //     }
    // }

    // let lastNum = arr.pop()
    // let subMax = maxNum()

    console.log(Math.max(...arr))

    return Math.max(...arr)

}

console.log('maxNum', maxNum([1, 2, 3, 5, 4, 6]))