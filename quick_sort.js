// Big O becomes O(n log n) (instead of O(n)) if pivot is random or mid element

const quicksort = array => {
    if (array.length < 2) {
        return array
    } else {
        const avg = Math.floor((array.length - 1) / 2)
        let pivot = array[avg]
        let less = []
        let greater = []

        const sorting = arr => {
            if (array[i] <= pivot) {
                less.push(array[i])
            } else if (array[i] > pivot) {
                greater.push(array[i])
            } 
        }

        for (var i = 0; i < avg; i++) {
            sorting()
        }

        for (var i = avg + 1; i < array.length; i++) {
            sorting()
        }

        return quicksort(less).concat(pivot).concat(quicksort(greater))
    }
}

console.log('quicksort2', quicksort([4, 3, 8, 7, 2]))

// page 55

// const quicksort = array => {
//     if (array.length < 2) {
//         return array
//     } else {
//         let pivot = array[0]
//         let less = []
//         let greater = []

//         for (let i = 1; i < array.length; i++) {
//             if (array[i] <= pivot) {
//                 less.push(array[i])
//             } else if (array[i] > pivot) {
//                 greater.push(array[i])
//             }
//         }

//         console.log('less', less);
//         console.log('greater', greater)

//         return quicksort(less).concat(pivot).concat(quicksort(greater))
//     }
// }

// console.log('quicksort2', quicksort([4, 3, 8, 7, 2]))