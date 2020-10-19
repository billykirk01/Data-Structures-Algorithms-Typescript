function quickSelect(list: number[], left: number, right: number, k: number) {
    if (left == right) //list only has one element in it
        return list[left];

    let pivotIndex = left + Math.floor(Math.random() % (right - left + 1))

    if (k == pivotIndex) {
        return list[k]
    } else if (k < pivotIndex) {
        return quickSelect(list, left, pivotIndex - 1, k)
    } else {
        return quickSelect(list, pivotIndex + 1, right, k)
    }
}

const list = [4, 9, 6, 10, 3, 45, 16, 12];

console.log(quickSelect(list, 0, list.length, 3));