// Write a function two array, return true is every value in the array has corresponding value squared
// in the second array?
// array ([1,2,3] ,[1,4,9]) true
// array ([1,2,3] ,[1,9]) false
// array ([1,2,3] ,[4,1,4]) false

function array(arr1,arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    let a = {};
    let b = {};
    for (let val of arr1){
        a[val] = (a[val] || 0 )+1 ;
    }
    for (let val of arr2 ){
        b[val]= (b[val] || 0 )+1;
    }
    for (let key in a){
        if(!(key ** 2 in b)){
            return false;
        }
        if (b[key ** 2] !== a [key]){
            return flase;
        }
    }
    return true;
}
array([1,2,3],[1,4,9]);
