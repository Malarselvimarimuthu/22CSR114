const express = require("express");
const mongoose = require("mongoose");

const app = express();
// mongoose.connect(MONGO_URL).then(()=>{
//     console.log("MongoDB Connected Successfully");
// })

app.get('/evaluation-service/primes/',(req,res) => {

  num = 4;
  let numArray = [];
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }

    
  numArray.map((number) => {
    for (let i = 2; i<number; i++) {
        if(number % i === 0) {
            let index = numArray.indexOf(number);
            return numArray.splice(index, 1);       
        }
    }   
  });

   res.send(numArray);

});

function fibonacciRange(min, max) {
  const result = [];
  let a = 0, b = 1;

  while (b <= max) {
    if (b >= min) {
      result.push(b);
    }
    const temp = b;
    b = a + b;
    a = temp;
  }
  return result;
}

app.get('/evaluation-service/fibo',(req,res) =>{
 const minRange = 55;
 const maxRange = 10946;
 const fibInRange = fibonacciRange(minRange, maxRange);
 res.send(fibInRange); 
});


app.get('/evaluation-service/even',(req,res) =>{
    const min = 8;
    const max = 56;
    const result = [];
    for(let i=min;i<=max;i=i+2){
        result.push(i);
    }
    res.send(result);
});



app.listen(5000,()=>{
    console.log("Running in port 5000");
})