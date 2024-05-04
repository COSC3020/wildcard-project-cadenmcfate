// The following program determines if a given set of integer values and a binary operation is a group. 
// At this stage, to avoid infinite sets, we will only be concerned with modular addition and modular multiplication.
// For the definition of a group and some examples, view the README.

// Parameters: isGroup(array of integers, integer modular boundary, string operation ('+' or '*'));

function isGroup(set, modVal, operation) {
    if (set.length < 1) return 0;
    if (operation !== '+' && operation !== '*') return console.error('Invalid operation');
    let e = identity(set, modVal, operation); // e = [boolean,identity value]
    return e[0] && closure(set, modVal, operation) && associativity(set, modVal, operation) && inverses(set, modVal, operation, e[1]);
}
function op(a, b, modVal, operation) { // Ex: op(a,b,5,'+') will return a+b mod 5.
    if (operation === '+') {
        return (a+b) % modVal;
    } else {
        return (a*b) % modVal;
    }
}
function closure(set, modVal, operation) { // n^2 complexity.
    for (let i = 0; i < set.length; i++) {
        for (let j = 0; j < set.length; j++) {
            if (!set.includes(op(set[i],set[j], modVal, operation))) return 0;
        }
    }
    return 1;
}
function associativity(set, modVal, operation) { //n^3 complexity
    //Obviously addition and multiplication are already known to be associative, but with the goal of 
    //increasing the scope of this program in the future, we will be thorough.
    for (let i = 0; i < set.length; i++) {
        for (let j = 0; j < set.length; j++) {
            for (let k = 0; k < set.length; k++) {
                LHS = op(set[i],op(set[j],set[k],modVal,operation),modVal,operation);
                RHS = op(op(set[i],set[j],modVal,operation),set[k],modVal,operation);
                if (LHS != RHS) return 0;
            }
        }
    }
    return 1;
}
function identity(set, modVal, operation) {
    //We could just check if the set contains 0 or 1 for additive identity or multiplicative identity,
    //But again, we will be thorough.
    for (let e = 0; e < set.length; e++) {
        let identityFound = [1,set[e]];
        for (let a = 0; a < set.length; a++) {
            if (set[a] != op(set[e],set[a],modVal,operation) 
                || set[a] != op(set[a],set[e],modVal,operation)) {
                identityFound = [0,0];
            }
        }
        if (identityFound[0]) return identityFound;
    }
    return [0,0];
}
function inverses(set, modVal, operation, identity) {
    for (let a = 0; a < set.length; a++) {
        let inverseFound = false;
        for (let ai = 0; ai < set.length; ai++) {
            if (identity == op(set[a],set[ai],modVal,operation) && identity == op(set[ai],set[a],modVal,operation)) {
                inverseFound = true;
            }
        }
        if (!inverseFound) return 0;
    }
    return 1;
}

//Closure testing:
console.assert(closure([0,1,2,3,4], 5, '+') == 1);
console.assert(closure([0,1,2,3,4], 6, '+') == 0);
console.assert(closure([0,1,2,3], 6, '*') == 0);
console.assert(closure([0,1,3,7,9], 10, '*') == 1);
//Associativity testing:
console.assert(associativity([0,1,2,3,4], 5, '+') == 1);
console.assert(associativity([0,1,2,4], 8, '*') == 1);
//Identity testing:
console.assert(identity([0,1,2,3,4], 5, '+')[0] == 1);
console.assert(identity([1,2,3,4], 5, '+')[0] == 0);
console.assert(identity([0,2,3], 4, '*')[0] == 0);
console.assert(identity([0,1,5], 12, '*')[0] == 1);
//Inverses testing:
console.assert(inverses([0,1,2,3,4], 5, '+', 0) == 1);
console.assert(inverses([0,1], 2, '*', 1) == 0);
console.assert(inverses([0,1,2,6,4], 8, '*',1) == 0);
console.assert(inverses([1,3,5,7], 8, '*',1) == 1);
//Group testing:
console.assert(isGroup([0,1,2,3,4], 5, '+') == 1);
console.assert(isGroup([1,3,5,7], 8, '*') == 1);
console.assert(isGroup([1,2,3,4,5,6,7,8,9,10], 11, '*') == 1);
console.assert(isGroup([0,1,2,3], 4, '*') == 0);
console.assert(isGroup([1,3,4], 6, '+') == 0)