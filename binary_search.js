
let binary_search = (arr, x) => {
    let low = 0
    let high = arr.length - 1
    console.log('high', high)
    
    

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        console.log('mid', mid)
        const guess = arr[mid]

        if (guess == x) {
            return mid
        }

        if (guess > x) {
            high = mid - 1
        } else {
            low = mid + 1
        }

    }

    return null
}



console.log('result', binary_search([1,2,3,4,5,6,70,87,91,100], 70))