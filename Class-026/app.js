let n = [4,8,9,28,3,2]
function linear(n, target){
    for(let i=0; i<n.length;i++){
    if(n[i] == target) return i
   
}
 return -1
}

let result = linear(n, 1)
console.log(result)