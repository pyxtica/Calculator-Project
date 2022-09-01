function getInputValue(){
    let input = event.target.innerText
    console.log(input);
    printValue(input);
}

let buttons = document.getElementsByTagName('button');
console.log(buttons.length);
for(var i =0; i<buttons.length;i++){
    buttons[i].setAttribute('onclick','getInputValue()');
}

function printValue(val){
    let out = document.querySelector("#result");
    let current = out.innerHTML;
    if(out.innerHTML == "0"){
      
      if(val!= "C"){ 
        out.innerHTML ="";
        out.innerHTML += val;
      }
    }
    else{
      if(val!= "C" && val!="="){ 
        out.innerHTML += val;
      }
      if(val =="="){
        let res = out.innerHTML;
        out.innerHTML = eval(res);
      }
      if(val == "C"){
        out.innerHTML = "0";
      }
    }
  }

  percent.onclick = () => {
    oriMsg = screen.innerHTML;
    var i = Math.max(
        oriMsg.lastIndexOf("+"), 
        oriMsg.lastIndexOf("–"), 
        oriMsg.lastIndexOf("×"), 
        oriMsg.lastIndexOf("÷")
    );
    lastNum = oriMsg.substring(i+1, oriMsg.length);
    lastNum /= 100;
    screen.innerHTML = oriMsg.substring(0, i + 1) + lastNum;
}
