
// hoisting
getRandomInt(5, 10);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

                            
                            // string, function
function genericActionPerformer(name, action) {
    // express does a lot handling, url parsing b labladsjdssfjk
    return action(name);
}

// Elias, playing guitar
/* assignment
    Create a function called playingGuitarAction. 
    Use the genericActionPerformer to console log: Elias likes to play guitar
*/

function playingGuitarAction(name) {
    return `${name} likes to play guitar`;
}

console.log(genericActionPerformer("Elias", playingGuitarAction));

// Magnus, watch movies
/* assignment
    Create an arrow function this time called watchingMoviesAction
 */
const watchingMoviesAction = (name) => {
    return `${name} likes to watch movies`
};

console.log(genericActionPerformer("Magnus", watchingMoviesAction));

// callback function

// Jacob, sail
// assignment; do the same as above as a one-liner below... it should log: Jacob likes sailing
console.log(genericActionPerformer("Jacob", (name) => `${name} likes sailing`));
