let arr = [21,21,45,89,64,56,56,89,56,67];
arr.sort();
let arr1=[]
for (let i=0 ; i<arr.length;i++){
    if (arr[i] != arr[i+1]){
        arr1.push(arr[i]);
    }
}
console.log(arr1)
