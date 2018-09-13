// Write a function two array, return true is every value in the array has correspondding value squared
// in the second array?
// array ([1,2,3] ,[1,4,9]) true
// array ([1,2,3] ,[1,9]) false
// array ([1,2,3] ,[4,1,4]) false


function array(arr1,arr2){
   if(arr1.length !== arr2.length){
       return false;
   }
   for (var i=0; i<arr1.length; i++){
       var cal = arr2.indexOf(arr1[i] ** 2);
       if (cal === -1){
           return false
       }
       else {
           console.log(arr2);
           arr2.splice(cal , 1 );
           
       }
   }
    return true;
}
array([1,2,3],[1,4,9,]);