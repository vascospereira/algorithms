var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    var i = p;
    for(var j = p; j < r; j++){
        if(array[j] <= array[r]){
            swap(array, j, i);
            i++;
        }
    }
    swap(array, j, i);
    return i;
};

var quickSort = function(array, p, r) {
    if(p < r){
        var q = partition(array, p, r);
        quickSort(array, p, q - 1);
        quickSort(array, q + 1, r);
    }
};

var array = [9, 7, -5, 11, 12, -2, 14, 0, 10, 7];
quickSort(array, 0, array.length - 1);

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);