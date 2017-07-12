//Backend



function toPigLatin(userInput){
  var result;
  if(userInput.length === 0){
    alert("Please enter input");
  }else if(userInput.length === 1){
    result = singleChar(userInput);
    return result;
  } else{
    result = multiChar(userInput);
    return result;
  }
  return result;
}

function multiChar(userInput){
  var result;
  if(!isNaN(userInput)){
    return userInput;
  }else if(userInput[0] === "a" || userInput[0] === "e" || userInput[0] === "i" || userInput[0] === "o" || userInput[0] === "u"){
      result = userInput + "way";
  }else{
    alert("not starting with vowel");
  }
  return result;
}

function singleChar(userInput){
  var result;
  if(!isNaN(userInput)){
    return userInput;
  }else if(userInput === "a" || userInput === "e" || userInput === "i" || userInput === "o" || userInput === "u"){
    result = userInput + "way";
  }else if(userInput !== "a" || userInput !== "e" || userInput !== "i" || userInput !== "o" || userInput !== "u"){
    result = userInput + "ay";
  }else{
    alert("fail");
  }
  return result;
}

//User Interface
$(document).ready(function(){
  $("#translator").submit(function(event){
    var input = $("input#words").val();
    var output = toPigLatin(input);
    $("#translation").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
