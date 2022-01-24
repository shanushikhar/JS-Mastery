const arr = [2, 4, 4, 6, 9, 11, 12, 12, 13, 13, 9, 14];
//  2,  4,  4,  6,  9,9, 11, 12, 12, 13,13
let sortedArr = arr.sort((a, b) => a - b);
for (let i = sortedArr.length; i > 0; i--) {
  //console.log(i, sortedArr[i - 1], sortedArr[i - 2]);
  if (sortedArr[i - 1] > sortedArr[i - 2]) {
    console.log("val ", sortedArr[i - 2]);
    break;
  }
}

// find the biggest element
// compare with the previous element
// if that is less then thats the ans

// More optimization = Yet to DO
