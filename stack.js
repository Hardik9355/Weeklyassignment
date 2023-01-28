// import { consumers } from "stream";

let stack1 =[];
let stack2 =[];
function enqueue (a){
    stack1.push(a);
    console.log(stack1);
}
function dequeue (){
    if (stack2.length == 0){
        if(stack1.length == 0){
            console.log("Empty stack")
        }
        while(stack1.length > 0){
            let x =stack1.pop();
            stack2.push(x);
        }

    }
    console.log(stack2.pop());

}
enqueue("Hardik");
enqueue("Garg")
dequeue();
dequeue();