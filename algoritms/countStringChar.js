//Write a function which takes in a string and return the count of each charecter in string 


    function stringCount(string){
        var object={};
        var i="";
        for (i=0; i<string.length; i++){
            let count =string[i];
            if (object[count]>0){
                object[count]++;
            }
            else {
                object[count]=1;
            }
        }
        return object;
    }
    stringCount("Hello i am Nabiji Noor");