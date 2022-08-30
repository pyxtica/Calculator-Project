document.addEventListener("DOMContentLoaded", function(event) {
    let body = document.querySelector('body');
    let result = document.querySelector('#result');

    let clear = document.querySelector('#clear');
    let history = document.querySelector('#history');
    let equalTo = document.querySelector('#equalTo');
    let delete_single_num = document.querySelector('#delete_single_num');
    
    let Normal_btn = document.querySelectorAll('#Normal_btn');
    
    let initial_value = "";
    
    Normal_btn.forEach((Normal_btn, index)=>{
    Normal_btn.addEventListener('click', function(){
    let text = this.innerHTML;
    initial_value += text;
    result.innerHTML = initial_value;
    });
    });
    
    equalTo.addEventListener('click', function(){
    if (result.innerHTML != "") {
    history.innerHTML = result.innerHTML;
    result.innerHTML = eval(result.innerHTML);
    initial_value = eval(result.innerHTML);
    }else{
    alert('please enter any Number');
    }
    });
    
    clear.addEventListener('click', function(){
    result.innerHTML = "";
    initial_value = "";
    });    
    });