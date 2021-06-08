`use strict`;

const div = document.getElementById('main1');
const StartBtn = document.getElementById('start');

let num = 1;

const makeBtn = (ans,miss1,miss2,miss3) =>{
    if(ans){
    const btn = document.createElement('button');
    btn.textContent = ans;
    btn.addEventListener('click',() =>{
        num++;
        console.log(num);
       
    })
    return btn;
}
if(miss1){
    const btn = document.createElement('button');
    btn.textContent = miss1;
    btn.addEventListener('click',() =>{
        num++;
        console.log(num);
        
    })
    return btn;
}
if(miss2){
    const btn = document.createElement('button');
    btn.textContent = miss2;
    btn.addEventListener('click',() =>{
        num++;
        console.log(num);
        
    })
    return btn;
}
if(miss3){
    const btn = document.createElement('button');
    btn.textContent = miss3;
    btn.addEventListener('click',() =>{
        num++;
        console.log(num);
        
    })
    return btn;
}
    
}



async function callApi () {
    const res = await fetch ('https://opentdb.com/api.php?amount=10');
    const data = await res.json();

    

    const display = (num) => {

        div.textContent ='';
        
        const div2 = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.textContent = `問題${num}`;
        const p =  document.createElement('p');
        p.textContent = `[ジャンル] : ${data.results[num].category}`;
        const p2 =  document.createElement('p');
        p2.textContent = `[難易度] : ${data.results[num].difficulty}`;
        //p3 = 問題文//
        const p3 = document.createElement('p');
        p3.textContent =  `[問題文] : ${data.results[num].question}`;
     
     
        const ans = data.results[0].correct_answer;
        const miss1 = data.results[0].incorrect_answers[0];
        const miss2 = data.results[0].incorrect_answers[1];    
        const miss3 = data.results[0].incorrect_answers[2];
       
      
        div2.appendChild(h1);
        div2.appendChild(p);
        div2.appendChild(p2);
        div2.appendChild(p3);//問題文//
        div2.appendChild(makeBtn(ans));//↓選択ボタン//
        div2.appendChild(makeBtn(miss1));
        div2.appendChild(makeBtn(miss2));
        div2.appendChild(makeBtn(miss3));//選択ボタン↑//
     
        div.appendChild(div2);

     }

     display(num);

};

StartBtn.addEventListener('click',()=>{
    callApi();

});
