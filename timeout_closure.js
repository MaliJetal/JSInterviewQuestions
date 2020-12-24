
//timout function using let
function x(){
  for(let i=1;i<=5;i++){
    setTimeout(function(){
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello World");
}
x();

//timeout function using var
function x1(){
  for(let i=1;i<=5;i++){
    function closure(i){
      setTimeout(function(){
        console.log(i);
      }, i * 1000);
    }
    closure(i);
  }
  console.log("Hello World");
}
x1();