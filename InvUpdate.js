
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    arr2.map((item) => {
        var itemFound = false;
        // console.log('item:', item);
        for (var i = 0; i < arr1.length; i++) {
            // console.log('item[1]', item[1]);
            // console.log('arr1[i][1]', arr1[i][1]);
            if(arr1[i][1] === item[1]){
                // console.log('found a match!');
                // such item exist then update stock
                arr1[i][0] += item[0];
                itemFound = true;
                break;
            }
        }
        // not item exist add item
        if (!itemFound) {
            arr1.push([item[0],item[1]]);
        }

    });
    console.log(arr1);
    arr1.sort(function(a,b){
        var NameA = a[1].toUpperCase();
        var NameB = b[1].toUpperCase();
        if (NameA < NameB) {
            return -1;
        }
        if (NameA > NameB) {
            return 1;
        }
        return 0;
    });
    console.log(arr1);

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
