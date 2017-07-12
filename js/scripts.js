//Backend

function phraseHandler(userInput){
  var phraseArray = userInput.split(" ");
  var outPhrase = "";
  for(i = 0; i < phraseArray.length; i++){
    outPhrase += toPigLatin(phraseArray[i]) + " ";
  }
  return outPhrase;
}

function toPigLatin(userInput){
  var result;
  if(!/.+/.test(userInput)){
    alert("Please enter input");
    result = "Try again";
  }else if(/^.{1}$/.test(userInput)){
    alert("single");
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
  var nums = /[1234567890]+/;
  var vowels = /[aeiou]/;
  var vowelsy = /[aeiouy]/;
  var qtest = /.*q/;
  var utest = /u.*/;

  if(nums.test(userInput)){
    return userInput;
  }else if(vowels.test(userInput[0])){
    result = userInput + "way";
  }else{
    var shifted = userInput.slice(0,1);
    userInput = userInput.slice(1, userInput.length);
    while(!vowelsy.test(userInput[0])){
      shifted += userInput.slice(0,1);
      userInput = userInput.slice(1, userInput.length);
    }
    if(qtest.test(shifted) && utest.test(userInput)){
      shifted += userInput.slice(0,1);
      userInput = userInput.slice(1, userInput.length);
    }
    result = userInput + shifted + "ay";
  }
  return result;
}

function singleChar(userInput){
  var result;
  var nums = /[1234567890]/;
  var vowels = /[aeiou]/;
  if(nums.test(userInput)){
    return userInput;
  }else if(vowels.test(userInput)){
    result = userInput + "way";
  }else if(!vowels.test(userInput)){
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
    var output = phraseHandler(input);
    $("#translation").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
