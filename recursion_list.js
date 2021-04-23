const countList = arr => {
    if (arr.length <= 0) {
        return 0
    } else {
        arr.shift();
        return 1 + countList(arr)
    }
}

console.log('countList', countList([1, 2, 3, 4]))