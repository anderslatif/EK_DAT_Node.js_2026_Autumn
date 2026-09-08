// "use strict";

// totalGlobalVariable = "Never EVER do this";

var globalVariable = "This variable is in a global scope";

// const public = "This is a public variable";

{ // block scope
    var someValue = 123;
    {
        var someValue = 456;
    }
    console.log(someValue);
}

{
    let someOtherValue = true;
    {
        let someOtherValue = false
    }
    console.log(someOtherValue);
}

// for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

