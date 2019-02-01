let a = document.getElementById('title');

a.innerText = "Name of City Form javascript get element";

aa= document.getElementById('btn1');
aa.addEventListener('click',function(){
    a.innerText = "Yout click the button";
    a.style.display='none';
    
});

/////////////////////////////////////////////////
// pring the array of item in html <P> tag with new line

let name = ["dhruv","kishan","mevada","Ahmedabad"];
let test_text = document.getElementById('test-text'); //<p> tag

for(let i=0;i<name.length;i++){
    test_text.innerText += '\n' + name[i];
    }


/////////////////////////////////////////////////////
//hiding and showing the buttons

let hiddingbutton = document.getElementById('Hidde_button');
let showbuttonn = document.getElementById('show_button');
let btn_h1 = document.getElementById('btn_h1');
let btn_h2 = document.getElementById('btn_h2');

hiddingbutton.addEventListener('click',function(){
    btn_h1.style.display ='none';
    btn_h2.style.display='none';
});

showbuttonn.addEventListener('click',function(){
    btn_h1.style.display ='inline';
    btn_h2.style.display ='inline';
});

