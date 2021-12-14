function factorial(num){
  if (num ===1 || num === 0){
    return 1
  }else{
    return num * factorial(num - 1)
  }
}

console.log(factorial(4))


/*
process like that

factorial(4)
        ⇩  ⬆︎
  4 * factorial(3)
            ⇩   ⬆︎
    3 * factorial(2)
              ⇩   ⬆︎
      2 * factorial(1)
              ⇩   ⬆︎ 
          return 1   


and evalute down to up


*/
