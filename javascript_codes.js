function removeDuplicates(arr){
   return arr.filter((k,v)=> arr.indexOf(k)===v)
}

const numbers = [1,2,3,4,5,5,6];

const uniqueNumbers =removeDuplicates(numbers);

console.log(uniqueNumbers);