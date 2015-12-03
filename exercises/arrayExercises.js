
/*var arr = [10, 15, 20, 25, 30];*/

/*arr.splice(0, 0, -10); add -10 to beginning*/

/*arr.splice(arr.length, 0, -20); add -20 to end*/

/*arr.splice(2, 0, 1, 2, 3); add 1, 2 and 3 between 15 and 20.*/

/*arr.splice(arr.length, 0, 4, 5, 6); add 4, 5 and 6 to the end*/

/*arr.splice(0, 1); remove the first element */

/*arr.splice(1, 4); remove the last 4 elements*/

/*arr.splice(0 , 3, 4, 5, 6); replace first three elements*/

/*arr.splice(0, arr.length); Clears the array*/


/*console.log(arr);*/

function addOne(value, index, array) {
return value + 1;
 }

 var arr = ["2", "4", "9", "10"];
 var newArr = arr.map(addOne);
console.log(newArr);

/*var x = ["whoa", "where is the", "brownian motion?"]
x = x.split(,);
console.log(x);*/
