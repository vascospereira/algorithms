var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, indexMinValue) {
    var minValue = array[indexMinValue];
    for(var i = indexMinValue + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            indexMinValue = i;
            minValue = array[i];
        }
    } 
    return indexMinValue;
}; 

var selectionSort = function(array) {
    var indexMinValue;
    for(var i = 0; i < array.length; i++){
        indexMinValue = indexOfMinimum(array,i);
        swap(array, i, indexMinValue);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
var array = [-22, -11, -99, 88, 9, -7, 42];
selectionSort(array);