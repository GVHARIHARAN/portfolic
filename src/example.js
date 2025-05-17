function one(name) {
    console.log("hi", name);

}

function two(name) {
    const he = document.getElementsByTagName('h1');
    he.innerHTML = 'hello' + name;


}


function call(callback) {
    callback('ram')
}
call(two)
call(one)

// let arr = [
//     ['a', 'b', 'c'], ['c', 'd', 'e'], ['r', 'r', 'y']
// ];
/////////////
// let count = arr.flat().reduce((num, total) => {
//     if (num[total])
//         num[total]++;
//     else
//         num[total] = 1;
//     return num;
// }

//     , {});
// console.log(count);

