let arr = []; //array bosh

arr.push("hello"); //fut element ne fund
arr.shift(); //heq elemntin e pare
arr.unshift(1); //fut element ne fillim
arr.push(1.35);
arr.push("hello");
arr.push(true);
// console.log(arr);
arr.pop(); //heq element ne fund

// console.log(arr);

let arr2 = new Array(12.4, 4, "lol", false); //krijon array te re me elem 12.4,4,"lol",fasle
let arrbosh = new Array(3); //krijon array bosh me 3 elem
// console.log(arr2);
// console.log(arrbosh);



// console.log(arr.toString()); //bashkon elem e arr ne nje string te ndare me ,

// console.log(arr2.join(" ")); //i bashkon por merr par

delete arr[2]; //fshin vleren e elem ne index
// console.log(arr);
arr[2] = "string";
arr.splice(2, 0, 1.523, true); //shtron elementet ne indexin 2 dhe fshin 0
// console.log(arr);

let merge = arr.concat(arr2); //ben merge 2 arr
// console.log(merge);

merge = arr.concat(arr2, arrbosh); //ben merge 3 arr , e kshu me rradh
// console.log(merge);

merge = arr.concat(["1", "2"]); //bashkon arr dhe si vlera
// console.log(merge);


let newArray = merge.slice(3); //krijon nje arr te re me vlera nga arr merge nga indexi i pare deri ne fund
// console.log(newArray);

newArray = merge.slice(3, 6); //merr vlerat nga indexi i pare deri tek i fundit pa perfshire ate
// console.log(newArray);
newArray.push(25);
newArray.push(100);
newArray.push('-10');

// console.log(newArray.sort());//ben sort si stringe
// console.log(newArray.reverse());//ben reverse

let numArr = [1, 5, -10, 100, 25, -50];

// console.log(numArr.sort()); //sort sipas stringeve
// console.log(numArr.sort(function (a, b) {
//     return a - b;
// })); //sort sipas vleres numerike
// console.log(numArr.sort(function (a, b) {
//     return 0.5 - Math.random()
// })); //sort random;

// console.log(Math.max.apply(null, numArr));//kthen max e arr
// console.log(Math.min.apply(null, numArr));//kthen min e arr
function object_inside_sort() {
    var cars = [{
            type: "Volvo",
            year: 2016
        },
        {
            type: "Saab",
            year: 2001
        },
        {
            type: "BMW",
            year: 2010
        }
    ];
    //mund te bejme sort dhe per ojekte brenda arrays
    console.log(cars.sort(function (a, b) {
        return a.year - b.year
    }));
    console.log(cars.sort(function (a, b) {
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    }));
}
// object_inside_sort();

function mapFunk() {
    var arr1 = [1, 4, 5, 7];
    //map function krijon nje arr te re me vlera nga arr e meparshme
    var arr2 = arr1.map((value, index, array) => {
        return value * 2;
    });
    console.log(arr2);
}
// mapFunk();

function filterFunk() {
    var arr1 = [1, 3, 4, 6];
    var arr2 = arr1.filter((value, index, arr1) => {
        return value > 3;
    });
    console.log(arr2);
}
// filterFunk();


function arrSum() {
    var arr1 = [1, 2, 3, 4];
    // The reduce() method runs a function on each array element to produce (reduce it to) a single value.
    //The reduce() method works from left-to-right in the array. See also reduceRight().
    sum = arr1.reduce((total, value, index, array) => {
        return total + value;
    });
    console.log(sum);
    sum = arr1.reduceRight((total, value, index, array) => {
        return total + value;
    });
    console.log(sum);
    //gjithashtu reduce mund te marr dhe nje vler tjeter si par qe ta shtoj ne fund
    sum = arr1.reduceRight((total, value, index, array) => {
        return total + value;
    }, 100); //kjo ktu mund te jet ca do lloj tipi
    console.log(sum);
}
// arrSum();


function arrEvery() {
    var arr = [25, 241, 124, 12];
    //every() kthen true nqs te gjitha vlerat e arr plotesojn nje kusht
    var bool = arr.every((value, index, arr) => {
        return value > 10;
    });
    console.log(bool);
}
// arrEvery();

function arrSome() {
    var arr = [25, 241, 124, 12];
    //kthen true nqs disa nga vlerat e arr e plotesojne kushtin
    var bool = arr.some((value, index, array) => {
        return value <= 0;
    });
    console.log(bool);
}
// arrSome();

function arrFind(){
    var arr = [25, 241, 124, 12];
    //kthen vleren e elem te pare te arr qe ploteson kushtin
    var bool = arr.find((value, index, array) => {
        return value <= 100;
    });
    console.log(bool);
}
// arrFind();

function arrFindIndex(){
    var arr = [25, 241, 124, 12];
    //kthen indexin e elem te pare te arr qe ploteson kushtin
    var bool = arr.findIndex((value, index, array) => {
        return value > 100;
    });
    console.log(bool);
}
arrFindIndex();