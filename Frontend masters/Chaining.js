let xxyy = [1, 2, 3, 4, 5, 6]
xxyy.filter(x => console.log(x > 3))

let xx = [1, 2, 3, 4, 5, 6]
const gt2 = num => num > 3
const filArry = xx.filter(gt2).reduce((accu, redu) => accu + redu)
const filArry2 = xx.filter(gt2).reduce((accu, redu) => accu + redu, 10)
console.log(filArry, filArry2)

// Nesting function
const add = addval => addval + 2;
const multiple = mulval => mulval * 2
const divide = divVal => divVal / 2

const Allval = divide(multiple(add(10)))
console.log(Allval)


// Doing with reducer

const OwnReducer = (array, ourFn, accumulator) => {
    for (let i = 0; i < array.length; i++) {
        accumulator = ourFn(array[i], accumulator)
    }
    return accumulator
}

const CallFn = (fn, val) => fn(val)

const valOFReduc = OwnReducer([add, multiple, divide], CallFn, 15)
console.log(valOFReduc)


// Closure
const functionCreator = () => {
    const add = val => {
        return val * 2
    }
    return add
    // OR => Anonymous fn
    // return val => {
    //     return val * 2
    // }

}

const generatedFn = functionCreator()
console.log(generatedFn(5))

// another example
const HelloClosure = () => {
    let counter = 0;
    const val = () => {
        return counter
        // return 5
    }
    return val
}

let myValClosure = HelloClosure()
console.log(myValClosure())


// Decorated function
const octify = (calfn) => {
    let counter = 0;
    const val = (input) => {
        if (counter === 0) {
            counter++
            let value = calfn(input)
            return value
        }
        return "sorry"
    }
    return val
}

const mulby2 = (inp) => {
    return inp * 2
}

const values = octify(mulby2)
console.log(values(10))
console.log(values(20))
