
//array theke 000 Zero ke lada kore dekhate 

const moveZeroes=(arr)=>{
    let i=0;
    let j=arr.length - 1;

    while(j>i){
        if(arr[i] === 0){
            [arr[j], arr[i]] =[arr[i], arr[j]]
            j--;
        }else{
            i++;
        }
    }
    return arr;
}
console.log(moveZeroes([1,2,0,3,0,9,0]));

//output [ 1, 2, 9, 3, 0, 0, 0]

// Zero gulo ke eksite korar jnno 

const moveZeroes2=(arr)=>{
    for(let i=arr.length-1; i>= 0; i--){

        if(arr[i] === 0){
            arr.splice(i,1);
            arr.push(0);
        }       
    }
    return arr;
}
console.log(moveZeroes2([0,2,4,12,0]));
//output[ 2, 4, 12, 0, 0 ]