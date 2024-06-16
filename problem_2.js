function fib(num){
    var fib=[0,1];
    if (num===0){
      console.log(0) ;
    }
    else if (num===1){
      console.log(1);
    } else {
      console.log(0);
      console.log(1);
      var sum=0;
      for (i=2; i<=num; i++){
          fib[i] = fib[i - 1] +fib[i - 2];
          console.log(fib[i]);
          if (fib[i]%2===0){
              sum+=fib[i];
              console.log(sum);
          }
      }
      console.log("The sum of the fibonacci series is: ",sum);
    }
  }
  var num=10;
  fib(num);
  
  
  