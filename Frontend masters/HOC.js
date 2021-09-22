const HocMethod = (input, multiply) => {
    const array = []
    for (let i = 0; i < input.length; i++) {
        array.push(multiply(input[i]))
    }

    return array
}

//const multiply = parameter => parameter * 6; // parameter is parameter


//const output = HocMethod([1, 2, 3], multiply) // passing array as argument
const output = HocMethod([1, 2, 3], inputVal => inputVal * 2 ) // annonymous function
console.log(output)
