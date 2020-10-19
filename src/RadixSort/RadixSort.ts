function findMaxLength(list: number[]) {
    let maxLength = 0;

    list.forEach((value) => {
        let length = value.toString().length;
        maxLength = length > maxLength ? length : maxLength;
    });

    return maxLength;
}

function sort(list: number[], placeValue: number): number[] {

    let queuesList: number[][] = new Array(5).fill(null);

    list.forEach((value) => {

        let queue: number[] = [];

        let digit = getDigitAtPlace(value, placeValue);

        if (queuesList[digit] != null) {
            queue = queuesList[digit];
            queue.push(value);
        } else {
            queue.push(value);
        }

        queuesList.splice(digit, 0, queue);
    })

    let sortedList: number[] = [];

    queuesList.forEach((queue) => {
        if (queue != null) {
            queue.forEach((value) => {
                sortedList.push(value);
            })
        }
    })

    return sortedList;
}

function getDigitAtPlace(value: number, placeValue: number) {
    let test = value / placeValue;
    let testMod = test % 10;
    return testMod;
}

// let list = [5250, 776, 104]

// let maxLength = findMaxLength(list);

// for (let i = 0; i < maxLength; i++) {
//     list = sort(list, Math.pow(10, i));
// }

// console.log(list);

console.log(getDigitAtPlace(104, 100));


