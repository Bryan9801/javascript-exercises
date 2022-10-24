const removeFromArray = function(inputArray,element) {    
    let filterArray = [...arguments].slice(1);
    const outputArray = inputArray.filter(elem => filterArray.includes(elem) == false);
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
