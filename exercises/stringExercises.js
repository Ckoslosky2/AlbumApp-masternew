/*exercise 1*/
/*var keys = "First name :  Last Name :  ID :  ";
var names = "Chase Koslosky 82665832";

function stringToObject(keys, values){
var x = values.split(",");
  var y = {};
  if(keys.length > x.length || x.length > keys.length) {
  return -1;
  }
  for(i=0; i<keys.length; i++){
  y[keys[i]] = x[i];

  }
  return y;
  }

stringToObject(["First name:", "Last Name:" , "ID"], "Chase,Koslosky,82665832");


/*exercise 2*/
var str = "The quick brown fox jumped over the lazy dog.";
var a = "a";
var b = "b";
function replaceALL(str,a,b) {
  var indexer = str.indexOf(a);
  while(indexer != -1){
    str = str.replace(a, b);
    indexer = str.indexOf(a);
    text = str;
    return str;
    }
  }
var x = replaceALL(str);
console.log (x);


/*Exercises 3 & 4 */
/*var str = "The quick brown fox jumped over the lazy dog.";
function replaceALL(str) {
  var indexer = str.indexOf("a");
  while(indexer != -1){
    str = str.replace("a", "");
    indexer = str.indexOf("a");
    text = str;
    return str;
    }
  }
var x = replaceALL(str);
console.log (x);*/

