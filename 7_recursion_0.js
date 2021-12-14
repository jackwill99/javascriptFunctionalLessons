// Recursion is the function that calls itself util it dosen't

function countDown(num){
  if (num ===0) return;
  console.log(num);
  countDown(num - 1)
}


countDown(10)
