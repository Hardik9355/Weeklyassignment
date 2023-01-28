let list = ["noodles", {list:["eggs","flour","water"]}];
let deepcopy = JSON.parse(JSON.stringify(list));
deepcopy[1].list = ["5 eggs"];
console.log(list[1].list);
console.log(deepcopy[1].list)