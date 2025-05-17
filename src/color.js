const wraps = document.getElementsByClassName('wrap');
const h3s = document.getElementsByClassName('h3');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function color() {
    let hextag = '#';
    for (let i = 1; i <= 6; i++) {
        hextag += randcolor();
    }

    // Apply the generated hex color to each 'wrap' element's background
    for (let i = 0; i < wraps.length; i++) {
        wraps[i].style.backgroundColor = hextag;
    }

    // Apply the hex value to each 'h3' element's innerText
    for (let i = 0; i < h3s.length; i++) {
        h3s[i].innerText = hextag;
    }

    // console.log(hextag); // Uncomment if you want to log the hex color
}

function randcolor() {
    let rand = Math.floor(Math.random() * 16);
    return hex[rand];
}


// let arr = () => {
//     for (let val of ar) {
//         return val;
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let sum = (arr)=> {

//     let a = 0
//     for (let valu of arr) {
//         a += valu
//     }
//     return a

// }
// console.log(sum(arr));


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// let sum = (arr) => {
//     let multi = 1
//     for (let valu of arr) {
//         multi *= valu

//     }
//     return multi
// }
// console.log(sum(arr));


// factorial

// function fact(n) {
//     if (n == 1)
//         return n
//     return n * fact(n - 1)
// }
// console.log(fact(3));

// speard operator
// let sum = (...args) => {
//     let add = 0
//     for (let val of args) {
//         add += val
//     }
//     return args
// }
// console.log(sum(1,2,3,4,4,4,5,5));


// let sum = (...ar) => {
//     let a = 1
//     for (let val of ar) {
//         a *= val
//     }
//     return a
// }
// console.log(sum(2,3,));
// document.addEventListener('DOMContentLoaded', function() {
//     const btnn = document.getElementsByClassName('btn');

// // Loop through all elements with class 'btn' and add event listeners
//     for (let i = 0; i < btnn.length; i++) {
//         btnn[i].addEventListener('click', function () {
//             const child = document.createElement('h3');
//             child.innerHTML = 'hello';

//             const hed = document.getElementById("he");
//             hed.appendChild(child);
//         });
//     }
// });
// let arr = [1, 2, 3, 4, 5]
// let sum = (arr) => {
//     let a = 0
//     for (let val of arr) {
//         a += val
//     }
//     return a
// }
// console.log(sum(arr));

let fact = (n) => {
    if (n == 1)
        return n
    return n * fact(n - 1)
}
console.log(fact(5));




