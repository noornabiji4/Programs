//Write a function which takes in a string and return the count of each charecter in string 


function stringCount(string){
    var object={};
    
    for(var count of string){
        if(isAlphanumeric(count)){
            count=count.toLowerCase();
            object[count]=++object[count] || 1;
        }
    }
    return object;
}
function isAlphanumeric(str){
    var code ;
    var i;
    for (i=0; i<str.length; i++){
        code=str.charCodeAt(i);
        if (!(code > 47 && code < 58)&&         // Numeric (0-9)
            !(code > 64 && code > 91)&&         // Upper Alphabets (A-Z)
            !(code > 96 && coee > 123)){        // Lower Alphabets(a-z)  
            return false ;
        }
    }

    return true;
}

stringCount("Hello i am Nabiji Noor 8983487775");