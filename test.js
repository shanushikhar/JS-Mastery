class myArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    add(x) {
        this.data[this.length] = x
        return this.length++
    }

    pop() {
        delete this.data[this.length - 1]
        return this.length--
    }

    deleteSpecific(i) {
        delete this.data[i]
        return this.length--
    }
}

const qwer = new myArray();
qwer.add('sigma')
qwer.add('me')
qwer.add('hello')
qwer.add('world')
qwer.add('wide')
console.log(qwer)
qwer.pop()
qwer.pop()
console.log(qwer)
qwer.deleteSpecific(1)
console.log(qwer)

// reverse a string
function reverseStr(str) {
    // console.log(str.split(''))
    // console.log(str.split(' '))
    // return str.split('').reverse().join('')
    let y = str.split(' ').map(res => {
        return res.split('').reverse().join('')
    }).join(' ')
    console.log(y)

    let asdf = []
    for (let i = str.length; i >= 0; i--) {
        asdf.push(str[i])
    }
    console.log(asdf.join(''))
}

reverseStr('Hi my name is Bangy')

function mergeSortedArray(arr1, arr2) {
    let sortedArray = []
    let x = arr1.sort((a, b) => {
        return a > b
    })
    console.log(x)
    let y = arr2.sort((a, b) => {
        return a > b
    })
    console.log(y)
    sortedArray.push(x)
    sortedArray.push(y)
    console.log(sortedArray)
}

mergeSortedArray([1, 3, 7], [4, 2, 6])