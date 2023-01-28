for(var i=0;i<3;i++){
    // console.log(i);
    setTimeout(()=>console.log(i),0 //output 3 3 3 because we are printing i in the the console first we initialize the value of i = 0 and we are using 
    // settimeout function which runs only in the speicfic time if we did not use this function directly print we get output 0 1 2 settimeout helps us to
    // execute the code in the specific block. when the loop runs it increment the value due to settimeout function . In this we are using var. In settimeout 
    // if the varible is var it does not accept and then the its value become 3. With var we have a function scope, and only one shared binding for all of your loop iterations
    )
    // console.log(i)
    }
    for(let i=0;i<3;i++){
        setTimeout(()=>console.log(i),0
        )
        }
        // in this we are using let which allows the settimeout to change the value. With let you 
        // have a block scope and when used in the for loop you get a new binding for each