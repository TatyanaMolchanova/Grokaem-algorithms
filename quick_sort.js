function quickSort(arr) {

    if (arr.length < 2) return arr;

    let min = 1;
    let max = arr.length - 1;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    let pivot = arr[rand];
    const left = [];
    const right = [];

    arr.splice(arr.indexOf(pivot), 1);

    // console.log('splice', arr.splice(arr.indexOf(pivot), 1))
    
    arr = [pivot].concat(arr);
    console.log('pivot', pivot)
    console.log('arr', arr)

    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return quickSort(left).concat(pivot, quickSort(right));
  }

  console.log('quickSort', quickSort([4, 3, 8, 7, 2]))







// Big O becomes O(n log n) (instead of O(n)) if pivot is random or mid element

// const quicksort = array => {
//     if (array.length < 2) {
//         return array
//     } else {
//         const avg = Math.floor((array.length - 1) / 2)
//         let pivot = array[avg]
//         let less = []
//         let greater = []

//         const sorting = arr => {
//             if (array[i] <= pivot) {
//                 less.push(array[i])
//             } else if (array[i] > pivot) {
//                 greater.push(array[i])
//             } 
//         }

//         for (i = 0; i < avg; i++) {
//             sorting()
//         }

//         for (i = avg + 1; i < array.length; i++) {
//             sorting()
//         }

//         return quicksort(less).concat(pivot).concat(quicksort(greater))
//     }
// }

// console.log('quicksort2', quicksort([4, 3, 8, 7, 2]))

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