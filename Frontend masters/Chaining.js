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
    for (let i = 0; i < array.length; i++){
        accumulator = ourFn(array[i],accumulator)
    }
    return accumulator
}

const CallFn = (fn,val) => {
    return fn(val)
}

const valOFReduc = OwnReducer([add, multiple, divide], CallFn, 10)
console.log(valOFReduc)
