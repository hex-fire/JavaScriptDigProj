console.log("this. is the first line of the js");

function navigateToNewPage() {
    window.open("index2.html", "_self");
}

/* ================================================
 *   global scope and function scope
 * ================================================
*/
globalFunc();

// var globalFunc = function(){
function globalFunc() {
    test = "this is a global variable";
    var test1 = "this is a function scope variable";
}

console.log("page1:" + window.test);
// console.log(test1);

//override the system global variable
// console.info(addEventListener);
// addEventListener = 333;
// console.info(addEventListener);
// console.info(window.addEventListener);

//=================================================

function thisTestFunc(arg1, arg2) {
    var result = arg1 + arg2;
    return result;
}
var res = thisTestFunc(5, 10);

// var thisTestVar = new thisTestFunc();
console.info(thisTestFunc);

//=================================================


// function siblings() {
//     var siblings = ["John", "Liza", "Peter"];
//     function siblingCount() {
//         var siblingsLength = siblings.length;
//         return siblingsLength;
//     }
//     function joinSiblingNames() {
//         return "I have " + siblingCount() + " siblings:\n\n" + siblings.join("\n");
//     }
//     return joinSiblingNames;
// }
// alert(siblings()());

// function addLinks() {
//     for (var i = 0, link; i < 5; i++) {
//         link = document.createElement("a");
//         link.innerHTML = "Link " + i;
//         link.onclick = function (num) {
//             return function () {
//                 alert(num);
//             };
//         }(i);
//         document.body.appendChild(link);
//     }
// }
// window.onload = addLinks;

var Person = function(name){
    this.name = name;
    // var obj = {
    //     name: name
    // }

    // return this;
}

var p1 = new Person("hex");
console.log(p1.name);

p1.age = 19;
console.info(p1);

// Person.nationality = "Chinese";
Person.prototype.nationality = "Chinese";
var p2 = new Person("leon");
console.info(p2);

var p3 = Person.nationality;
console.info(p3);
