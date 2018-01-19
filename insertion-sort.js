var insert = function(array, index, value) {
    while(index >= 0 && array[index] > value) {
        array[index + 1] = array[index];
        index--;
    }   
    array[index + 1] = value; 
};

var insertionSort = function(array) {
    for(var i = 1; i <= array.length-1; i++){
        insert(array, i-1, array[i]);
    }
};

var array = [-22, 11, -99, -88, 9, -7, 42];
insertionSort(array);