$(document).ready(function(){
  $("#number-input").click(function(event){
    var answer=parseInt($("#answer").val());
    var calculate=divide(answer);
    event.preventDefault();
});
});

//business Logic
var divide=function(answer){
  for(i=1; i<=answer; i++){
    if(i%15===0){
      console.log("pingpong");
    }else if (i%5===0){
      console.log("pong");
    } else if(i%3===0){
      console.log("ping");
    }else{
      console.log(i);
    }
    }
  }
