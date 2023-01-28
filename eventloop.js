// import fetch from "node-fetch";


async function result(){
    console.log("execution start")
    const response  = await fetch("https://api.github.com/users/Hardik9355");
    const data = await response.json()
    console.log(data)
    console.log("execution end")
}
result()
console.log("after")
console.log("okay")
