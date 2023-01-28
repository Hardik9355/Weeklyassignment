// function names(){
//     return "Hardik" +this.lastname
// }
// let obj = {lastname: "Garg"}
// console.log(names.call(obj));
// bind 
// let lname ={
//     details: function(){
//         return this.a+ "Garg";
//     }
// }
// let pname ={a: "Hardik"};
// let fname = lname.details.bind(pname)
// console.log(fname())
// fname();
// apply
function lname(lastname){
    return this.a + lastname;


}
let pname = {a: "Hardik"};
let b = lname.apply(pname,["Garg"]);
console.log(b)