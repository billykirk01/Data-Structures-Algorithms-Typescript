const arrayOne = [1, 4, 6, 3, 1, 7, 3]

const arrayTwo = [
    {
        name: "Billy",
        age: 25
    },
    {
        name: "Courtney",
        age: 23
    },
    {
        name: "Courtney",
        age: 23
    }
]

function removeDuplicates(array: any[], fieldToCheck?: string) {
    return array.filter((object, index) => {
        if (array.findIndex((_object => {
            if (fieldToCheck) {
                return object[fieldToCheck] === _object[fieldToCheck]
            } else {
                return object === _object
            }
        })) >= index) {
            return true
        } else {
            return false
        }
    })
}

console.log(removeDuplicates(arrayOne))

console.log(removeDuplicates(arrayTwo, 'name'))

