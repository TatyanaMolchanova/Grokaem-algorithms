const findSmallest = arr => {
    let smallest = arr[0]
    let smallestIndex = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }


    return smallestIndex

}

// findSmallest([1,3,6,8,66])

// console.log('findSmallest', findSmallest([9, 45, 1,3,6,8,66]))

const selectionSort = arr => {
    let newArr = []
    while (arr.length > 0) {
        const smallest = findSmallest(arr)
        newArr.push(arr[smallest])
        arr.splice(smallest, 1)
    }
    return newArr
}



console.log('selectionSort', selectionSort([9, 45, 1,3,6,8,66]))

// console.log('res', selectionSort([5, 3, 6, 2, 10]))
